const express = require('express');
const app = express();

//this middleware will be called everywhere
//app.use(express.json); =>returns a function

//rate limiter
//middleware to get load of users on site 
let numberOfRequests=0;
function calcRequests(req,res,next){
    numberOfRequests++;
    console.log("Number of total visits: ",numberOfRequests);
    next(); //this shifts control next and is imp.
}

function userMiddleware(req,res,next){
    if (!(username === "aryan" && password === "pass")) {
        res.status(403).json({ "msg": "Incorrect Inputs!" });
    }
    else{
        next();
    }
};

//Get server time to handle requests
let totalRequests = 0;
let totalTime = 0;

function timeToHandleRequests(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        totalRequests++;
        totalTime += duration;
        const avgTime = totalTime / totalRequests;

        console.log(`Request URL: ${req.originalUrl}`);
        console.log(`Time Taken: ${duration} ms`);
        console.log(`Average Time: ${avgTime.toFixed(2)} ms`);
    });

    next();
}


// app.use(calcRequests);
// app.use(timeToHandleRequests);
//use???
//any requests that comes to any route after this line it will be used

//NAIVE APPROACH
// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (!(username === "aryan" && password === "pass")) {
//         res.status(400).json({ "msg": "Wrong credentials!" });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({ "msg": "Invalid kidney ID!" });
//         return;
//     }

//     res.json({
//         msg: "Your kidney is fine!"
//     });
// });

//if i use app.post here and want the same logic it will be repititive

//also if i use functions it will reduce the code length but still not the best

//we can use middlewares here
//just functions only but extract from headers 
//send auth checks here and can be used in the method instead of function



//MIDDLEWARE USE
app.use(express.json());
app.post("/health-checkup", function(req,res){
    //kidneys =[1,2]
    const kidneys=req.body.kidneys;
    const kidneyLength=kidney.length;

    //input validation is imp for backend
    //as without it our files or paths can be exposed 
    //use if else is one way
    //the other way is to use ZOD library 


    res.send("Your kidney len is: "+kidneyLength);
});

//global caches
//put at the end => error handling middleware
//if there is an excpetion
//need 4 inputs 
//instead of exposing our backend this is useful
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry server is not working rn"
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
