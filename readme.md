# Overview 
 This application is a burger maker, you just choose the ingredient you want to add to the burger and the quantity of each ingredient. Each time you add a specific ingredient, the UI updates the burger and displays the ingredient you added and also the price change whenever you add/remove an ingredient.
Finally, you can order the burger. 
The user has a dedicated page displaying the orders made. 
 # Features / Technologies 
 The core feature of this application is data binding and making the UI is reactive to each ingredient added or removed.
Also building a RestAPI with MongoDB that saves the orders into the database and fetches the ingredients. 


# Launch the project

You have to first add a `.env` file in the directory that will hold the environment variables of the backend. You can find a `.env.example` folder as reference for the environment variables used.

## Using Docker
Note: Docker must be installed on your machine.

To launch the project (frontend and backend), simply run:
```bash
docker-compose -f docker-compose-local.yml up --build --force-recreate
```
## backend
To launch the backend, you have to navigate into the server folder by running:
```bash
cd server
``` 
After adding a `.env` file, you have to install the NodeJS packages on the backend (the project holds both the frontend under the client folder and the backend in the root directory of the project)

To install the backend Node packages, simply run:
``` bash
npm install
```
To run the backend server, run:
``` bash
npm start
```
To run the backend server in development mode, run:
``` bash
npm run devStart
```
Note that the server will listen on port `5000`
## frontend
Navigate back to the root directory by running:
``` bash
cd ..
```
Then to install the frontend packages, run:
``` bash
npm install
```
Now you are ready to start the frontend by running:
``` bash
npm start
```
Note that the frontend will be accessible on port `3000`

# Platform & Libraries 
## Frontend

```json
{
        "antd": "^4.3.5",
        "axios": "^0.19.2",
        "react": "^16.12.0",
        "react-dom": "^16.12.0",
        "react-router-dom": "^5.2.0",
        "react-scripts": "3.4.0"
}
```

[axios](https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios):
This library is an alternative to fetch in javascript, it's easier to manipulate and easy to learn, and to use. Actually, the most liked feature that provides It, is the ability to make a base URL to HTTP requests, without repeating it each HTTP request.

[antd (ant Design)](https://www.npmjs.com/package/antd):
It is a React UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.

## Backend
``` json
        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "mongoose": "^5.9.20"
```


[Express](https://www.npmjs.com/package/express):
Which is a framework of NodeJS, which makes easier handling HTTP request and responses.

Mongoose:
is a MongoDB driver in NodeJS that provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
You can also use MongoDB driver (default) it will work too but with different syntax and methodologies

Link:MongoDB:[[https://www.npmjs.com/package/mongodb](https://www.npmjs.com/package/mongodb)]([https://www.npmjs.com/package/mongodb](https://www.npmjs.com/package/mongodb))

Link: mongoose:[[https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)]([https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose))

[body-parser](https://www.npmjs.com/package/body-parser):
Is a library , that allow the backend to parse the body and get data from the request (you can't get data from req.body without this library)
The other packages are optional, but they provide more functionality.

[cors](https://www.npmjs.com/package/cors):
It is a library for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server, to depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.

 
# What I learned ?
 As a first step, it was a new experience for me to learn MERN stack development. I made this project to get familiar with react and NodeJS. Actually, I learned though out this project 
how to build a restAPI using an express server with routes and controllers. I also learned how to interact with MongoDB database using mongoose (find, update, delete..)
In the other hand, I knew how to fetch data using axios by making APIs calls and managing the state of the application.