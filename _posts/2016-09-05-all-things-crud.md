---
layout: post
title: All things CRUD
date: 2016-09-05 21:39:19.000000000 +01:00
type: post
published: true
status: publish
categories:
- Makers Academy
tags:
- coding
- CRUD
- databases
- programming
- SQL
- web development
excerpt_separator: <!--more-->

meta:
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '26521158253'
author:
  login: lsewilson
  email: laurawilson@hotmail.co.uk
  display_name: Laura
  first_name: ''
  last_name: ''
---
<p>CRUD stands for Create, Read, Update and Delete and these four functions make up the basis of persistent storage in the land of computers. By storing a state as data, we can ensure that this state will remain even if the process that created it does not. For example, I developed a web app at the weekend where you could play rock, paper, scissors, and I used a singleton class to store my game. As soon as I stop running the app though, that data vanishes. I can't recall the game history. It's gone and that's not ok. There's an obvious need to store information. This is where CRUD comes in.</p>
<p><!--more--></p>
<p><strong><span style="text-decoration:underline;">What do I mean by CRUD?</span></strong></p>
<p>There are four things we need to be able to do to our data that we want to store in our database or to data that is already sitting in our database.</p>
<ul>
<li><strong>Create </strong>new entries</li>
<li><strong>Read </strong>existing entries</li>
<li><strong>Update</strong> existing entries</li>
<li><strong>Delete</strong> existing entries</li>
</ul>
<p><strong><span style="text-decoration:underline;">What is SQL?</span></strong></p>
<p>SQL, pronounced 'sequel', or Standard Query Language, is a programming language used to communicate with databases. As a result, it has functions which satisfy all CRUD elements.</p>
<p>This table nicely summarises the equivalent syntax in SQL and HTTP.</p>
<table>
<tbody>
<tr>
<td style="text-align:center;">
<div><u><b>Function</b></u></div>
</td>
<td style="text-align:center;">
<div><u><b>SQL </b></u></div>
</td>
<td>
<div style="text-align:center;"><u><b>HTTP</b></u></div>
</td>
</tr>
<tr>
<td>
<div>Create</div>
</td>
<td>
<div>INSERT</div>
</td>
<td>
<div>PUT / POST</div>
</td>
</tr>
<tr>
<td>
<div>Read</div>
</td>
<td>
<div>SELECT</div>
</td>
<td>
<div>GET</div>
</td>
</tr>
<tr>
<td>
<div>Update</div>
</td>
<td>
<div>UPDATE</div>
</td>
<td>
<div>POST / PUT / PATCH</div>
</td>
</tr>
<tr>
<td>
<div>Delete</div>
</td>
<td>
<div>DELETE</div>
</td>
<td>
<div>DELETE</div>
</td>
</tr>
</tbody>
</table>
<div><strong><span style="text-decoration:underline;">How to use SQL</span></strong></div>
<div></div>
<div>Let's say I run a veterinary surgery and this is my database, "patients", of all registered pets and their owners:</div>
<div>
<table>
<tbody>
<tr>
<td><b>PetID</b></td>
<td><b>PetName</b></td>
<td><b>PetType</b></td>
<td><b>Owner</b></td>
<td><b>Address</b></td>
</tr>
<tr>
<td><span style="font-weight:400;">1</span></td>
<td><span style="font-weight:400;">Jack</span></td>
<td><span style="font-weight:400;">Monkey</span></td>
<td><span style="font-weight:400;">H. Barbossa</span></td>
<td><span style="font-weight:400;">Black Pearl</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">2</span></td>
<td><span style="font-weight:400;">Mr Bigglesworth</span></td>
<td><span style="font-weight:400;">Cat</span></td>
<td><span style="font-weight:400;">D. Evil</span></td>
<td><span style="font-weight:400;">Virtucon Worldwide HQ</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">3</span></td>
<td><span style="font-weight:400;">Santa’s Little Helper</span></td>
<td><span style="font-weight:400;">Dog</span></td>
<td><span style="font-weight:400;">H. Simpson</span></td>
<td><span style="font-weight:400;">742 Evergreen Terrace</span></td>
</tr>
</tbody>
</table>
</div>
<div>Adding a new entry:</div>
<div>
<pre><span class="pl-k">INSERT INTO</span> <span class="pl-s"><span class="pl-pds">"patients</span><span class="pl-pds">"</span></span> ( PetName, PetType, Owner, Address ) 
<span class="pl-k">VALUES</span> ( <span class="pl-s"><span class="pl-pds">'Pascal</span><span class="pl-pds">', 'Chameleon', 'Rapunzel', 'Hidden Tower'</span></span>);</pre>
</div>
<div></div>
<p>Now let's read our updated table, using * to select all entries:</p>
<pre><span class="pl-k">SELECT</span> <span class="pl-k">*</span> <span class="pl-k">FROM</span> patients;</pre>
<table>
<tbody>
<tr>
<td><b>PetID</b></td>
<td><b>PetName</b></td>
<td><b>PetType</b></td>
<td><b>Owner</b></td>
<td><b>Address</b></td>
</tr>
<tr>
<td><span style="font-weight:400;">1</span></td>
<td><span style="font-weight:400;">Jack</span></td>
<td><span style="font-weight:400;">Monkey</span></td>
<td><span style="font-weight:400;">H. Barbossa</span></td>
<td><span style="font-weight:400;">Black Pearl</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">2</span></td>
<td><span style="font-weight:400;">Mr Bigglesworth</span></td>
<td><span style="font-weight:400;">Cat</span></td>
<td><span style="font-weight:400;">D. Evil</span></td>
<td><span style="font-weight:400;">Virtucon Worldwide HQ</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">3</span></td>
<td><span style="font-weight:400;">Santa’s Little Helper</span></td>
<td><span style="font-weight:400;">Dog</span></td>
<td><span style="font-weight:400;">H. Simpson</span></td>
<td><span style="font-weight:400;">742 Evergreen Terrace</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">4</span></td>
<td><span style="font-weight:400;">Pascal</span></td>
<td><span style="font-weight:400;">Chameleon</span></td>
<td><span style="font-weight:400;">Rapunzel</span></td>
<td><span style="font-weight:400;">Hidden Tower</span></td>
</tr>
</tbody>
</table>
<p>Let's update one of our entries:</p>
<pre><span class="pl-k">UPDATE</span> <span class="pl-s"><span class="pl-pds">"patients</span><span class="pl-pds">"</span></span> <span class="pl-k">SET</span> PetName<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'Snowball II</span><span class="pl-pds">', PetType='Cat'</span></span> <span class="pl-k">WHERE</span> ID <span class="pl-k">=</span> 3;</pre>
<p>This gives us:</p>
<table>
<tbody>
<tr>
<td><b>PetID</b></td>
<td><b>PetName</b></td>
<td><b>PetType</b></td>
<td><b>Owner</b></td>
<td><b>Address</b></td>
</tr>
<tr>
<td><span style="font-weight:400;">1</span></td>
<td><span style="font-weight:400;">Jack</span></td>
<td><span style="font-weight:400;">Monkey</span></td>
<td><span style="font-weight:400;">H. Barbossa</span></td>
<td><span style="font-weight:400;">Black Pearl</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">2</span></td>
<td><span style="font-weight:400;">Mr Bigglesworth</span></td>
<td><span style="font-weight:400;">Cat</span></td>
<td><span style="font-weight:400;">D. Evil</span></td>
<td><span style="font-weight:400;">Virtucon Worldwide HQ</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">3</span></td>
<td><span style="font-weight:400;">Snowball II</span></td>
<td><span style="font-weight:400;">Cat</span></td>
<td><span style="font-weight:400;">H. Simpson</span></td>
<td><span style="font-weight:400;">742 Evergreen Terrace</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">4</span></td>
<td><span style="font-weight:400;">Pascal</span></td>
<td><span style="font-weight:400;">Chameleon</span></td>
<td><span style="font-weight:400;">Rapunzel</span></td>
<td><span style="font-weight:400;">Hidden Tower</span></td>
</tr>
</tbody>
</table>
<p>And finally let's delete an entry:</p>
<pre><span class="pl-k">DELETE</span> <span class="pl-k">FROM</span> <span class="pl-s"><span class="pl-pds">"patients</span><span class="pl-pds">"</span></span> <span class="pl-k">WHERE</span> PetID <span class="pl-k">=</span> <span class="pl-c1">1</span>;</pre>
<table>
<tbody>
<tr>
<td><b>Pet ID</b></td>
<td><b>Pet Name</b></td>
<td><b>Pet Type</b></td>
<td><b>Owner</b></td>
<td><b>Address</b></td>
</tr>
<tr>
<td><span style="font-weight:400;">1</span></td>
<td><span style="font-weight:400;">Mr Bigglesworth</span></td>
<td><span style="font-weight:400;">Cat</span></td>
<td><span style="font-weight:400;">D. Evil</span></td>
<td><span style="font-weight:400;">Virtucon Worldwide HQ</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">2</span></td>
<td><span style="font-weight:400;">Santa’s Little Helper</span></td>
<td><span style="font-weight:400;">Dog</span></td>
<td><span style="font-weight:400;">H. Simpson</span></td>
<td><span style="font-weight:400;">742 Evergreen Terrace</span></td>
</tr>
<tr>
<td><span style="font-weight:400;">3</span></td>
<td><span style="font-weight:400;">Pascal</span></td>
<td><span style="font-weight:400;">Chameleon</span></td>
<td><span style="font-weight:400;">Rapunzel</span></td>
<td><span style="font-weight:400;">Hidden Tower</span></td>
</tr>
</tbody>
</table>
<p>And there we have it - a brief introduction to CRUD and SQL!</p>
