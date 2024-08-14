//Fetch, Authentication and Databases 
//Basically to work on backend DB and make something better than just a simple express server

//Authentication 
//To create a username password authentication page to see underlying data

//In relation to authentication 
//1. Hashing , 2.Encryption, 3.JSON web tokens. 4.Local Storage

//1.Why hashing password before storing?
//converting a simple string to complicated gibberish
//the backend system then checks that value with existing stored hashed password
//whenever password is entered we compare that with hashed password stored at DB

//2. Encryption -> encrypt the string 

//3. JSON web tokens(JWT) -> will take some JSON as an input and then perform actions 
//It creates a token at the end 
//not hashed or protected in any way 
//complex object is converted into a long string 
//this long string helps to see the original contents 

//4.Local Storage 
//Done at sign up page where user + pwd is sent to backend 
//then it hashes and checks in backend if pwd matches
//creates a JWT for the user 
//stores that locally at user system as a localstorage.set("Token",jwt)
//now for any request we use this token for any requests on web site 
//it just checks this JWT and the req is sent with a response

//Q1. A website which has 2 endpoints
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

//in memory database
const ALL_USERS = [
  {
    username: "aryan@gmail.com",
    password: "123",
    name: "aryan singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //hard to do -> Using Find function in JS
  let userExists=false;

  for(let i=0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
        userExists=true;
    }
  }

  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: ALL_USERS.filter(function(value){
            if(value.username==username) return false;
            else return true;
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(7890, () => {
    console.log("Server started on port 7890");
  });
