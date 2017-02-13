/*
There are three essential data types in JavaScript: strings, numbers, and booleans.
We can write out anything to the console with console.log.
We can do math with operators like +, -, *, and /.
We can find the remainder after dividing two numbers with a modulus: %.
We can generate a random number with Math.random, then make it a whole number with Math.floor.
We write a single line comment with // and a multi-line comment with /* and */
*/
// String interpolation- is when you insert a variable into a string

 
//Variable Notes

var myName = 'Arya';
console.log(myName);
/*
var, short for variable, is the JavaScript keyword that will create a new variable for us.

myName is chosen by a developer. Notice that the word has no spaces, and each new word is capitalized. 
This is a common convention in JavaScript, and is called camelCase.

= means to assign whatever's next to the variable.

'Arya' is the value that the equals = assigns into the variable myName.

After the variable is declared, we can print the variable with: console.log(myName).
This will print 'Arya' to the console.
*/

// another example logs How much stuff can a variable hold? 50k pounds to console.
var strength = '50,000 pounds';
console.log('How much stuff can a variable hold?', strength);

// How to change an existing variable's value:
// Changes the pre-existing weatherCondition's value by setting it equal to its new value.
var weatherCondition = 'Monday: Raining cats and dogs';
weatherCondition = 'Tuesday: Sunny';

console.log(weatherCondition); 