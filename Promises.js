//async code is ugly
//promises are syntatical sugar that makes that code readable
//we can make a wrapper ontop of the async function

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)



//using our own async functions
//why promises? => for callbacks use mainly
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data); //what is passed here gets printed at .then(onDone) at line 40
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}
//.then is used to print out
kiratsReadFile().then(onDone);


