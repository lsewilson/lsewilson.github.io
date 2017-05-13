---
layout: post
title: 'PreCourse Week 2: The Recurring Nightmare of Recursion'
date: 2016-07-27 14:05:27.000000000 +01:00
type: post
published: true
status: publish
categories:
- Makers Academy
- Precourse
tags:
- coding
- Learn to Program
- programming
- recursion
- ruby
excerpt_separator: <!--more-->
meta:
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '25207135268'
author:
  login: lsewilson
  email: laurawilson@hotmail.co.uk
  display_name: Laura
  first_name: ''
  last_name: ''
---
I find it incredibly reassuring when I google 'recursion', the concept I really struggled with on this week's challenge, this post on <a href="https://www.topcoder.com/community/data-science/data-science-tutorials/an-introduction-to-recursion-part-1/" target="_blank">topcoder.com</a> came up as one of the top results:
<blockquote>'It is often hard, however, to see how a problem can be approached recursively; it can be hard to “think” recursively'</blockquote>
Yep, you can say that again. Of course it's hard to think recursively. I've been educated my whole life to 'get to the point'. To 'stop going round in circles'. And now, I've find out that actually this is one of the most powerful tools in programming. I had some unlearning to do!
[caption id="attachment_373" align="aligncenter" width="400"]<img class="alignnone size-full wp-image-373" src="{{ site.baseurl }}/assets/yoda.gif" alt="yoda" width="400" height="169" /> Yoda nails it again[/caption]
<!--more-->
Our challenge this week was to complete chapters 9 - 14 of Chris Pine's 'Learn to Program'. We had been advised to work on each exercise for a maximum of 1 hour before checking the solutions at the back of the book. I was doing ok until chapter 10, where we had to construct our own sorting algorithm. EASY! Ruby has an in built sort method: <strong>.sort</strong>! Oh wait, we're not allowed to use it. Uh oh.
Ok, so where do we start? I decided to plan out how I would do that manually, and then I would try and put it in to computer terms.
<ol class="default">
<li>Use .min to find the lowest value in the unsorted array, move it to a new array called 'sorted' and delete it from the unsorted array.</li>
<li>Re-iterate process on the remaining elements in the unsorted array.</li>
</ol>
The biggest problem I found was actually writing the code in such a way that my computer would understand. As I am not yet Ruby-fluent, I got frustrated by lines of code which kept returning errors, when I thought they would work. This task became more about understanding Ruby grammar than it did learning vocabulary.
My first answer looked like this:
<img class=" size-full wp-image-434 aligncenter" src="{{ site.baseurl }}/assets/sortcode-jpg.png" alt="sortcode.jpg" width="326" height="167" />
It needed improving. It failed the rspec tests since any duplicate values would both be deleted from the array.  Also, I wasn't even sure if .min was entirely allowed since Chris Pine recommends using '&gt;'.
Just getting to this stage was such an uphill struggle. I got so wound up thinking my logic was the problem when in reality, a lot of it was down to unnecessary code, such as sorted = [] (which created a new empty array on every recursion), or using the wrong notation, e.g. [] instead of ().
Getting past those mental barriers though gave me the confidence to try a new approach and my solution eventually passed the test!
Check it out on my <a href="https://github.com/lsewilson/learn_to_program/blob/master/ch10-nothing-new/sort.rb">GitHub</a>!

