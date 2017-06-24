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
/*
If the variable needCoffee is true, JavaScript will run one code block, and if a variable is false, it will run another
needCoffee is the condition we are checking inside the if's parentheses.
Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4).
It will completely ignore the else { ... } part. In this case, we'd see 'Finding coffee' log to the console.
If we adjusted needCoffee to be false, only the else's console.log will run.
*/
var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}




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



// Comparison Operators:
// === checks if two things are equal in value and type (ie string, booleans, numbers), than outputs true if true
// !== checks if two things are not equal in value and type, than outputs true (b/c its checking if they are not equal)
// < greater than
// > less than
// >= greater than or equal to
// <= less than or equal to



// Logical Operators:
// && checks that both are true its called and (ie if both sides are true the and statement outputs true)
// || checks that either can be true its called or (ie if either side is true the or statement outputs true)
// ! checks that the values on either side are not equal its called not (ie if either side is false the not statement outputs true.)
//Example: using &&
// Both stopLight must equal green and pedestrians equal false for the if statement to output true else it outputs false and executes the else statement.
if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}



// Switch Statements:
// to a computer switch statements and else/if are equal 
// to humans switch statements are much easier way to handle many else/if statements.
// think instead of else/if its switch then cases/breaks
// Example:
//The switch keyword initiates the statement, and is followed by ( ... ), which contains the condition that each case will compare to.
//Case is like the else if part of an if/else if/else statement
//The the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log would run.
//The third case actually runs since the case equals 'papaya' which matches groceryItem's value. 
//This particular program will log out: 'Papayas are $1.29'
var groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}




// Functions:

// They take data or variables, perform a task or set of tasks on them, and return the result.
// Functions can be reused over and over b/c your just changing the variables/data that are plugged into the function not the function itself.
// Example: 
// This code turns the calculator on if it is currently off, and turns it off if the calculator is currently on.
var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

/* Parameters are what is inside of the parentheses of the function 
ex below: the parameter "inputNumber" is multiplied by 13 and printed to console. 
inputNumber is just a placeholder for any number that is inputed into the parentheses of the function multiplyByThirteen
The parameter simply sets up the function to receive an argument as its value. 

Argument is the number 9 when we call multiplyByThirteen(9)

Arguments are provided when I call a function, and Parameters receive Arguments as their value. 
So, inputNumber is a parameter and its value is the argument 9. */

function multiplyByThirteen(inputNumber){
  console.log(inputNumber * 13);
}

multiplyByThirteen(9)
// output: 117

//Example:
function takeOrder(topping) {
  console.log('Order: pizza' + topping);
}
takeOrder(' topped with bacon');
// Calls the 'Order: pizza' string interpolated with the argument's value through the topping parameter of the funtion.


// String Charecter Interactions
var hello = 'Hello World';
console.log(hello[6]);
// Output: W 
// This is due to how JS internally store strings similarly to how it stores arrays.
// Therefore invidual charecters of JS strings are interactable similar to the elements of an array. 
