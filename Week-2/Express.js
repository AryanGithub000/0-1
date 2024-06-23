//Creates a HTTP server
//go to localhost:3000 to run
//npm init -y -> creates JSON file
const express = require("express");
const app = express();

// / is route handler
//headers, body, query can be added here
app.get("/", function(request, response) {
   response.send("Hello, world!");
});

app.listen(3000, function() {
   console.log("Express app started on port 3000.");
});


//POSTMAN -> used to send requests
//useful to test requests
