//objects
//array of objects using [] within the object

//single variable has more elements in it
const user1=[{
    firstName:"aryan",
    gender:"male"
},
{
    firstName:"naman",
    gender:"male"
},{
    firstName:"priya",
    gender:"female",
    metadata:{
        age:21,
        address:""
    }
}]


for(let i=0;i<user1.length;i++){
    if(user1[i]["gender"]=="female"){
        console.log(user1[i]["firstName"]);
    }
}


**************************************************************************
//Functions
function sum(num1,num2,fnToCall){
    let result=num1+num2;
    //displayResult(result); one more solution
    fnToCall(result); //callback used here
}

function displayResult(data){
    console.log("Result of sum is: "+data);
}

function displayResultPassive(data){
    console.log("sum result is: "+data);
}

//you can call only one function
//how to display result?

//but this uses 2 functions
//const ans=sum(1,2);
//displayResult(ans);

//but in 1 function call??
//change in function sum

//but if i want to not change any functions then??
const ans=sum(1,2,displayResult);
//callbacks


**************************************************************************

function calcArithmetic(a,b,arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}



const value = calcArithmetic(1,2,sum); //call by value here for sum part
console.log(value); 

**************************************************************************


