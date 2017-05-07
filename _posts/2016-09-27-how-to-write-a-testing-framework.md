---
layout: post
title: How to write a testing framework
date: 2016-09-27 21:34:44.000000000 +01:00
type: post
published: true
status: publish
categories:
- Makers Academy
tags:
- coding
- JavaScript
- TDD
- test-driven development
- testing framework
excerpt_separator: <!--more-->
---
<p>The task for this week was to build a Javascript front-end single page app framework. Ok, that doesn't sound too bad. Here's the catch - we weren't allowed to use any existing JS libraries. No Node, Express, jQuery, Jasmine, Mocha.... nothing! Eeek!</p>
<p><!--more--></p>
<p>Before we could even get started on the app, we needed to work out how we were going test our code. TDD is one the pillars of the Makers education after all. Despite using a string of testing libraries over the last few weeks, RSpec, Capybara, Jasmine, Mocha, Chai, I've never actually taken the time to look at the code and figure out how it works. So this is my attempt at breaking down a very elementary testing framework.</p>
<p>This is what a typical Jasmine test looks like:</p>
<pre><code>describe("A suite, function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});</code></pre>
<p>The test itself is the expect statement. The describe and it wrappers do two things - add a string that we can associate with the expectation when we run the script, otherwise who knows which test is passing and which is failing, and then execute the function that it contains.</p>
<p>Let's focus on the expectation. <code>expect()</code> is a function which returns an object that our <em>matcher </em>function <code>toBe()</code> can respond to. When we run an expectation we are effectively comparing two arguments and we want to determine if they are equal to each other. With that in mind, let's think about how to build the functionality behind an expectation.</p>
<p>If we focus to begin with on building an object which can respond to a matcher function first, this is what we end up with:</p>
<pre><code>function Test() { }

</code><code>Test.prototype = {
  toBe: function(expected) {
    return **something** === expected 
  }
} </code></pre>
<p>Here, we've made a Test constructor and we're then adding our matcher as a Test prototype function. We pass in an <code>expected</code> argument as we would in a test and we then compare that argument with our <code>something</code> variable. So how do we pass it our 'something' that we want to compare?</p>
<p>This is what we did:</p>
<pre><code>function expect(subject) {
  return new Test(subject);
}</code></pre>
<p>Our <code>expect()</code> function is a standalone function, outside of the Test prototype and it accepts an argument, our test subject. Let's update our Test prototype now so that we can compare our test subject with our expected value!</p>
<pre><code>function Test(subject) {
  this.subject = subject
</code><code>}
Test.prototype = {
  toBe: function(expected) {
    return this.subject === expected 
  }
} </code></pre>
<p>When we create our new Test object in our expectation (and it should be a new object since every 'expect' statement is its own test), we assign the argument we pass it to a property of that prototype. This allows us to refer to it in our matcher functions.</p>
<p><strong>Boom!</strong> That's our test done. We can also extend our matcher library simply by adding functions to our Test prototype. How beautifully simple is that?</p>
<p>So, we have our fundamentals and we have the code to now write a test, but it wouldn't be complete in my opinion without our describe/it functions. If we look at our Jasmine statement, we can see that we pass our describe and it functions two arguments as such:</p>
<pre><code>describe(string, callback)</code></pre>
<p>where the string is the test description and the callback is a function which contains either the <code>it()</code> function or the <code>expect()</code> function.</p>
<p>Like our <code>expect()</code> function, the describe and it functions are standalone functions and don't belong to anything. We can write them like this:</p>
<pre><code>function describe(string, callback) {
  console.log(string);
  callback();
}

</code><code>function it(string, callback) {
  console.log(string);
  callback();
}</code></pre>
<p>We start simply by printing our test message to the console and then we execute our callback. In our Jasmine example, when we execute <code>it</code>, "contains spec with an expectation" will now be logged to our console first and then we will execute <code> function() { expect(true).toBe(true)</code>.</p>
<p>However we still haven't dealt with the fact that we need somewhere to run our new test script. Jasmine has a file called SpecRunner.html which we can open in a normal browser.</p>
<p>In the <code>&lt;head&gt;</code> element of the SpecRunner, we can load our new, minimalist test library, our file containing all our new tests and the file that we are testing as scripts.</p>
<p>&nbsp;</p>
<p>If we want to see the outcome of our tests in the console, we will have modify our it functions to console.log() the results, but fundamentally we now have a very basic test framework!</p>
<p>You can see our test library, Blobfish, <a href="https://github.com/lsewilson/Blobfish">here</a> (yes, that is what we called it!)</p>
<p><img class="alignnone size-full wp-image-1521 aligncenter" src="{{ site.baseurl }}/assets/blobfish.gif" alt="blobfish" width="280" height="204" /></p>
