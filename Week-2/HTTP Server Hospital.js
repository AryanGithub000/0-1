//creating an HTTP server 
//using express
//nodedefault library => NO

//creating an in memory hospital to store below stuff
//we can make 4 routes 
//1. GET -> User can check how many ppl have kidneys and their health
//2. POST -> user can add new kidney
//3.PUT -> Replace kidney, become healthy
//4.DELETE -> remove kidney

const express = require("express");
const app=express();

//memory array
//seeded user where we can update memory object here
var users = [{
   name: 'John',
   kidneys: [{healthy: false}, {healthy: true}]
}];

//JSON Middlewares
app.use(express.json());

// Route 1: GET - User can check how many people have kidneys and their health
app.get("/", function(req, res) {
   const johnKidney = users[0].kidneys;
   const numberKidney = johnKidney.length;
   let healthyKidney = 0;
   
   for (let i = 0; i < johnKidney.length; i++) {
      if (johnKidney[i].healthy) {
         healthyKidney+=1;
      }
   }
   
   const badKidney = numberKidney - healthyKidney;
   
   res.json({
      johnKidney,
      healthyKidney,
      badKidney
   })
});


app.post("/l",function(req,res){
   const isHealthy=req.body.isHealthy;
   users[0].kidneys.push({
      healthy: isHealthy
   })
   res.json({
      msg: "Done!"
   })
});


app.put("/",function(req,res){
   for(let i=0;i<users[0].kidneys.length;i++){
      users[0].kidneys[i].healthy=true;
   }
   res.json({})
})

app.delete("/",function(req,res){
   const newKidneys=[];
   for(let i=0;i<users[0].kidneys.length;i++){
      if(users[0].kidneys[i].healthy){
         newKidneys.push({
            healthy:true
         })
      }
   }
   users[0].kidneys=newKidneys;
   res.json({msg:"done"})
})

app.listen(3000);
