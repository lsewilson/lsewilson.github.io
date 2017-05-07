---
layout: post
title: No Need to Fear (Dependency) Injections
date: 2016-08-29 22:45:51.000000000 +01:00
type: post
published: true
status: publish
categories:
- Makers Academy
tags:
- coding
- Dependency Injection
- Dependency Inversion
- programming
- SOLID
excerpt_separator: <!--more-->

meta:
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '26280934651'
  _thumbnail_id: '916'
author:
  login: lsewilson
  email: laurawilson@hotmail.co.uk
  display_name: Laura
  first_name: ''
  last_name: ''
---
<p>Dependency injection really isn't as complicated as it sounds. Last week, a massive influx of new terminology and being introduced to new concepts, without having much time to digest them, sent my brain into panic mode. New concepts and phrases kept getting thrown around, 'dependency injection' being one of them, and somewhere along the way I got a bit lost in the crossfire. But that was last week, and now it's time to explain what it is, why you do it and show you how it's done.</p>
<p><!--more--></p>
<p><span style="text-decoration:underline;">What is Dependency Injection?</span></p>
<p>Dependency injection is an idea born from the 'Dependency Inversion Principle', aka the 'D' in the SOLID principles which underpin object-oriented design. We don't want objects to be responsible for creating their own dependencies. We can get around this problem by <em>injecting</em> that dependency in. Confused? I was too. Let's have a look at an example.</p>
<p>This weekend, I was working on a restaurant takeaway ordering program.</p>
<p>[caption id="attachment_915" align="aligncenter" width="300"]<img class="alignnone size-full wp-image-915 aligncenter" src="{{ site.baseurl }}/assets/bad_example.png" alt="bad_example" width="300" height="109" /> Bad example[/caption]</p>
<p>The problem with this code is that every time we create a new Takeaway instance, we're also creating a new Menu instance. That's fine if you have one takeaway and one menu and they are all one and the same, but what if you're Deliveroo and you're dealing with several customers all trying to get their takeaway orders from different restaurants and menus? This is a better example:</p>
<p>[caption id="attachment_916" align="aligncenter" width="300"]<img class=" size-full wp-image-916 aligncenter" src="{{ site.baseurl }}/assets/good_example.png" alt="good_example" width="300" height="109" /> Good example[/caption]</p>
<p>The code has been subtly changed here. Now we can instantiate a Takeaway, but we have the option to define what menu it's instantiated with. This will currently default to whatever you have in the Menu class, but it can be easily overridden. This is dependency injection. It doesn't necessarily have to be in the initialize method either. It can apply to any method where you're creating a new instance of a different class.</p>
<p><span style="text-decoration:underline;">Why is it useful?</span></p>
<p>Well, we touched on this a little bit, but essentially it allows your program to be flexible and it decouples our objects. Why is that so important? It reduces the impact that any changes to one class may have on another class that it is connected to. We don't have to worry about how adjustments to one class may influence another, as they are self-contained objects. Ideal!</p>
<p>The example I used here was a pretty basic one. The problem is, so many articles on the web go into a lot more detail which only make it more confusing for newbies like me. The key thing to take away is that the ability to make these isolated changes can result in massive time and cost savings to you as an individual or businesses as a whole.</p>
<p>&nbsp;</p>