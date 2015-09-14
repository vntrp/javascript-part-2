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

