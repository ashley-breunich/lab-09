[![Build Status](https://www.travis-ci.com/ashley-breunich/lab-09.svg?branch=master)](https://www.travis-ci.com/ashley-breunich/lab-09)

![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic API Routing
=================================================


## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Overview
Continue working with the REST Server that you created in the previous lab.  We're going to be modifying it in these assignments to add some new functionality.

## Assignment
###### Requirements
* Add a dynamic switch via a setting in the .env file that would serve as a means of switching out the storage engine dynamically based on a configuration
* Implement a new storage module that reads this env variable and loads/returns the correct storage engine.
* Unify the multiple API routes that you have into ONE module (v1.js) that can access ANY model dynamically based on reading the param in the path.
  * i.e. /api/v1/notes would dynamically use the notes model while /api/v1/tasks would use the tasks model.  Use the :param feature in express to do this using route level middleware.

###### Testing
* Test the dynamic model loader to ensure that it properly loads a correct model or errors out on an invalid one
* Update your server tests to assert against the new unified API
* Mock the dynamic loader
* Mock models loaded through the dynamic model loader
* Your API tests need to be asserting that they're calling model methods on the right models (not that the models actually do anything)


##  Documentation
I am still finishing up this lab and will complete the README once I am done.

I do want to note that I rewatched the video from lecture and followed along to get the write and read functions and the model finder working. I will write in recaps of what each function is doing once I resubmit. Just wanted to submit what I had before the deadline tonight. 

