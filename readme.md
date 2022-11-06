# Overview 
 This application is a burger maker, you just choose the ingredient you want to add to the burger and the quantity of each ingredient. Each time you add a specific ingredient the UI updates the burger and displays the ingredient you added and also the price change whenever you add/remove an ingredient.
Finally, you can order the burger. 
The user has a dedicated page displaying the orders made. 
 # Features / Technologies 
 The core feature of this application is data binding and making the UI is reactive to each ingredient added or removed.
Also building a RestAPI with MongoDB that saves the orders into the database and fetches the ingredients. 
# Platform & Libraries 
## Frontend



Axios:
Link: https://www.npmjs.com/package/axios
This library is an alternative to fetch in javascript, it's easier to manipulate and easy to learn, and to use. Actually, the most liked feature that provides It, is the ability to make a base URL to HTTP requests, without repeating it each HTTP request.

antd (ant Design):
Link: https://www.npmjs.com/package/antd
Is a React UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.

## Backend



Express:
Which is a framework of nodejs , which makes easier handling HTTP request and responses.
Link: https://www.npmjs.com/package/express

Mongoose:
is a mongodb driver in nodejs that provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
You can also use mongodb driver (default) it will work too but with different syntax and methodologies
Link: mongodb: https://www.npmjs.com/package/mongodb
Link: mongoose:https://www.npmjs.com/package/mongoose

body-parse:
Is a library , that allow the backend to parse the body and get data from the request (you can't get data from req.body without this library)
Link: https://www.npmjs.com/package/body-parser
The other packages are optional, but they provide more functionality.

cors:
Is a library for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.

 
# What I learned ?
 As a first step, it was a new experience for me to learn MERN stack developement. I made this project to get familiar with react and nodejs. Actually, i learned though out this project 
how to build a restAPI using an express server with routes and controllers. I also learned how to interact with mongoDB database using mongoose (find, update, delete..)
In the other hand i knew how to fetching data using axios by making APIs calls and managing the state of the application.
