function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

function sumOfCubes(a, b) {
  let square1 = cube(a);
  let square2 = cube(b);
  return square1 + square2;
}

let ans = sumOfCubes(1, 2);
console.log(ans);


//in this code we have redundancy as we are using the same logic again
//hence we can use callbacks to make life easier 
//callbacks => pass function as a paramter in a function

//basically reduced the faltu code for each time func call

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

//this is generic now
function sumOfSomething(a, b,fn) { //fn is function
  let var1 = fn(a);
  let var2 = fn(b);
  return var1 + var2;
}

let ans = sumOfSomething(1, 2,square); //similarly can use cube also here
console.log(ans);
