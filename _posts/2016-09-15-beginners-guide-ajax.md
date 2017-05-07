---
layout: post
title: A Beginner's Guide to AJAX
date: 2016-09-15 13:48:17.000000000 +01:00
type: post
published: true
status: publish
categories: []
tags:
- AJAX
- JavaScript
- jQuery
excerpt_separator: <!--more-->

meta:
  _publicize_done_external: a:1:{s:7:"twitter";a:1:{i:15483048;s:60:"https://twitter.com/laura_wilson19/status/776417363289780224";}}
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '26853184627'
  _publicize_done_15633698: '1'
  _wpas_done_15483048: '1'
  publicize_twitter_user: laura_wilson19
  _thumbnail_id: '1228'
  _wp_old_slug: ajax-ulation
  _wpcom_is_markdown: '1'
author:
  login: lsewilson
  email: laurawilson@hotmail.co.uk
  display_name: Laura
  first_name: ''
  last_name: ''
---
<p>AJAX is an acronym for Asynchronous JavaScript and XML. Ever wondered how Google returns suggested searches as soon as you start typing? Or why the page url doesn't change when you refresh some data on the page? That's AJAX.</p>
<blockquote><p>"AJAX is a way to have a 'conversation' with the server and display the results without reloading the page."</p></blockquote>
<p><!--more--></p>
<p><span style="text-decoration:underline;"><strong>Why is it useful?</strong></span></p>
<ul>
<li>Allows separation of front-end and back-end code.</li>
<li>The number of page transitions in a web application is reduced.</li>
<li>Reduces the amount of uploaded and downloaded data on a page.</li>
<li>AJAX can be used to retrieve API data and multiple APIs can be compiled on one page.</li>
</ul>
<p><span style="text-decoration:underline;"><strong>How it works</strong></span></p>
<p><img class="alignnone size-full wp-image-1183 aligncenter" src="{{ site.baseurl }}/assets/ajax_diagram.png" alt="ajax_diagram" width="458" height="521" /></p>
<ol>
<li>Initiate an HTTP request to a server by inputting the url of the website you're visiting, e.g. google.com. Page loads when response is received from the server.</li>
<li>Event triggered on client-side - e.g. a user starts typing a search.</li>
<li>AJAX call fired: XML HTTP request sent to server.</li>
<li>Server script processes the request.</li>
<li>Server sends data back to client using XML.</li>
<li>Javascript callback function  retrieves the data and updates page with suggested searches.</li>
</ol>
<p><span style="text-decoration:underline;"><strong>Sample AJAX  function with jQuery</strong></span></p>
<p><img class="alignnone size-full wp-image-1194 aligncenter" src="{{ site.baseurl }}/assets/ajax_example.png" alt="ajax_example" width="555" height="359" /></p>
<p><span style="text-decoration:underline;"><strong>Disadvantages of AJAX and single page applications</strong></span></p>
<ul>
<li>Data loss - in a basic SPA (single page application), your viewing history is not stored like your browser history.</li>
<li>The browser bookmarking, back and refresh functions are useless.</li>
<li>More difficult for search engines to crawl.</li>
<li>Security! No sensitive data should be passed using AJAX.</li>
</ul>
<p>Thanks to <a href="http://www.github.com/rosieallott">Rosie</a> for help with research and the beautiful diagram!</p>
