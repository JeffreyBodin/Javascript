/*
There are three essential data types in JavaScript: strings, numbers, and booleans.
We can write out anything to the console with console.log.
We can do math with operators like +, -, *, and /.
We can find the remainder after dividing two numbers with a modulus: %.
We can generate a random number with Math.random, then make it a whole number with Math.floor.
We write a single line comment with // and a multi-line comment with /* and 
*/
 
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

// String interpolation- is when you insert a variable into a string
// This is an example: It prints My favorite animal: Cat to the console.
var favoriteAnimal = 'Cat';
console.log('My favorite animal: ' + favoriteAnimal);

// Control Flow- making decisions in programming.
// For instance, if we were making a choose-your-own-adventure game, we'd need to program a way for a user to choose which plot line they'd like to pursue. 
// Control flow statements enable JavaScript to make those decisions by executing different code based on a condition

// Blocks - code between curly braces {}

// If/Else Notes
// if/else statements are how we can process yes/no questions programmatically
// if/else statements have two code blocks
//Example:

var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

/*
If the variable needCoffee is true, JavaScript will run one code block, and if a variable is false, it will run another
needCoffee is the condition we are checking inside the if's parentheses.
Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4).
It will completely ignore the else { ... } part. In this case, we'd see 'Finding coffee' log to the console.
If we adjusted needCoffee to be false, only the else's console.log will run.
*/

// Escaping a character- addeding \'s inside of a '' string to added apostrophere s to a word. B/c normally another single quote ends the string this way you can add the apostrophere s inside a string withought closing off the string.
// This again uses \ 

// Else if
// Utilize else if to add more conditions to a if/else statement
var stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// === checks if two things are equal in value and type (ie string, booleans, numbers), than outputs true if true
// !== checks if two things are not equal than outputs true (b/c its checking if they are not equal)
// && checks that both are true its called and
// || checks that either can be true its called or 
// ! checks that the values are opposites to each other 

//Example using &&
// Both stopLight must equal green and pedestrians equal false for the if statement to output true else it outputs false and executes the else statement.
if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}
