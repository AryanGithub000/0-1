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

