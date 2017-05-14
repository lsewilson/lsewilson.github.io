---
layout: post
title: A Beginner's Guide to AJAX
date: 2016-09-15 13:48:17.000000000 +01:00
type: post
permalink: /:year/:month/:title
published: true
status: publish
categories: []
tags:
- AJAX
- JavaScript
- jQuery
excerpt_separator: <!--more-->
---
AJAX is an acronym for Asynchronous JavaScript and XML. Ever wondered how Google returns suggested searches as soon as you start typing? Or why the page url doesn't change when you refresh some data on the page? That's AJAX.

<blockquote>"AJAX is a way to have a 'conversation' with the server and display the results without reloading the page."
</blockquote>
<!--more-->

<span style="text-decoration:underline;"><strong>Why is it useful?</strong></span>

<ul class="default">
<li>Allows separation of front-end and back-end code.</li>
<li>The number of page transitions in a web application is reduced.</li>
<li>Reduces the amount of uploaded and downloaded data on a page.</li>
<li>AJAX can be used to retrieve API data and multiple APIs can be compiled on one page.</li>
</ul>
<span style="text-decoration:underline;"><strong>How it works</strong></span>

{% include image.html url="/assets/ajax_diagram.png" max-width="458px" alt="ajax-diagram" %}

<ol class="default">
<li>Initiate an HTTP request to a server by inputting the url of the website you're visiting, e.g. google.com. Page loads when response is received from the server.</li>
<li>Event triggered on client-side - e.g. a user starts typing a search.</li>
<li>AJAX call fired: XML HTTP request sent to server.</li>
<li>Server script processes the request.</li>
<li>Server sends data back to client using XML.</li>
<li>Javascript callback function  retrieves the data and updates page with suggested searches.</li>
</ol>
<span style="text-decoration:underline;"><strong>Sample AJAX  function with jQuery</strong></span>

{% include image.html url="/assets/ajax_example.png" max-width="555px" alt="ajax-example"%}

<span style="text-decoration:underline;"><strong>Disadvantages of AJAX and single page applications</strong></span>

<ul class="default">
<li>Data loss - in a basic SPA (single page application), your viewing history is not stored like your browser history.</li>
<li>The browser bookmarking, back and refresh functions are useless.</li>
<li>More difficult for search engines to crawl.</li>
<li>Security! No sensitive data should be passed using AJAX.</li>
</ul>
Thanks to <a href="http://www.github.com/rosieallott">Rosie</a> for help with research and the beautiful diagram!

