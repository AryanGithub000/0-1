//HTTP Server is used to expose my logic to the world
//created using Express

//creating an HTTP server 
//using express
//nodedefault library => NO

const express=require("express");

const app=express();

//to add the functunality now
function sum(n){
   let ans=0;
   for(let i=0;i<n;i++){
      ans+=i;
   }
   return ans;
}

app.get("/",function(req,res){ // slash is route
   //catch the query parameter sent by using ?n=3 infront of localhost:3000
   const n=req.query.n;
   const ans=sum(n);
   res.send("Hi your ans is "+ans); //for any request sends Hi There!
})

app.listen(1000); //on a specific port
//like listening for connections to come

