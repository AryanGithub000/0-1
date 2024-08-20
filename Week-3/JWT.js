const jwt=require("jsonwebtoken");

//decode, verify, generate

const value={
  name:"harkirat",
  accountNumber:123123
}

//jwt
//sign is used to create the token
// const token=jwt.sign(value,"secret");
// console.log(token);

//this token has been generated using secret and hence
//only can be verified using this secret

//token generated

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ
//uYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxM
//jMxMjMsImlhdCI6MTcyNDE2OTcyMn0.18UHw8PKoZzCfxY-
//Cu-BPTum-TlcWRySc0lDy7h5yzA

//now anyone can DECODE it on the net as it is a form of a digital signature
//but to verify it we need the secret key to VERIFY it

//sign and not generate
const token= jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTcyNDE2OTcyMn0.18UHw8PKoZzCfxY-Cu-BPTum-TlcWRySc0lDy7h5yzA","secret");
console.log(token);
