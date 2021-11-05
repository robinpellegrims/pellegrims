---
title: "Tell Windows 10 to use Grub"
description: "The BIOS no longer displays Grub but boots directly into Windows 10."
date: "2021-10-29"
tags: ["manjaro", "linux", "windows", "grub"]
published: true
---

## Issue

After replacing my defective motherboard on a dual boot system, the BIOS of the new motherboard no longer displayed Grub but booted directly into Windows 10.

## Solution

In Windows 10, configure the boot manager to show Grub instead of the default from Windows:

```shell
bcdedit /set {bootmgr} path \EFI\Manjaro\grubx64.efi
```

## Source
[https://forum.manjaro.org/t/drive-not-shown-as-bootable-by-motherboard-works-on-live-usb/53200/8](https://forum.manjaro.org/t/drive-not-shown-as-bootable-by-motherboard-works-on-live-usb/53200/8)
