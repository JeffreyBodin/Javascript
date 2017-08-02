// Simple random integer to stringified number generator. 
// Create a program that takes a randomly generated integer and converts it to a string.
// Create a constructor function for the randomly generated integer for ease of use generating new integers.
// Create a function that takes the generated integer and converts it to a string using string concatenation. ie: int + ' '; 

// Got this random number generator from MDN's example page credit to Mozilla. Works well.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var integerR = getInt(1, 100);

//console.log(integerR); For testing purposes.

function stringifyInteger(integer) {
    return integer += '', integer;
}

console.log(stringifyInteger(integerR));