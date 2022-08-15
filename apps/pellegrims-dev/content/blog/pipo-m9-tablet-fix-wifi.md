---
title: 'Fixing WiFi on a PIPO M9 Pro tablet'
description: "Easy solution to fix my PIPO M9 Pro tablet's WiFi connection disconnecting every 5-10 seconds"
date: '2013-12-22'
tags: ['tech', 'hardware']
coverImage: '/assets/blog/pipo-m9-tablet-fix-wifi/cover.jpg'
---

Ever since I received my [PIPO M9 Pro tablet](http://www.pipo.com/product.php?id=123), I've been experiencing WiFi issues. Every 5-10 minutes, the tablet would simply lose its WiFi connection. Usually it took a few minutes before it would reconnect. No need to say this was very frustrating when doing anything that involves the network connection.

I've come across various forums ([FreakTab](http://www.freaktab.com/showthread.php?8568-Pipo-M9-Pro-wifi-antenna-modification-instructions 'FreakTab'), [ArcTablet](http://www.arctablet.com/blog/forum/pipo-max-m9/pipo-m9-pro-wifi-problem/) and [Tablette-Chinoise](http://tablette-chinoise.net/pipo-m9-pro-problemes-wifi-coupures-ralentissement-t2648/page180.html)) full of people complaining about the same issues. The problem seems to be caused by bad placement and bad insulation of the internal WiFi antenna.

Various solutions were proposed:

- Removing the grounding wire that touches the WiFi antenna and its wire
- Replacing the grounding wire and the WiFi antenna's wire by (better) shielded wires, using wires from old USB cables (involves soldering)
- Isolating the WiFi antenna and its wire by using insulating tape (see [instruction video](http://www.youtube.com/watch?v=d4rEhR01kuY))

I'm not very experienced with soldering and I didn't really like removing ground wires (they're there for a reason, right?), so I went for the last method.

I carefully opened my tablet using guitar plectra to put between the screen and the back case. The guy in the video does it with plastic cards, but I couldn't find anything like that. The WiFi antenna turns out to be the black plastic thing glued to the case at the top right. I carefully unglued it by using a screwdriver and I cutted some pieces of cardboard to put underneath the antenna. I then stabilized these pieces of cardboard with some insulation tape, glued the antenna on it and covered the antenna and its wire with a few more layers of insulating tape.

![Dialog screenshot {1024x768}](/assets/blog/pipo-m9-tablet-fix-wifi/image1.jpg)
![Dialog screenshot {1024x768}](/assets/blog/pipo-m9-tablet-fix-wifi/cover.jpg)
![Dialog screenshot {1024x768}](/assets/blog/pipo-m9-tablet-fix-wifi/image3.jpg)

After wrapping it all back together, I rebooted the tablet and the WiFi connection now seems to be much more stable. No more disconnects and usually more than 50Mbps where I had like 10Mbps before. I can't believe these tablets are sold with such a design failure. I guess that's what you get when buying cheap chinese electronics, right? ;-)
