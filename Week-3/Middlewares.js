const express = require('express');
const app = express();

function userMiddleware(req,res,next){
    if (!(username === "aryan" && password === "pass")) {
        res.status(403).json({ "msg": "Incorrect Inputs!" });
    }
    else{
        next();
    }
};


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
app.get("/heath-checkup",userMiddleware, function(req,res){
    //any logic i need
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
