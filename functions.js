// this is where I restart

// (1) Create a function that can be used with sort.
// This function should take two strings, and return a value that sort can use to determine which is the longest string.
// Finally, create an array of strings and try to get it sorted using your new function.

function twoStringsSort (strg1, strg2){
    if (strg1.length<strg2.length) {
        return -1;
    }
    if (strg1.length>strg2.length){
        return 1;
    }
    return 0;
}

// example:

var NewArray = ["hola", "que", "balancoire", "casserole"];

NewArray.sort(twoStringsSort)       // ["que", "hola", "casserole", "balancoire"]


// (2) Create an array of objects (don’t need to use new here, just regular object literals).
// These objects will contain a name and email property. Then, run some code that will sort your array by the longest name.
// Then, run some code that will sort your array by e-mail address in alphabetical order.

var customers = [
    {name:"jack", email: "jack@gmail.com"},
    {name: "bob", email: "bob@gmail.com"},
    {name: "susan", email: "susan@gmail.com"},
    {name: "emmanuel", email: "emmanuel@gmail.com"}
]

Array.prototype.sortBy = function(param) {
  return this.slice(0).sort(function(strg1,strg2) {
    return (strg1[param].length > strg2[param].length) ? 1 : (strg1[param].length < strg2[param].length) ? -1 : 0;
  });
}

customers.sortBy('name');

// part2

Array.prototype.sortBy = function(param) {
  return this.slice(0).sort(function(strg1,strg2) {
    return (strg1[param] > strg2[param]) ? 1 : (strg1[param] < strg2[param]) ? -1 : 0;
  });
}

customers.sortBy('email');


// (3) Create a function that can be used with Array.prototype.map. This function should take a number and return its square.
// Then, use this function with map on an array of numbers to check the result.

var numbrs =[1,2,4,5,6,7,8,9,23,67,89]

var squr=numbrs.map(function(x){
    return Math.pow(x,2);
})

squr   // [1, 4, 16, 25, 36, 49, 64, 81, 529, 4489, 7921]


// (4) Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property.
// Then, use this function with map on an array of objects each containing a “num” property.


var clients=[
    {name: "dan", num: 1},
    {name: "bill", num: 3},
    {name: "yan", num: 10},
    {name: "fatma", num: 8}
]
    
var squr2=clients.map(function(client){
    return Math.pow(client.num,2);
})

squr2       // [1, 9, 100, 64]


// (5) Create a function called operationMaker that takes only a string called operation as argument.
// This string could be “add”, “subtract”, “mult” or “div”.
// Your function will return a function that will take two numbers and return the result of running operation on these numbers.

function operationMaker(operation){
    switch (operation) {
        case 'add':
            return function addNumbers(num1, num2){
                return num1+num2
            }
        case 'subtract':
            return function subtractNumbers(num1, num2){
                return num1-num2
            }    
        case 'mult':
            return function multNumbers(num1, num2){
                return num1*num2
            }
        case 'div':
            return function divNumbers(num1, num2){
                return num1/num2
            }    
    }
   
}

