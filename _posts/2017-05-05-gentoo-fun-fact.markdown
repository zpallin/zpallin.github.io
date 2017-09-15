---
layout: post
title:  "gentoo, fun fact of the day"
date:   2017-05-05 11:16:00 -0700
categories: 
- sysadmin
- gentoo 
- linux
- tech
---
I took up gentoo on a macbook pro. My coworker recommended it and seeing little reason not to try something new and different I took him up on his offer. Moments later I find myself waiting almost 20 minutes for virtualbox to compile via `emerge`. 

{% highlight bash %}
sudo emerge -av =virtualbox-5.1.18
{% endhighlight %}

I'm used to ubuntu, so the length of time to compile caught me off guard. For those who haven't heard of gentoo, it is a flavor of linux that focuses on performance, which means its package manager `portage` specifically compiles source code of packages rather than installing binaries. This is neat, but very different than what I am used to.

So what do I do with ~20 minutes? I decide to start compiling vagrant in another terminal window, which ultimately depends on virtualbox installation...

{% highlight bash %}
sudo emerge -av =vagrant-1.9.2
Would you like to merge these packages? [Yes/No] Yes

>>> Verifying ebuild manifests

>>> Emerging (1 of 2) app-emulation/virtualbox::gentoo

{% endhighlight %}

And to my surprise, portage waits patiently for my installation with virtualbox to complete. Immediately after vitualbox finishes, the vagrant installation starts. 

Neat.
