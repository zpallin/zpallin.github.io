---
layout: post
title:  "ruby is so much fun..."
date:   2017-09-16 10:11:10 -0700
categories: 
- rvm
- ruby
- tech
---
<!-- -->
{% highlight bash %}
$ bundle install
The latest bundler is 1.16.0.pre.2, but you are currently running 1.15.3.
To update, run `gem install bundler --pre`
Warning: the running version of Bundler (1.15.3) is older than the version that created the lockfile (1.15.4). We suggest you upgrade to the latest version of Bundler by running `gem install bundler`.
Your Ruby version is 2.4.1, but your Gemfile specified 2.3.3
{% endhighlight %}

Ugh...

<!-- -->
{% highlight bash %}
$ gem install bundler --pre
Fetching: bundler-1.16.0.pre.2.gem (100%)
Successfully installed bundler-1.16.0.pre.2
1 gem installed
{% endhighlight %}

Cool.

<!-- -->
{% highlight bash %}
$ bundle install
Your Ruby version is 2.4.1, but your Gemfile specified 2.3.3
{% endhighlight %}

...

<!-- -->
{% highlight bash %}
$ rvm
-bash: rvm: command not found
{% endhighlight %}

... ??

<!-- -->
{% highlight bash %}
$ rbenc
-bash: rbenc: command not found
{% endhighlight %}

Egghhh...

<!-- -->
{% highlight bash %}
$ rbenv
-bash: rbenv: command not found
{% endhighlight %}

Ah... but aw...

<!-- -->
{% highlight bash %}
$ brew install rvm
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 2 taps (caskroom/cask, homebrew/core).
==> New Formulae
stuff                             stuff                             stuff
==> Updated Formulae{% for item in (1..42) %}
stuff                             stuff                             stuff{% endfor %}
==> Renamed Formulae
stuff -> otherstuff
Error: No available formula with the name "rvm"
==> Searching for a previously deleted formula...
Error: No previously deleted formula found.
==> Searching for similarly named formulae...
==> Searching local taps...
Error: No similarly named formulae found.
==> Searching taps...
==> Searching taps on GitHub...
Error: No formulae found in taps.
{% endhighlight %}

Gah...

<!-- -->
{% highlight bash %}
$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled --ruby
{% endhighlight %}

Ahah!

<!-- -->
{% highlight bash %}
$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled --ruby
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100   194  100   194    0     0    415      0 --:--:-- --:--:-- --:--:--   415
100 24090  100 24090    0     0  35365      0 --:--:-- --:--:-- --:--:--  398k
Downloading https://github.com/rvm/rvm/archive/1.29.3.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.3/1.29.3.tar.gz.asc
Found PGP signature at: 'https://github.com/rvm/rvm/releases/download/1.29.3/1.29.3.tar.gz.asc',
but no GPG software exists to validate it, skipping.

Upgrading the RVM installation in /Users/Zeppelin/.rvm/
    RVM PATH line found in /Users/Zeppelin/.mkshrc /Users/Zeppelin/.profile /Users/Zeppelin/.zshrc.
    RVM PATH line not found for Bash, rerun this command with '--auto-dotfiles' flag to fix it.
    RVM sourcing line found in /Users/Zeppelin/.profile /Users/Zeppelin/.bash_profile /Users/Zeppelin/.zlogin.
Upgrade of RVM in /Users/Zeppelin/.rvm/ is complete.

Upgrade Notes:

  * No new notes to display.

Ruby enVironment Manager 1.29.3 (latest) (c) 2009-2017 Michal Papis, Piotr Kuczynski, Wayne E. Seguin

Already installed ruby-2.4.1.
To reinstall use:

    rvm reinstall ruby-2.4.1

Creating alias default for ruby-2.4.1....

  * To start using RVM you need to run `source /Users/Zeppelin/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.

{% endhighlight %}

Hehehe.

{% highlight bash %}
rvm reinstall ruby-2.4.1
-bash: rvm: command not found
{% endhighlight %}

Noooooooooo!

<!-- -->
{% highlight bash %}
  * To start using RVM you need to run `source /Users/Zeppelin/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.
{% endhighlight %}

Not sure if I'm just dumb or just bad at reading errors.

<!-- -->
{% highlight bash %}
$ source /Users/Zeppelin/.rvm/scripts/rvm
$ rvm reinstall ruby-2.4.1
{% endhighlight %}

C'mon...

<!-- -->
{% highlight bash %}
Warning! PATH is not properly set up, '/Users/Zeppelin/.rvm/gems/ruby-2.4.1/bin' is not at first place.
         Usually this is caused by shell initialization files. Search for 'PATH=...' entries.
         You can also re-add RVM to your profile by running: 'rvm get stable --auto-dotfiles'.
         To fix it temporarily in this shell session run: 'rvm use ruby-2.4.1'.
         To ignore this error add rvm_silence_path_mismatch_check_flag=1 to your ~/.rvmrc file.
ruby-2.4.1 - #removing src/ruby-2.4.1..
ruby-2.4.1 - #removing rubies/ruby-2.4.1..
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.12/x86_64/ruby-2.4.1.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for osx.
Installing requirements for osx.
Updating system.........
Installing required packages: coreutils, openssl@1.1.....
==> Upgrading 1 outdated package, with result:
automake 1.15.1
==> Upgrading automake
==> Downloading https://homebrew.bintray.com/bottles/automake-1.15.1.sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring automake-1.15.1.sierra.bottle.tar.gz
🍺  /usr/local/Cellar/automake/1.15.1: 131 files, 3.0MB
Certificates bundle '/usr/local/etc/openssl@1.1/cert.pem' is already up to date.
Requirements installation successful.
Installing Ruby from source to: /Users/Zeppelin/.rvm/rubies/ruby-2.4.1, this may take a while depending on your cpu(s)...
ruby-2.4.1 - #downloading ruby-2.4.1, this may take a while depending on your connection...
ruby-2.4.1 - #extracting ruby-2.4.1 to /Users/Zeppelin/.rvm/src/ruby-2.4.1....
ruby-2.4.1 - #applying patch /Users/Zeppelin/.rvm/patches/ruby/2.4.1/random_c_using_NR_prefix.patch.
ruby-2.4.1 - #configuring...................................................................
ruby-2.4.1 - #post-configuration.
ruby-2.4.1 - #compiling..............................................................
ruby-2.4.1 - #installing.......
ruby-2.4.1 - #making binaries executable..
ruby-2.4.1 - #downloading rubygems-2.6.13
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  750k  100  750k    0     0  2670k      0 --:--:-- --:--:-- --:--:-- 2672k
ruby-2.4.1 - #extracting rubygems-2.6.13....
ruby-2.4.1 - #removing old rubygems.........
ruby-2.4.1 - #installing rubygems-2.6.13..........................
ruby-2.4.1 - #gemset created /Users/Zeppelin/.rvm/gems/ruby-2.4.1@global
ruby-2.4.1 - #importing gemset /Users/Zeppelin/.rvm/gemsets/global.gems.............................|
ruby-2.4.1 - #generating global wrappers........
ruby-2.4.1 - #gemset created /Users/Zeppelin/.rvm/gems/ruby-2.4.1
ruby-2.4.1 - #importing gemsetfile /Users/Zeppelin/.rvm/gemsets/default.gems evaluated to empty gem list
ruby-2.4.1 - #generating default wrappers........
ruby-2.4.1 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
Install of ruby-2.4.1 - #complete
Ruby was built without documentation, to build it run: rvm docs generate-ri
Making gemset ruby-2.4.1 pristine...................................................................|
Making gemset ruby-2.4.1@global pristine............................................................-
{% endhighlight %}

Alright!

<!-- -->
{% highlight bash %}
$ bundle install
Warning: the running version of Bundler (1.14.6) is older than the version that created the lockfile (1.15.4). We suggest you upgrade to the latest version of Bundler by running `gem install bundler`.
Your Ruby version is 2.4.1, but your Gemfile specified 2.3.3
{% endhighlight %}

<big>(╯°□°）╯︵ ┻━┻)</big>

{% highlight bash %}
$ rvm install 2.3.3
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.12/x86_64/ruby-2.3.3.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for osx.
Updating certificates bundle '/usr/local/etc/openssl/cert.pem'
Requirements installation successful.
Installing Ruby from source to: /Users/Zeppelin/.rvm/rubies/ruby-2.3.3, this may take a while depending on your cpu(s)...
ruby-2.3.3 - #downloading ruby-2.3.3, this may take a while depending on your connection...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 13.7M  100 13.7M    0     0  7456k      0  0:00:01  0:00:01 --:--:-- 7453k
ruby-2.3.3 - #extracting ruby-2.3.3 to /Users/Zeppelin/.rvm/src/ruby-2.3.3....
ruby-2.3.3 - #applying patch /Users/Zeppelin/.rvm/patches/ruby/ruby_2_3_gcc7.patch.
ruby-2.3.3 - #applying patch /Users/Zeppelin/.rvm/patches/ruby/2.3.3/random_c_using_NR_prefix.patch.
ruby-2.3.3 - #configuring...........................................................
ruby-2.3.3 - #post-configuration.
ruby-2.3.3 - #compiling..............................................................
ruby-2.3.3 - #installing.........
ruby-2.3.3 - #making binaries executable..
ruby-2.3.3 - #downloading rubygems-2.6.13
ruby-2.3.3 - #extracting rubygems-2.6.13.....
ruby-2.3.3 - #removing old rubygems.........
ruby-2.3.3 - #installing rubygems-2.6.13..........................
ruby-2.3.3 - #gemset created /Users/Zeppelin/.rvm/gems/ruby-2.3.3@global
ruby-2.3.3 - #importing gemset /Users/Zeppelin/.rvm/gemsets/global.gems.............................|
ruby-2.3.3 - #generating global wrappers........
ruby-2.3.3 - #gemset created /Users/Zeppelin/.rvm/gems/ruby-2.3.3
ruby-2.3.3 - #importing gemsetfile /Users/Zeppelin/.rvm/gemsets/default.gems evaluated to empty gem list
ruby-2.3.3 - #generating default wrappers........
ruby-2.3.3 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
Install of ruby-2.3.3 - #complete
Please be aware that you just installed a ruby that requires        2 patches just to be compiled on an up to date linux system.
This may have known and unaccounted for security vulnerabilities.
Please consider upgrading to ruby-2.4.1 which will have all of the latest security patches.
Ruby was built without documentation, to build it run: rvm docs generate-ri
{% endhighlight %}

<i>sigh...</i>

{% highlight bash %}
$ rvm --version
rvm 1.29.3 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
{% endhighlight %}

Oh... my... god... finally. Now I can just `bundle install`

{% highlight bash %}
$ bundle install
/usr/local/Cellar/ruby/2.4.1_1/lib/ruby/2.4.0/rubygems.rb:270:in `find_spec_for_exe': can't find gem bundler (>= 0.a) (Gem::GemNotFoundException)
	from /usr/local/Cellar/ruby/2.4.1_1/lib/ruby/2.4.0/rubygems.rb:298:in `activate_bin_path'
	from /usr/local/bin/bundle:22:in `<main>'
{% endhighlight %}

Welp. Onto the next problem.
