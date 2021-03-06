---
layout: post
title: How to develop an Atom Package
date: 2016-10-16 16:22:19.000000000 +01:00
feature_image: /assets/atomio.png
type: post
published: true
status: publish
permalink: /:year/:month/:title
categories:
- Guides
tags:
- Atom
- coding
- Coffeescript
- JavaScript
- programming
excerpt_separator: <!--more-->
---
So you want to build an Atom package. Some aspects of Atom make this an absolute joy, but some resources on the internet are seriously lacking, and this is my attempt to summarise all of the things I found out and learnt about building an Atom package.

<!--more-->

<span style="text-decoration:underline;">**Helpful Resources**</span>

<ul class="default">
<li><a href="http://flight-manual.atom.io/hacking-atom/">Hacking Atom</a> - the package development guide in Atom's Flight Manual</li>
<li><a href="https://atom.io/docs">Atom Docs</a> - helpful for navigating your way around Atom</li>
<li><a href="https://github.com/atom">Atom's Github</a> - The Atom team publish all the code for Atom and Atom-published packages which can be useful for reference</li>
</ul>
<p><span style="text-decoration:underline;"><strong>Compatible Languages</strong></span></p>
<ul class="default">
<li>JavaScript</li>
<li>CoffeeScript</li>
<li>Jasmine (for testing)</li>
</ul>
<p><strong><span style="text-decoration:underline;">Generating a package</span><br />
</strong></p>
<p>When you've decided whether you want to write your package in CoffeeScript or JavaScript, adjust your package generator settings.</p>

{% include image.html url="/assets/package-generator-settings.png" max-width="812px" alt="package-generator-settings" %}

<p><strong>Create in dev mode?</strong></p>
<p>You can open Atom in normal or developer mode. This is useful since it means you can install packages, such as your own, on developer mode without it affecting your normal Atom mode. I recommend selecting the check box to 'Create in Dev Mode', however it's not necessary.</p>
<p>Once you're package has been installed running <code>$ apm links</code> in the command line will allow you to see which of your local packages are installed in your regular and developer atom environments.</p>
<p>Now we simply need to generate your Atom package template from the toolbar.</p>

{% include image.html url="/assets/atom-package-generator.png" max-width="450px" alt="atom-package-generator" %}

<p>Atom will prompt you to provide the file path for where you want to store your package.</p>

{% include image.html url="/assets/my-package-files.png" max-width="326px" alt="my-package-files" %}

<ul class="default">
<li><strong>keymaps/my-package.cson - </strong>create hot-keys and shortcuts for commands in your package.</li>
<li><strong>menus/my-package.cson - </strong>create menu options to run package commands from the Atom toolbar.</li>
<li><strong>spec/ - </strong>store all of your test files in this folder so that the Jasmine spec runner knows what tests to run.</li>
<li><strong>lib/ -</strong> where all of your package code will live.</li>
<li><strong>styles/my-package.less -</strong> for any custom styling you want to add</li>
<li><strong><strong>package.json -</strong> </strong>how Atom will know where to retrieve the package details from (see details on publishing below).</li>
<li><strong><strong><strong>LICENSE.md - </strong></strong></strong>update with your name as the licensee.</li>
</ul>
<p><span style="text-decoration:underline;"><strong>Testing</strong></span></p>
<p>Now that you have your basic package set up, you can write your first test! Atom has an in-built Jasmine spec runner which you can use to run your tests.</p>

{% include image.html url="/assets/atom-spec-runner.png" max-width="496px" alt="atom-spec-runner" %}

<p>Writing tests for Atom packages is quite difficult. Test for simple results and play around with the Developer Tools (under the Developer menu with the spec runner) to understand it better.</p>
<p><span style="text-decoration:underline;"><strong>Accessing Dev Mode</strong></span></p>
<p>You can access Dev Mode via the Developer menu, however you can also open up atom from the command line in dev mode using <code>$ atom -d</code> or <code>$ atom --dev</code>.</p>
<p>If you haven't generated a package yourself, for example if you are making a pull request on an existing package, you can clone the package repo to your local system and link it to your dev mode manually.</p>

<pre>
$ git clone https://github.com/atom/image-view.git
$ cd image-view
$ apm link --dev . 
$ apm unlink --dev .   (to uninstall from dev mode)
$ apm unlink --dev --all (to unlink all local packages from dev mode)
</pre>

<p><span style="text-decoration:underline;"><strong>Publishing</strong></span></p>

<p>So you're happy with where you are with your package, and now it's time to publish it. This is super straightforward.</p>
<ol class="default">
<li><strong>Push/merge to the master branch on Github:</strong> Double check as well that the master branch is the default branch on your repo.</li>
<li><strong>Check you have written a good README: </strong>The package generator will create a README template for you in the root directory, but you'll need to update yours with installation and set up instructions for all of your potential users!</li>
<li><strong>Check your package.json file: </strong>Double check that you have updated the name, description and Github repository. Leave all other fields unchanged if you used the package generator, otherwise see Atom's <a href="http://flight-manual.atom.io/hacking-atom/sections/publishing/#publishing">publishing guide</a> on what to include.</li>
<li><strong>Get an Atom API key: </strong>Visit your <a href="https://atom.io/account">Atom account page</a> and either sign in using your Github account. Here you can generate an API token.</li>
<li><strong>Publish from the command line:</strong><strong><br /></strong><pre>$ cd your-package-name
$ apm publish minor</pre>
You will be prompted to enter your API key. Atom will automatically update your version number and publish the package. You'll be able to view it at https://atom.io/packages/your-package-name.</li>
<li><strong>Invite people to download and code review your package: </strong>Post about it in the Atom Slack community, share it with friends and encourage them to submit issues and pull requests on your repo on Github.</li>
</ol>
<p><strong><span style="text-decoration:underline;">Updating your package </span></strong></p>
<p>If you find any bugs or issues once the package has already been published, it's easy to make changes.</p>
<ol class="default">
<li>Push your changes to your Github repo and merge to the master branch.</li>
<li>Depending on how big the changes you made were, you can use the same command to publish your changes.<pre>$ apm publish patch   (bumps the version number up by 0.0.1)
$ apm publish minor   (bumps the version number up by 0.1.0)
$ apm publish major   (bumps the version number up by 1.0.0)</pre> Again, refer to see Atom's <a href="http://flight-manual.atom.io/hacking-atom/sections/publishing/#publishing">publishing guide</a> on when to use each of the commands.</li>
</ol>
<p>So there we have it, a basic guide to setting up an atom package and how to get going on developing an atom package!</p>
