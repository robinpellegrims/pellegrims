---
title: 'Raspberry Pi NAS with Truecrypt and a 4 KB sector size external hard drive'
description: 'Turning a Raspberry Pi into a NAS with encrypted external storage'
date: '2013-10-29'
tags: ['tech', 'nas', 'raspberry pi', 'truecrypt', 'raspbian', 'openelec']
coverImage: '/assets/blog/raspberry-pi-nas-truecrypt-external-hard-drive/cover.jpg'
---

Lately I've been playing around with the [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) and I decided to use one as a custom [NAS](http://en.wikipedia.org/wiki/Network-attached_storage) to serve as a central backup system and as a central hub containing media for my two other Raspberry media centers (running [OpenElec](http://openelec.tv/)).

To provide the actual storage, I bought myself this [Seagate Expansion 3TB](http://www.seagate.com/external-hard-drives/desktop-hard-drives/expansion-hard-drive/) hard drive. I chose to install [Raspbian](http://www.raspbian.org/) as OS, as it seemed to be the obvious choice in terms of performance.

## Raspberry Pi as NAS

While the Pi's specifications won't allow you to build the most powerful NAS in the world, it still has a lot of advantages.

#### Advantages

- **Energy efficient**: the pi only uses 2W per hour, so all together this means a yearly cost of €5. Of course you need to add to that the energy usage of the external hard drive, which in my case is something like 9W. In total this means a yearly cost of of +/- €20. This is far less than any other NAS system.
- **Low noise**: the pi does not make any noise, so you only need to worry about the external hard drive's noise
- **Cheap**: pi's are available at around €40, a simple case costs €10 so for +/- €50 you have your NAS system
- **Small**: the pi is a pocket-size computer, so it fits anywhere.

#### Disadvantages

- **USB 2.0**: while my external hard drive has a USB 3-0 port, the pi only has 2 USB 2.0 ports. This limits the maximum transfer speed.
- **LAN 100Mbps**: if your other network devices have gigabit-speed (or better) lan ports, the transfer speed for reading/writing to your raspberry pi NAS will be limited.
- **Performance**: with 512MB of RAM and a default cpu speed of 700MHz you shouldn't expect any miracles, but overall the performance is acceptable if you're not running too many other cpu consuming applications on it

## Truecrypt

I started by formatting and encrypting my external drive on my Ubuntu box. I chose ext4 as filesystem. Then I connected the drive to my Raspberry Pi, using one of the 2 USB ports.

In the meantime I found [this post](http://reinhard-seiler.blogspot.be/2012/07/compile-truecrypt-on-raspberry-pi.html) by [Reinhard Seiler](http://reinhard-seiler.blogspot.be/), telling that Truecrypt doesn't come precompiled for the Raspberry Pi, so I needed to either compile it myself or use the compiled binary available on his blog. So I downloaded the binary from his blog and tried to mount my drive using the compiled Truecrypt binary. Raspbian does not provide some necessary kernel modules for encryption, so you need to use the flag -m=nokernelcrypto to use truecrypt encryption on the Raspberry.

That was when I ran into the following error message.

> _Error: The drive uses a sector size other than 512 bytes._
>
> Due to limitations of components available on your platform, partition/device-hosted volumes cannot be created/used on the drive.
>
> Possible solutions:
>
> - Create a file-hosted volume (container) on the drive.
> - Use a drive with 512-byte sectors.
> - Use TrueCrypt on another platform.

So apparently Truecrypt on Linux doesn't support hard drives with a sector size other than 512 bytes while my brand new external hard drive had a sector size of 4Kb which seems to be the new standard for recent hard drives. The same error appeared when mounting on my Ubuntu box, so it had to be a Truecrypt issue.

I then stumbled upon [this post](http://lenlo.wordpress.com/2013/03/19/truecrypt-mac-os-x-advanced-format-drives-true/) by a guy who ran into the same problem on Mac OSX. He eventually got it working by digging around in the code and compiling his own custom version of Truecrypt. [This post](http://karlherrick.com/dev/2013/01/21/compiling-truecrypt-on-raspberry-pi/) by Karl Herrick describes well how to compile Truecrypt on the Raspberry Pi, so I decided to take a look into Truecrypt's source code to eventually correct the issue and compile my own Truecrypt binary as well.

I downloaded the source code for Truecrypt 7.1a and I eventually found the following section in the file Core/Unix/CoreUnix.cpp on line 445:

```bash
#if defined (TC_LINUX)
  if (volume - > GetSectorSize() != TC_SECTOR_SIZE_LEGACY) {
      if (options.Protection == VolumeProtection::HiddenVolumeReadOnly)
          throw UnsupportedSectorSizeHiddenVolumeProtection();
      if (options.NoKernelCrypto)
          throw UnsupportedSectorSizeNoKernelCrypto();
  }
#endif
```

So it seems that when we're using the nokernelcrypto flag for mounting truecrypt-encrypted hard drives with sector sizes other than 512bytes, Truecrypt fails by design.

While not having any clue whatsoever as to why this was implemented this way, I commented out these 2 lines as follows:

```bash
#if defined(TC_LINUX)
if (volume - & gt; GetSectorSize() != TC_SECTOR_SIZE_LEGACY) {
    if (options.Protection == VolumeProtection::HiddenVolumeReadOnly)
        throw UnsupportedSectorSizeHiddenVolumeProtection();

    //if (options.NoKernelCrypto)
    //throw UnsupportedSectorSizeNoKernelCrypto();
}
#endif
```

Then I followed the instructions on [Karl Herrick's blog post](http://karlherrick.com/dev/2013/01/21/compiling-truecrypt-on-raspberry-pi/) to compile Truecrypt, but there were some errors in his script, so I adapted it as follows:

```bash
#get source files other than the TrueCrypt source
sudo wget -P /usr/local/src http://prdownloads.sourceforge.net/wxwindows/wxWidgets-2.8.11.tar.gz
sudo wget -P /usr/local/src/pkcs11 ftp://ftp.rsasecurity.com/pub/pkcs/pkcs-11/v211/pkcs11.h
sudo wget -P /usr/local/src/pkcs11 ftp://ftp.rsasecurity.com/pub/pkcs/pkcs-11/v211/pkcs11f.h
sudo wget -P /usr/local/src/pkcs11 ftp://ftp.rsasecurity.com/pub/pkcs/pkcs-11/v211/pkcs11t.h

#get and install dependent packages
sudo apt-get -y install libgtk2.0-dev libfuse-dev nasm libwxgtk2.8-dev

#extract, configure, and make wxWidgets
sudo tar -xzvf /usr/local/src/wxWidgets-2.8.11.tar.gz -C /usr/local/src
cd /usr/local/src/wxWidgets-2.8.11/
./configure
make

#setup, extract
export PKCS11_INC=/usr/local/src/pkcs11
sudo tar -xzvf /usr/local/src/TrueCrypt\\ 7.1a\\ Source.tar.gz -C /usr/local/src
cd /usr/local/src/truecrypt-7.1a-source

#comment out some lines that prevented building
sed -i 's#TC_TOKEN_ERR (CKR_NEW_PIN_MODE)#/\*TC_TOKEN_ERR (CKR_NEW_PIN_MODE)\*/#g' Common/SecurityToken.cpp
sed -i 's#TC_TOKEN_ERR (CKR_NEXT_OTP)#/\*TC_TOKEN_ERR (CKR_NEXT_OTP)\*/#g' Common/SecurityToken.cpp
sed -i 's#TC_TOKEN_ERR (CKR_FUNCTION_REJECTED)#/\*TC_TOKEN_ERR (CKR_FUNCTION_REJECTED)\*/#g' Common/SecurityToken.cpp

#compile, build, make!
sudo make WX_ROOT=/usr/local/src/wxWidgets-2.8.11/ wxbuild
sudo -E make WXSTATIC=1

echo
echo TrueCrypt should be found in /usr/local/src/truecrypt-7.1a-source/Main/
```

By using this custom version of Truecrypt, I finally got to mount my drive without any issues and it's still working like a charm after a few months. The drive is operating the way it should and I have not lost any data so far.
