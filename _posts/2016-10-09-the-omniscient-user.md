---
layout: post
title: The Omniscient User
date: 2016-10-09 19:53:32.000000000 +01:00
feature_image: /assets/omniscient-user.png
type: post
published: true
status: publish
permalink: /:year/:month/:title
categories:
- Makers Academy
tags:
- coding
- devise
- programming
- project
- rails
- ruby
- ruby-on-rails
- users
- web development
excerpt: How do you create an admin user in Rails? How much power should an admin really have? This week at Makers Academy, we're introduced to Rails.
---
<p>This week we were introduced to Ruby on Rails! The magical steam train! The web app framework that you can have up and running in no time! In my makers journey so far, it's probably the closest to magic that I've seen. You wave your wand and hey presto! It's done a bazillion things for you already. Dare I say that was exactly what I didn't like about it to begin with. I felt like I didn't have to do any thinking. I came to realise however that the advantage of Rails is not in finding satisfaction in difficult debugging and planning, but in being able to put together a project quickly and accomplish more in a shorter time frame as a result.</p>
<p>Our task this week was to create a simpler version of Yelp. For it, we needed three models: Users, Restaurants and Reviews, and these were all associated with each other.</p>
<ol class="default">
<li>Users could have many restaurants and reviews.</li>
<li>A restaurant belonged to one user and could have many reviews.</li>
<li>A review belonged to one user and one restaurant.</li>
</ol>
<p>Simple enough, but we had also some constraints on the user.</p>
<ol class="default">
<li>A user could not post more than one review.</li>
<li>A user could only edit their own restaurant or review.</li>
<li>A user could not review a restaurant that it has added.</li>
</ol>
<p>Once this basic foundation had been laid, we were free to add on whatever features we wanted. Google maps, photo uploads, average ratings, you name it. One idea we had was to implement a super-user. Or in more boring terms, an administrator. This then raises the question of how much authority an admin user should have.</p>
<p>Obviously in an app like Yelp, you might see abusive reviews or fake restaurants being added to the site, so it's handy to have someone who can monitor and moderate the site's content without muddling their way through a postgres database and interfering with data unnecessarily.</p>
<p>Since we didn't have time to actually set up such a user and instead focused on sorting out our AWS image hosting and integrating the Google Maps API, I did some research on how we might have gone about setting up an admin user.</p>
<p>It turns out there are two straight-forward ways of achieving this.</p>
<p><strong>Modify the User model</strong></p>
<pre><code>$ rails generate </code>migration AddAdminToUsers admin:boolean</pre>
<p>This method adapts the current User model to include an 'admin' attribute which can be set to true or false.</p>
<p>Update your migration file to look like this and follow with <code>rake db:migrate</code>.</p>
<pre><span class="pl-k">class</span> <span class="pl-en">AddAdminToUsers<span class="pl-e"> &lt; ActiveRecord::Migration</span></span>
  <span class="pl-k">def</span> <span class="pl-en">change</span>
    add_column <span class="pl-c1">:users</span>, <span class="pl-c1">:admin</span>, <span class="pl-c1">:boolean</span>, <span class="pl-c1">default:</span> <span class="pl-c1">false</span>
  <span class="pl-k">end</span>
<span class="pl-k">end</span></pre>
<p>The default status should be false. We are only looking to create one admin user.</p>
<p>It's then a matter of simple if statements to enforce limitations.</p>
<p>I like this method. It seems a much more instinctive way of doing it, but it really comes down to how much power an admin user has over a regular user. I can imagine if there is a large discrepancy in access rights, you could end up with some pretty messy, difficult to follow code. Enter the new model.</p>
<p><strong>Create a devise Admin model</strong></p>
<pre><code>$ rails generate devise Admin</code></pre>
<p>We could generate a parallel model using devise, like we did for our regular users and configure the model in the same way:</p>
<pre><span class="pl-k">class</span> <span class="pl-en">Admin<span class="pl-e"> &lt; ActiveRecord::Base</span></span>
  devise <span class="pl-c1">:database_authenticatable</span>, <span class="pl-c1">:trackable</span>, <span class="pl-c1">:timeoutable</span>, <span class="pl-c1">:lockable</span> 
<span class="pl-k">end</span></pre>
<p>The advantage of this is that any validations that or attributes that you set in your User model will by default not apply to the Admin role, unless you specify it in the model.</p>
<p>Which is better? Well it comes down to the situation. Number of users for one - if you have few users then maybe having an on-off switch would work. If you're dealing with hundreds or thousands, perhaps it's cleaner and easier to have a separate model. Especially if the project is growing, creating an Admin user helps keep your code clean and maintainable.</p>
<p>There is also the question of how much power you want to give your admin user, that I've kind of avoided. There are some dangers in having a user with unlimited access rights. Perhaps we might want to put some safety precautions in place. For example, rather than deleting an entry in the database, perhaps we might decide to <em>hide</em> the entry instead. This way we can prevent our front-end admin user from making irreversible changes to our database that sits in the back-end.</p>
<p>Since we didn't actually get to this part, we didn't engage in that much debate around it, but ultimately it is a question that has to be answered uniquely depending on the needs of the project and the needs of the users.</p>
<p>You can see our project <a href="http://holla-yelp-clone.herokuapp.com/" target="_blank">live</a> on heroku, and you can see our code for it <a href="https://github.com/lsewilson/holla" target="_blank">here</a>.</p>
