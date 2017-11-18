1) What is the difference between Node.js and Express.js?
* Node.js is a cross-platform JavaScript run-time environment for executing JS code server side. While JS has historically been a client-side language, node.js enables server-side scripting.
* Express.js is an application framework for Node.js designed for building web applications and APIs. Express.js is the standard server framework for Node.js.

2) What are the core features of Express.js?
* It is unopinionated, meaning you have the freedom to organize your code how you want to.
* It allows you to set up middleware to respond to HTTP/RESTful requests.
* It allows for the dynamic rendering of HTML pages based on passing arguments to templates.
* It provides all the features of core Node.js.
* It is considered a "thin" layer, having minimal impact on performance.
* It organizes the web application into an MVC architecture and manages everything from routes to rendering and HTTP requests.

3) What is Postman and what is it used for?
* Postman is an amazing extension for Chrome (possibly other browsers) that allows us make HTTP requests such as POST, GET, PUT, DELETE to see them in action with our code and verify what is being received and how it is handled by our router and server.

4) What arguments are passed to Custom Middleware functions and what is the third parameter used for?
* The custom arguments are my homies: req, res, and next.
* Req is my homie that handles all of the request data, while res handles all of the response data. Next only shows up in specific situations such as an authorization process, but when he's needed he gets the job done because he's basically the guide that lets you into the party if you pass the authorization check. If you're not authorized, however, you won't get access and next will not show you the way in.

5) What is MongoDB and what is it used for?
* MongoDB is a flexible, scalable document database. It stores data in JSON-like documents, maps to the objects in our application code, is a distributed database, and is free and open source.
* It's used to store and retrieve our data so that the data can persist from one session to the next. Gone are the days of starting from scratch with every refresh of the server. Hallelujah!

6) What is Mongoose.js and what is it used for?
* Mongoose.js takes the burden of writing MongoDB validation, casting, and business logic off our shoulders by providing a straighforward, schema-based solution to modeling application data. It includes type casting, validation, query building, business logic hooks, and more.
* It's used to simplify our access to our MongoDB databases by providing an api that can be used to query our databases and access our data in the way we need it.