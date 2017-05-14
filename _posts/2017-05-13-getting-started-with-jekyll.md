---
layout: post
title: Getting Started with Jekyll
date: 2017-05-12 18:56:35.000000000 +00:00
feature_image: /assets/jekyll-octocat.jpg
permalink: /:year/:month/:title
excerpt: I switched from Wordpress to Jekyll. It wasn't the easiest or most straightforward thing to do, but it was worth it and I've written up a guide for other Jekyll newbies!
---

When I initially started blogging, I started up on Wordpress. Using a CMS was a great way of getting started, and it did the job while I was still learning to code at Makers Academy. However, since finishing the course and starting my new job at Movebubble, I decided I wanted to freshen up the design and have more control over how the site was organised. To balance out my desire to have more control over design and the speed with which I wanted to get up and running, I decided to use Jekyll. If you aren't very familiar with HTML, CSS or Git, I would recommend taking a look at some of the free tutorials available on the internet on sites such as Codecademy before getting started with Jekyll. 

<strong>The Pros of Using Jekyll</strong>

<ul class="default">
    <li> Super easy blogging in markdown - no HTML faff needed</li>
    <li> Can be hosted for free on GitHub </li>
    <li> Plenty of free to use templates to get started on </li>
    <li> Version control </li>
    <li> Quick to load </li>
    <li> Control from the command line </li>
</ul>

On the downside, Jekyll isn't the easiest thing to get your head around straight away. The <a href="https://jekyllrb.com/">docs</a> are thorough and between that and StackOverflow, you'll have enough to get started. This is why I like the fact that there are so many open source templates. It was much easier and quicker for me to learn how it worked by investigating and deconstructing a current working theme than to build my own from scratch. Furthermore, since I've been working on a mobile app for the last 6 months, I'm a little out of practise when it comes to building sites for the browser.  Using a template takes care of a lot of the hassle of ensuring that your site is mobile-responsive. On the whole, you inherit a well structured code base as well. 

<strong>Building Your Site</strong>

Running `$ jekyll new [directory]` won't get you very far. In fact, this is the structure of what you get. 
<pre>
├── _posts
|   ├── 2017-05-14-sample-post.md
├── _config.yml
├── .gitignore
├── about.md
├── Gemfile
├── Gemfile.lock
└── index.md
</pre>

This will generate a very basic skeleton of a website. In fact, run `$ jekyll serve` and go to localhost:4000 to check it out. I imagine you're looking for something a bit jazzier than that. I definitely recommend taking a some of the free themes available on sites such as the following: 
<ul class="default">
<li> <a href="http://jekyllthemes.org/">http://jekyllthemes.org/ </a></li> 
<li> <a href="https://jekyllthemes.io/">https://jekyllthemes.io/ </a></li> 
<li> <a href="http://themes.jekyllrc.org">http://themes.jekyllrc.org </a></li>
</ul>

You might want to develop your own design from scratch, but that takes time and by choosing a theme first, you can get a pretty site deployed quickly and then work on changing the styling later. Think Agile development here! 

Anyway, if you want to use your site for anything more than listing every post you've ever written, our file structure will need to be fleshed out a bit. 

<pre>
├── _drafts
|   ├── 2017-08-14-draft-post.md
├── _includes
|   ├── head.html
|   ├── header.html
|   ├── footer.html
├── _layouts
|   ├── default.html
|   ├── post.html
├── _posts
|   ├── 2017-05-14-sample-post.md
├── images
├── css
├── js
├── _config.yml
├── .gitignore
├── about.md
├── contact.md 
├── Gemfile
├── Gemfile.lock
├── index.md // Jekyll will process this as your landing page of your site
└── projects.md
</pre>

That's a bit better, although perhaps a little scarier. Now let's take a look and see how each of these directories and files will be processed when your site gets built.

For each of the markdown files in the root directory (about.md, contact.md, index.md, projects.md), Jekyll will automatically generate a new root in your website for them, e.g. index.md => "/" , about.md => "/about".

<strong>_drafts</strong>

This is where you can store all of your draft posts. These won't be added to your build. As they won't be included in your build, the naming of them doesn't matter. I've just kept it in line with the standard Jekyll way for demonstration. 

<strong>_includes</strong>

Here you can store reusable code and sections of code to keep your layout files neater. I've suggested creating a head.html to keep all of your sheets and scripts, a header.html file if you want a navbar and a footer.html for the bottom section of your site. 

<strong>_layouts</strong>

This is an important directory to have, as getting these files right will make blogging in Jekyll much easier! At the top of any markdown file in your project, whether it's index.md or a blog post, Jekyll will refer to this directory to look for a layout for your content. 

If we take a look at the top of the sample blog post that Jekyll provides in their example or in any of the free templates, we'll see a bit of code at the top that looks like this:
<pre>
---
layout: post
title:  "Welcome to Jekyll!"
date:   2017-05-14 10:39:20 +0100
---
</pre>

The layout parameter that the file is referring to is the name of the file stored in the _layouts directory. Jekyll will provide default and post layouts for you if you don't specify one, but in order to overwrite their option, you'll need to have your own. 

When we come to designing our post.html file, we can then use liquid tags to pull in our blog post content.
<pre>
&lt;article&gt;
  &lt;header&gt;
    &lt;h2 class="title"&gt;{% raw %}{{ page.title }}{% endraw %}&lt;/h2&gt;
    &lt;p class="post-meta"&gt;{% raw %}{{ page.date }}{% endraw %}&lt;/p&gt;

  &lt;/header&gt;
  &lt;section class="content"&gt;
    {% raw %}{{ content }}{% endraw %}
  &lt;/section&gt;
&lt;/article&gt;
</pre>

The page.title and page.date will refer to the parameters you specified at the top of your sample-post.md file an the content will refer to the remaining content in that file! In fact, you can define any parameter in that section and use it in your layouts, whether it's tags, categories or featured image urls. Clever stuff! 

<strong>images, css, js</strong>

How you structure your assets is not as important. You could tidy your project up further with an /assets directory which contains all of your images, css and js. 
You can pull in your css and js files in your _includes/head.html file like so: 
<pre>
&lt;script src="{% raw %}{{ site.url }}{% endraw %}/js/your-javascript-file.js">&lt;/script&gt;
&lt;noscript&gt;
  &lt;link rel="stylesheet" href="{% raw %}{{ site.url }}{% endraw %}/css/your-css-file.css" /&gt;
&lt;/noscript&gt;
</pre>
It's important to prefix your references with {% raw %}{{ site.url }}{% endraw %} as otherwise they won't load properly when you deploy your site to production. 

<strong>Time to Deploy!</strong>

GitHub pages is a fantastic tool for this. It's free and as long as you follow the instructions, getting your site live is a breeze. 

If you haven't already, create a new repository on your GitHub account in the format your-github-username.github.io. It doesn't matter if you will be using a custom domain name as you can always redirect here, but to the repository name is non-negotiable.

Ensure your project is initialised with git and then set the origin as your GitHub repository.
<pre>
$ cd your-project-folder
$ git init . 
$ git remote add origin https://github.com/your-github-username/your-github-username.github.io.git
$ git add . 
$ git commit -m 'deploying website!'
$ git push origin master
</pre>

Boom! Go to https://your-github-username,github.io to check that your website is up and running! 

Anyway, that's a very basic introduction to getting started with Jekyll. I'll be revisiting this topic with guides on migrating your Wordpress content, paginating your blog posts, and using sass instead of css in your website! 