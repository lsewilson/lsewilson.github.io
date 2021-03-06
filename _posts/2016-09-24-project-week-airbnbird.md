---
layout: post
title: 'Project week: AirBnBird'
date: 2016-09-24 13:54:03.000000000 +01:00
permalink: /:year/:month/:title
type: post
published: true
status: publish
categories:
- JavaScript
- Makers Academy
tags:
- Express
- Node.js
- project
- Sequelize
- teamwork
excerpt_separator: <!--more-->
---
Week 6 arrived at Makers and finally we started working in groups! I've enjoyed pairing, but now that we've learnt just enough to take on all aspects of web development, working in groups feels so much more efficient. I had a lot of fun this week and was fortunate to be grouped with great coders, who I knew I would enjoy working with.

<strong>The Brief</strong>

We were set with the challenge to build 'Makers BnB', an Airbnb clone, and we were free to use whatever technology we wanted. We had two choices really - Rails or Node.js. Airbnb is actually built on Rails. It's suited to it. So why did we end up choosing Node?

<!--more-->

{% include image.html url="/assets/nodejs.png" max-width="184px" alt="nodejs" %}

<strong>Technology decisions</strong>

When you think about the context of the course, we'd just spent a week learning Javascript and not one of us yet felt confident using it. To go back and start using Ruby again would feel like building a house, only to not bother with the roof. Our mentors had all taken on the challenge in Node as well, so we knew we could ask for help if necessary.

After deciding that our goal was to consolidate our Javascript knowledge and to understand what it was like to learn an entire new stack for a project, rather than focusing on completing the project, we settled on using Node.js and Express for our framework, Sequelize as our ORM and PostgreSQL for our database. All of these technologies are popular and well documented, so we thought they shouldn't be too hard to navigate... right?

{% include image.html url="/assets/giphy.gif" max-width="250px" alt="giphy" %}

<strong>Mapping out our project</strong>

We spent our first day breaking down our user stories, getting to know how our <a href="https://waffle.io" target="_blank">Waffle</a> board worked and setting up our environments. This was really valuable. We all had a rough idea of how everything was going to fit together and what steps would require what. We invested a lot of time in this and it really paid off since it meant that when we did start, we started on the right foot.

<strong>Challenges</strong>

Our first challenge was probably working out how we were going to divide the workload. Would we break it up into front-end and back-end? Would we just mob the whole thing? What could we work on without interfering with what someone else was working on getting merge conflicts?

We decided to mob the first part of the project so that we all knew how it worked as a whole. This meant that we wouldn't have to divide up working on front-end and back-end and only understanding half of the application. This is possibly not the most effective way to achieve MVP, but it satisfied our goals for the week.

<a href="http://docs.sequelizejs.com/en/v3/">Sequelize</a> also posed a few problems. Although there's a lot of information in the docs, it was difficult finding examples for what we needed. And when things didn't work how we wanted them to, for example, our database cleaner, we found it difficult to identify why suggested solutions weren't working.

For me, not finishing a project is hard. And as of writing this blog post, there's still some work to be done (you can see our project repo <a href="https://github.com/lsewilson/makers-bnb">here</a>). I definitely want to come back and add in the messaging functionality, perhaps a page where you could view your bookings and tidy up the CSS.

<strong>Key Takeaways</strong>

<span style="text-decoration:underline;">Stick to the user stories:</span> we spent a lot of time adding functionality that hadn't been asked for, e.g. password encryption. This was useful for learning, but ultimately sacrificed time that could have been spent developing features. If our client had been presenting their idea to investors and didn't have a basic functioning mock up of their website, I can't imagine they'd be too pleased.

<span style="text-decoration:underline;">Celebrate the wins:</span> even the smallest. This really helped keep our spirits high and it felt like we were constantly achieving. Using our waffle board really helped too. Sometimes it felt like we'd been stuck on something too long and achieved little, but we just had to glance at waffle to see that we'd accomplished a lot.

<span style="text-decoration:underline;">Don't be afraid:</span> to take on new technologies, to admit you don't understand, to ask questions, to <strong>have fun</strong>!
