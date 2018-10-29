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
Include your travis badge at the top of your README.md file In your README.md, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your README.md that you would like.

###### APP.JS MODULE:
Airty: 1
Expected Data: The data will be the PORT number so the program can run
Behavior: If the server isn't running, the program will run on the given port. If the server is already running, it will throw a console log alerting the user that the server is already running. 

###### MODELS/NOTES.JS MODULE:
Behavior: This module holds the NOTES class and all of the functions associated with it. These functions are called in the API associated file. 

###### MODELS/USERS.JS MODULE:
Behavior: This module holds the USERS class and all of the functions associated with it. These functions are called in the API associated file.

###### MODEL-FINDER MODULE:
Airty: 3
Expected Data: Request, Response, Next
Behavior: This module tells the program which model to use. When a model is found, it will set the req.model. When a model is not found, it will throw 'Invalid Model.' 

###### ERROR MODULE:
Airty: 4
Expected Data: Error, Request, Response, Next
Behavior: If there is a server error, it will go through this function and explain what the error is.  

###### 404 MODULE:
Airty: 3
Expected Data: Request, Response, Next
Behavior: If a page cannot be found, it will go through this function and throw a 404 error.

###### STORAGE MODULE:
Airty: 1
Expected Data: process.env.STORAGE
Behavior: This function takes in the process.env.STORAGE variable and uses a switch case to let the program know what kind of storage to use.  

###### MEMORY MODULE:
Airty: 1
Expected Data: Each funtion in this page takes in 1 paramater - either a query, ID or data
Behavior: Depending on which function is called, memory is accessed to either send data, resave data or delete data. 

###### FILE MODULE:
Airty: 1
Expected Data: Each funtion in this page takes in 1 paramater - either a query, ID or data
Behavior: Depending on which function is called, code runs that then saves the changes to the db.json file. 

###### V1 MODULE:
Airty: 3
Expected Data: Each funtion in this page takes in 3 parameters - Request, Response, Next
Behavior: This file interacts with the API. It makes API calls depending on which HTTP method is used (get, put, patch, delete, post). The JSON that is sent through the front end is stringified and then sent to whichever function is related. Then the appropriate save functions are called to accurately update the db.json file. 

#### Collaborations
Hai helped me figure out why my delete function was throwing an error. Nicholas, our substitute instructor, also assisted me with questions I had. 

I do want to note that I rewatched the video from lecture and followed along to get the write and read functions and the model finder working.

