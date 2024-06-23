const express = require("express");
const app = express();

app.get("/", function(request, response) {
   response.send("Hello, world!");
});

app.listen(3000, function() {
   console.log("Express app started on port 3000.");
});
