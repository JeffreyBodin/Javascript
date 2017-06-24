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




// For Loops 

// Ex Iterating Backwards through an array
var vacationSpots = ['Moon', 'Sun', 'Mars'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
// Example shows how to iterate backwards through the last element of an array to the first element of the array.


// Example comparing the contents of two arrays using a for loop.

var myPlaces = ['Moon', 'Sun', 'Mars'];
var friendPlaces = ['Moon', 'Jupiter', 'Mars'];

for (var i = 0; i < myPlaces.length; i++) {
  console.log(myPlaces[i]);
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
      console.log(myPlaces[i] === friendPlaces[j]);
    }
  }
}
// Loops the entire contents of friendPlaces after the first element, continuing for each index, of myPlaces is looped.
// This allows comparison of each element of myPlaces against the entirity of friendPlaces.
// Utilizes an if statement to log to console any strings shared in common between each array, followed by true. 
// True indicates if strings are shared. Done using the hard === comparison passed in the console.log.




// While Loops
// Used when there is N times required to loop.
// Contrary to a known limitation of loops required, ie array.length, with for loops.

// Example:

while (condition) {
  // code block that loops until condition is false
}
// As long as the statement evaluates to true the while loop will continue to loop.
// Statement must evaluate to false for the while loop to stop. Unless stopped some other way.


var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  
  var randomNumber = Math.floor(Math.random() * cards.length);
  
  currentCard = cards[randomNumber];
}

console.log();
// Logs a string for each suit of card the while loop had to loop through until it got to 'Spade'.
// The while loop's condition is basically while I don't have spade loop again. This condition evals to true until currentCard is a Spade.
// The randomNumber generator variable uses .floor to round down to nearest integer. Important b/c of below.
// Math.random is muliplied by the length of cards to create a limit, of up to the length, on numbers generated.
// The randomNumber cannot equal the length of the array, keeping the generated number within the array's actual index values. 
// Thus, randomNumber always targets a valid element of the array.
// console.log()   on the final line is important it ends the program once the while loop is satisfied for its false condition.
// While also loging the indented results.  




// jQuery

// Library written in js for helping to interact with html DOM using its easier syntax and functions.
// It is a common convention to name variables that hold jQuery selectors with a dollar sign $.
// Uses $ to basically call jQuery on this thing.
/* In order to use jQuery, we need to:

Include jQuery in our project. jQuery is a library, which means it is a set of code in a file, therefore we will need to link that file in our HTML in order to access it.

Once we link it in our HTML file, we can use its functions and syntax in our js/main.js file.
Once linked, we'll need to make sure our HTML is loaded before we run our jQuery and JavaScript code.

This will prevent our jQuery and JavaScript code from running before the elements they select are rendered. */


<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script> 
// link to include jQuery
// place before body tag all script tags to allow those scripts access to jQuery.


var main = function() {
  
}

$(document).ready(main);
// $(document).ready(main); Checks to make sure the document/webpage attached to the main.js file loads before calling the js code.
// To do this create an empty function inside of the main.js to use as a callback for the jQuery method ready to refer back to once the page is ready, therefore loaded.


document.getElementsByClassName('skillset');

$('.skillset');
// These two are equal. Both select the skillset class.


.hide()
// Is a jQuery function that adds CSS property display: none to whichever DOM element it is being called on.
// This makes the page fade out by default. To be faded in later using .fadeIn(timeinmilliseconds). Default time is 400s.
// .show() is opposite command to counterpart hide. It changes CSS property to something visible.


.on('click', function() { ... })

$('.example-class').on('click', function() {
  // Same as above different way of writing
});
// Adds a listener to the selector. When clicked will execute the code within its block.
// Note that the click listener does not have a period in front of it like the DOM selector things do to target them.


$('example-class').toggle();
// .toggle() shows/hides a selected element.


$('.example-class').toggleClass('active')
// .toggleClass('classthatistoggled') jQuery funciton for toggling a Css class on the selector that its connected to.
// If the element that is selected has the CSS class applied to it toggleClass will remove it/add it vice versa.
// toggleClass does not require use of period before 'active' b/c it is already expecting a CSS class. If it was not expecting CSS class then you'd need the period.


$(this)
// Works just like regular this in js to refer to the promised result of the callback function within the scope of said function.
// Ie a certain class is initialy selected $(this) can simply be used within the scope of said selection to reference it with further statements.
// Note abscence of '. ' CSS class selection formating. this is just written like normal this as it normally is as a keyword.
// Also makes it so that if another class is selected elsewhere by user clicking it will override the inital selection and inoke changes on the new callback to this.


$('.item-one').next().hide();
// .next() selects the element following the element that it is called on. 
// Ie the element that is down within the scope of the preceding element, or if .next is called on the last element within the scope of whatever html section where in the next element selectable.
// Selects the next direct element.


$('.my-selector').text('Hello world!');
// .text() attaches directly to a jQuery selector
// on calling .text() it will permanently change the text of the selected string to whatever string is passed through as it's argument.
// IE in this case it changes the selector's existing string to 'Hello World!' on call.

$('.example-class').slideToggle(400);
// .slideToggle(timemilliseconds) animates an element's entrance and exit.
// 400 miliseconds is the default transistion time.

//finshed codeacademy js course 6/24/17


