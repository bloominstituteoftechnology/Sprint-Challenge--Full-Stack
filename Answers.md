
## Questions
1. What is the difference between Node.js and Express.js?
  The differenceis that Node.js is the platform and Express.js is a framework built 
  on top of Node.js with features that help build web application servers. 
  
2. What are the core features of Express.js
  #Express gives us four things
  1. More functions 
  2. routing - handles the apllication urls and the functionality of routes
  3. middleware - connects a plugin or external library to our application 
  4. Break larger application into several mini application 

3. What is Postman and what is it used for?
  Postman is an application that lets us examine http requests. We can use postman to 
  inpect our requests and the information associated with them whlie letting us see exactly what is going on with those requests. 

4. What arguments are passed to _Custom Middleware_ functions and what is the third parameter used for?
  The three arguements for custom middleware are request, response, and next. Request handles the request we reiceve from the client, response is the data we send back to the client and next allows us to pass to the the next middle ware if the middleware function does not end with the current requsetion response cycle. 

5. What is MongoDB and what is it used for?
  MongoDB is a database and specifically, it is a non sql document oriented database. It allows user to use Json for storing Javascript objects into the database. We can use use it for querying the data using very readable methods. 

6. What is Mongoose.js and what is it used for?
  Monogoose.js is a framework that allow us to use schemas to model our application data. 
  Its very straightforward and helps organize what we want to put in our database. 