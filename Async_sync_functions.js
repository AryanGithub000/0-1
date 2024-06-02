//Async Funtions and Sync Functions
//Real Uses of Call Backs
//JS Browser Architecture
//Promises
//Async Wait

//1. Async -> 2 context switching in JS
 
//we know only sync functions till now
//one function is busy and it constantly goes to solve it in a single thread
function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}


console.log(findSum(100));

//here the JS thread is busy and it cannot do any other tasks

function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}

//running this function after a while 
setTimeout(findSum(100),1000); //after 1 sec Hello World hoga
console.log("Hello world");

//why is this async?
//as it will proceed to print Hello World while it works on the function!!



//Common async functions?
//setTimeout
//fs.readFile - to read a file from my file system
//Fetch - to fetch some data from an API endpoint

//fs.readFile
const fs = require("fs"); //file system use here


//async call
//called later as takes time to exe
//goes here last mei as 
//a.txt is our file we use
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data); //prints the data of the file   
 //executes at the end as async call
})

console.log("HI"); //runs first as sync call 

let a=0;

//takes very long, longer than the file read
//this loop runs before HI there 2 and takes a while to run 
for(let i=0;i<1000000000;i++){
    a++;
}

console.log("Hi there 2");



//How is JS keeping track of callbacks and what to run text?
//using web apis jaha async code runs and sends that to callback queue
//while this happens in our call stack sync runs
//end mei puts in call stack so end mei async is printed basucally 

//main use of callbacks is for async functions
