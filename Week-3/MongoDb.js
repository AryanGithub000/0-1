const express=require('express');
const mongoose = require("mongoose");
const app=express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.ksc7azv.mongodb.net/user_app_new",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});


app.post("/signup",function(req,res){
  const username=req.body.username;
  const password=req.body.password;
  const name=req.body.name;
 
  const exisitngUser=User.findOne({email:username});
  if(exisitngUser){
    return res.status(400).send("User already exists");
  }
  
  const user = new User({
    name: name,
    email: username,
    password: password,
  }); 

  user.save();
  res.json({
    "msg":"User Created"
  })
})

 
