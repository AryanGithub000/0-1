function square(a){
  return a*a
}

function sumOfSomething(a,b,fn){
  const val1=fn(a); //fn called here is square for this case
  const val2=fn(b); //this fn can be changed acc to whatever we want to callback
  return val1+val2;
}

sumOfSomething(1,2,square);

//function in itself calling another function 
