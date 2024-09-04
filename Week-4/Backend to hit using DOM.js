//Cors for safety 

const express= require("express");
const cors = require('cors');
const app=express();

app.use(cors());

app.get("/sum", (req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    const sum=a+b;
    res.send(sum.toString());
})

app.get("/interest",(req,res)=>{
    const p=parseInt(req.query.p);
    const r=parseInt(req.query.r);
    const t=parseInt(req.query.t);

    const ans=(p*r*t)/100;
    res.send(ans.toString());
})

app.listen(8080)

//using http://localhost:8080/sum?a=10&b=12 we can hit it and sum is 22
