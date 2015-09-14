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


