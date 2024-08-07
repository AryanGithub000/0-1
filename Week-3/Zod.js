const express=require("express")
const zod=require("zod")
const app=express()

//Zod framework helps us in input validations
//const schema=zod.array(zod.number());
//array of numbers

// 
//  {
//      email: string => email
//      password: atleast 8 characters
//      country: "IN", "US" 
//  }
//

//schematics for our validations
//then just use safeParse to check if valid else retur with invalid inputs
const schema= z.object({
    email: z.string(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US"))
})


app.use(express.json());

app.post("/health-checkup",function(req,res){
    //kidneys=[1,2] is a array of numbers as shown in schema line 5
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3450,()=>{
    console.log("Server running...");
});
