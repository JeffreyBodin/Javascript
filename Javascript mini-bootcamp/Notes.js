//LambdaSchool Javascript mini-bootcamp

/* Homework links:
https://github.com/SunJieMing/js-minicamp-homework-1

// Notes
/* Code is excuted top to bottom line by line.
Semi-colon is the ending of the sentence of code. It tells the computer that the phrase is done. BEST PRACTICE
Equal sign is an assigner it assigns a variable to a value.
*/

// Terminal Notes
/* Terminal is way to navigate on your computer 
'$ cd' means change directory
'$ cd ..' means go up one level in directory
"$ ls" means to list all the files in the current directory
"dir" means to list all the files in current directory on windows (use this command I have windows)
When the files are listed folders will be listed as: "homework/" with the forward slash/slash.
Regular files like .js files will be listed as: "homework.js" they will contain the excutable on the end of them to designate the file-type.
*/

// Git Notes
/* Makes a copy to a repository by forking the repository. This creates a copy to my account that is independent from the master copy.
If I want to suggest a change to the master copy I can make a change and then submit a pull request and if they like my change they can merge my copy into the master. This applies the fix.
Git is commonly used as a BEST PRACTICE version control. 
Commit is like a hardsave at that point in time. You can restort to previous saves to previous versions before that commit. Commits are savepoints.

Git Terminal Commands
'git clone hyperlink' will clone the git repository to whatever folder the terminal is currently targeting.
'git status' will check the local branch version to the origin/master. It will show that you are up to date with master, behind master by x commits, or ahead of master by x commits.
'git add filname' will stage (ready to commit to master) the file. It is ready to commit to the master. 
'git commit -m "Message goes here"' This is the command for commiting and adding the little commit description.
'git push origin master' This pushes the commit to the cloud/master.
*/


// Variable Notes
/* var is how to set variables 

*/
// ex:
var name = 'Ben';
var favoriteNumber = 15;

console.log(name);
console.log(favoriteNumber);

// Objects
/* Objects are just variable names that can have different methods or properties attatched to them 
Console is a global object it is available everywhere.
.log is a method that allows you to pass a variable (etc.) through it to log something to whatever object its attached to. (In this case console.)

Math is an object.
pow is a method allows you to take a base (number on the left) to an exponent (number on the right).
round is a method allows you to round a number.
ceil is a method that always rounds up. Think ceil like ceiling ... get it up.
floor is a method that always rounds down. Floor like ... well floor.

length is a property that can find the number of charecter in a string. You attach the property length to a variable that contains a string.
*/
//ex:
Math.pow(2, 3);
// Takes 2 to power of 3 getting 8. Same as like 2^3 in calculator.
var roundedValue = Math.round(5.5);
// Rounds up to 6 then assigns 6 to variable roundedValue.
var roundedValue = Math.round(5.45)
// Rounds down to 5 then assigns 5 to variable roundedValue.
var roundedValue = Math.ceil(5.0001);
// Rounds up then assigns 6 to variable roundedValue.
var roundedValue = Math.floor(5.9);
// Rounds down then assigns 5 to variable roundedValue.

var greeting = 'Hello World!';
var greetingLength = greeting.length;
console.log(greetingLength);
// Returns length of string greeting.

// Addition/Subtraction Operation +/-
// ex:
var age = 30;
age = age + 10; // This is the same as below they are equal.
// Assigns age to 30. Then reassigns age + 10 to reassign age to 40.
var age = 30 + 10; 
// Assigns age to 40. 
var age = 30 - 15;
// Assigns age to 15.

// Division/Multiplaction Operation * /
// ex:
var age = 30 / 10;
// Assigns age to 3. 
var age = 30 * 10;
// Assigns age to 300.

// Modulo Operation %
// This gets the remainder of your division.
// ex:
var remainder = 20 % 7;
// This will divide 20 by 7 get the remainder, 6. Then assign 6 to the variable 'remainder'.

// Negative Numbers
// ex:
var negative = -100;
// Assigns -100 to the variable negative.

// Strings
// ex:
var firstName = 'Ben';
var lastName = 'Nelson';

var fullName = firstName + lastName;
// Assigns the newly combined string 'BenNelson' to variable fullName. When the strings are added they are just joined no spaces added etc.
// This is called string concatenation.
var fullName = firstName + ' ' + lastName;
// Added a string with a space in the middle of firstName and lastName. Now the newly created string 'Ben Nelson' is assigned to fullName.



// Functions
/* Write using the function keyword. Just like using var to define a variable use function to define a function.
Funciton names should be an action. Ie sayHi.
Any variables declared within a function only lives within the function that they are declared in. They don't exist outside of that function.
parameters are the names listed in the function definition.
arguments are the real values passed to (and recieved by the function).
parameters are just placeholder names for the eventual arguments (values).
*/
// ex:
function sayHi(){
    console.log('Hello!');
}

sayHi();
// Logs the string 'Hello!' to console.

function sayHi(name){
    var greeting = 'Hello ' + name;
    console.log(greeting);
}

sayHi('Ben');
sayHi('Austen');
sayHi('Ryan');
sayHi('Young');
sayHi('Mike');
// Sets the parameter name in the function b/c I am expecting that a name will be passed through the function every time it is run.
// Then creates var greeting which is assigned to the string 'Hello ' concatenated to the parameter name (which I am expecting will be provided whenever this function is run).
// The parameter name is provided ex with sayHi('Ben'). The string 'Ben' is the parameter that is passed through the function to then be concatenated with the string 'Hello '.
// Parameter is not a variable it is not definied as such with var. It is just the thing that goes in the paraenthesis of the funtion. It modifies the function within that specific running of the function.
// Whatever is inside of the paraenthesis is passed through as an argument.
// If you want multiple arguments passed in you seperate them with commas ie (x, y).

function addTwoNumbers(x, y){
    console.log(x, y);
}

addTwoNumbers(2, 3);
// Logs 2 and 3 to console. Like: 2 3 

function addTwoNumbers(x, y){
    var sum = x + y;
    return sum;
}

var value = addTwoNumbers(2, 3);
// Creates function to sum two numbers that are passed through the function. Creates variable value which is assigned to the product of the function addTwoNumbers. 5 is assigned to var value.
// return is whatever is after this is returned as the answer to the function???. Still not quite sure look at examples below.
// Whenever a function hits a return statement if the statement is met then the function stops there and returns that value.

function canDrive (age){
    if(age>= 16){
        return true;
    }
    return false;
}

var myAge = 50;
var iCanDrive = canDrive(myAge);
console.log(iCanDrive);
// Returns true b/c 50 satisfies the if statement of age >= 16 yrs old. 
var hisAge = 10;
var heCanDrive = canDrive(hisAge);
console.log(heCanDrive);
// Returns false b/c 10 does not satisfy the if statement of age >= 16 ,so it will continue and run false.


// If Statements
// Uses if/else statements to do things.
// Else is the ending of the if statement. Else if adds more parts to the if statement to check if the statement is satisfied (can add as many as I want).
// ex:
var food = 'Pizza';

if(food === 'Pizza'){
    console.log ('Yummy!');
} else {
    console.log('I would rather have pizza...');
}
// Assigns variable food to the string 'Pizza'. If statement checks food var against the string 'Pizza'.

var food = 'Steak';

if(food === 'Pizza'){
    console.log ('Yummy!');
} else if(food === 'Steak') {
    console.log('Super yummy!');
} else {
    console.log('I would rather have pizza...');
}
// More complex version of above, includes an else if statement.

var age = 16;
var hasDriversLicense = false;

if (age >= 16 && hasDriversLicense) {
    console.log('You can drive!');
} else {
    console.log('Call your mom to pick you up.');
}
// Uses && (and operator) which specifies that both sides have to be true in order for it to satisfy the condition. 
// Will end up false and prompt to call mom to pick up.

var age = 16;
var hasDriversLicense = false;

if (age >= 16 || hasDriversLicense) {
    console.log('You can drive!');
} else {
    console.log('Call your mom to pick you up.');
}
// Uses || (or operator) which specifies that only one side has to be true in order for it to satisfy the condition.
// Will end up true b/c it only needs one side (the age >= 16) to be true.

var isDrunk = false;

if (!isDrunk) {
    console.log('You can drive!');
} else {
    console.log('call a taxi!');
}
// Uses ! (exclamation mark) to reverse the value of the variable isDrunk from false to true. The exclamation mark reverses the boolean value.

// For Loops
/*
There are essentially 3 seperate statements inside the for loop (seperated by the semi-colons).
First one declares a value to iterate by, in belows case that is i which is assigned to 0. This keeps track of the loop its on and that figures out our exit condition.
Second one is i < 10 ,so as long as i is less than 10 the loop will keep looping (or executing again).
Third one is i++ which adds 1 to i for each loop of the for loop. Every time it the for loop is executed i gains value by 1. 
It is similar to  running i = i + 1; everytime it loops. It is just a neater cleaner way of expressing adding a value. \
ex of these operators: ++ , -- , *= , += , etc.
*/
// ex:

for (var i = 0; i < 10; i++) {
    console.log('hi!');
}
// Will print out 9 instances of the string 'hi!'. 

// Arrays
/* 
Created inside of the [] square brackets. With commas and a space seperating the indivdual strings, etc.
Arrays hold strings, variables, booleans, values, etc. An array is really just a list that stores data.
Arrays start at 0. 0 represents the first item in the array for example you use [0] to select the first item.
The index of the array is represented by 0 through 1 less than items in the array. These valus are the arrays indexed points in the array.
Check MDM's javascript array objects/methods page. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
.push - add to the end of an array
.pop - remove from the end of an array
.length - get length
.shift - remove from the front
.unshift - add to the front of an array 
*/
// ex:

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

console.log(favoriteFoods);
// Logs the favoriteFoods variable to console. Outputs an array containing favorite foods.

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

console.log(favoriteFoods.length);
// Logs 3, the number of indivdual strings contained within the array to console.

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

console.log(favoriteFoods);
console.log(favoriteFoods[0]);
//  Now also logs Steak to the console.

console.log(favoriteFoods[favoriteFoods.length - 1]);
// -1 to the length of the array (which gives number of items in the array) will always give the last item in the array
// Just as 0 will always give the first item in the array.

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

for (var i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}
// This is a way to log all the parts of the array to the console. 
// It does this by logging i to console which is 0. 
// Then the for loop runs again and adds 1 to i so that it logs the second part of the array. 
// Every time the for loop runs i increases in value therefore this will always print every individual item of the array.
// This is how you use a for loop  to iterate over an array. This is very common.
// Make note about this being called iterating over an array (i think).

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

for (var i = 0; i < favoriteFoods.length; i++) {
    if (favoriteFoods[i] === 'Mango') {
        favoriteFoods[i] === 'Pineapple';
    }
    console.log(favoriteFoods[i]);
}
// This will change a part of the array. Mango to Pineapple.
// Once again the for loop iterates over the array this time to find an index that satisfies the if statement.
// Everytime that it finds one of the index's contains 'Mango' it will change it too 'Pineapple'.

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

for (var i = 0; i < favoriteFoods.length; i++) {
    if (favoriteFoods[i] === 'Mango') {
        favoriteFoods[i] === 'Pineapple';
    }
    console.log(favoriteFoods[i]);
}

favoriteFoods.push('Ice Cream');
// This introduces the .push method targeting the favoriteFoods variable (which contains the array of foods).
// .push adds a string to the end of an array
// So the favoriteFoods array will now contain ['Steak', 'Pineapple', 'Curry', 'Ice Cream'].

var favoriteFoods = ['Steak', 'Mango', 'Curry'];

for (var i = 0; i < favoriteFoods.length; i++) {
    if (favoriteFoods[i] === 'Mango') {
        favoriteFoods[i] === 'Pineapple';
    }
    console.log(favoriteFoods[i]);
}

favoriteFoods.push('Ice Cream');
favoriteFoods.pop();
// Introduces the .pop method which is targeting the favoriteFoods variable. (the array)
// .pop method removes the last item off of an array.
// So the favoriteFoods array will now contain ['Steak', 'Pineapple', 'Curry'].



// Objects 
/*
The object user is declared just like a regular variable. 
The object user contains multiple properties within it that all have values assigned to them. 
The colons seperate the 'keys' from the 'values'.
The keys on the left of the colon are used to access the values on the right of the colon.
Properties are the keys on the left of the colon.
Properties are a special variable that are stuck to the object. In this case they are stuck to the object user.
Objects are like nice variables that contain a lot of information all grouped within it. 
Ie like all of the associated information of a certain user all under one object. This is very useful for grouping related values together.

Properties are always turned into strings inside of the object. So if a property was originally a number as in the example below 2 goes to '2'.
These properties are once again the keys. Same thing.

The object user is in memory so everytime it is used to add things to it etc. The same original object user is used the entire time.
So if something is added to it the original object is just being edited in some way. 

Use dot notation and bracket notation to add properties to an object.

Objects are declared like variables just that they are assigned to a bracket containing properties with values of their own.
*/
//ex:

var user = {};
user.username = 'Ben';
user.email = 'ben@lambdaschool.com';
// This is a way to create a object than add properties with values to that object.
// Uses dot notation.

var user = {
    username: 'Ben',
    email: 'ben@lambdaschool.com',
};
// This is a way to create an object. By just filling out the object manually.
// This is exactly how the above var user would look like after the properties are added to the object.


var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
}

console.log(user.username);
// This console.log targets user which is the object.
// The period says that we want to access a property that is declared on the object.
// The property username if after the period because that is the property that we want to target within the object user.

var user = {
  email: 'ben@lambdaschool.com',
};

if (user['email']) {
    return true;
  } else {
    return false;
  }

var user = {
  email: '',
};
// Outputs true.
// Is true because email's value is a string with an email in it.
// Note it is not nessesary for the string to be an email just for the string to be filled in and therefore have a value.
// This is how to check if a property of an object has a value.

if (user['email']) {
    return true;
  } else {
    return false;
  }
// Outputs false.
// Is false because email has a value of an empty string.
// This is how to check if a property of an object has a value. Take note.

var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
}

user.sayHi();
// This is how to create methods within objects. METHODS <-------
// Methods are functions stored as object properties and they themselves are represented within an object as a function.
// Methods are invoked by () imediatly after the function.
// This is an anonymouse function b/c the function itself does not have a name.
// It does not need one because it is always refernced by the key sayHi (which is also a property that contains the anonymouse function).
// This function just logs hello! to the console.
// Also called invoking the function.

var storeItem = {
    price: 80,
    discountPercentage: 0.1
};

storeItem.calculateDiscountPrice = function() {
    var discount = this.price * this.discountPercentage;
    var discountPrice = this.price - discount;
    return discountPrice;
};
// Adds the method calculateDiscountPrice to the storeItem object.
// Another example on how to add methods to an already existing object using dot notation to add the method to the object.
// Uses this to target the current object that the method is contained in. Once the method is added of course is when it uses this.
// this targets whatever object that it is inside of so if I do not know the name of the object that it is going to be inside of it is better to use this. 
// this also helps to make more reusable methods since this targets the object that it is contained in. Makes it easy to potentially reuse this method on other objects since I have used this. 

var storeItem = {
    price: 80,
    discountPercentage: 0.1
};

storeItem.calculateDiscountPrice = function() {
    var discount = storeItem.price * storeItem.discountPercentage;
    var discountPrice = storeItem.price - discount;
    return discountPrice;
};
// Same as above example just with storeItem used to target the storeItem object.
// Shows equivalency between this and the name of the object (storeItem) in targeting the object that the method is contained in.

var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
}

user.isPremium = true;
// This adds the isPremium key and value of true to the object user.
// The computer will check the object for the isPremium key and when it does not find it it will then add it to the object.
// This is how you add properties to an existing object.
// Uses dot notation to add a property to the object.

var squares = {};

squares[2] = 4;
squares[5] = 25;
// This adds the property 2 and 5 with the values of the square roots of those numbers as their values.
// If console.log(squares) it outputs {'2':4, '5':25}
// This is because they were added as properties to the object called squares.
// The properties are now stings they are no longer intergers. Properties are always converted into strings if they were not beforhand.
// Uses bracket notation to add a property to the object. 
// This is a way to create an object than add properties to that object.
// Also use bracket notation to add arguments (and their values) to an object when dealing with functions and the functions objects.

var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
}

function addProperty(object, newProperty, newValue) {
    object[newProperty] = newValue;
}

addProperty(user, 'livesInUS', false);
// Function addProperty passes through the user in the object slot on the far left. Then the new property takes the middle slot. And the new value of that new property takes the last slot.
// This function defines what goes where by the commas. 
// So, you just slot in what the function calls for in the correct slots to easily add new properties to the existing object.
// Inside of the function object is next to newProperty within brackets becuase brackets are used to dynamically modify the object. 
// Using dot notation with the period to target the object would not work correctly and would instead add a new property called newProperty to the object.
// That is why bracket notation is used instead b/c this way the 'livesInUS' property is properly added as the key to the object instead of the function placeholder newProperty.
// Try to remember to use bracket notation instead of dot notation when dealing with things like functions that have constantly changing values for their parameters/placeholders.

var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
};

delete user.likesIceCream;
// Uses delete to remove the property likesIceCream from the object.
// Only use delete in really this specific circumstance do not use it remove parts of an array or anything else. 
// Just use delete for removing a single property from an object for now.

var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        console.log('hello!');
    }
}

for (var key in user) {
    console.log('>>>key', key);
    console.log('>>>value', user[key])
}
// This is how to iterate over an object.
// Uses a for loop to iterate over the object user. 
// The string '>>>key' is placed before the key so that when the keys are outputed in console it prints >>>key key.
// key will print the key's name to console. It does not need to be modifying anything becuase here we just want the name.
// Unlike underneath for the value of the key it needs to be against the object user so that the value of the key is printed instead of just the key's name itself. 
// The string '>>>value' is placed before the user[key] so that in console it prints >>>value value of the key.
// user[key] is using bracket notation so that it looks for the value stored in the key of all the potential keys of the object to print to console.
// If dot notation was used instead like user.key only a key called key would be looked for to have its value printed to the console. This is why bracket notation is used.

var users = [
{
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
        var sentence = 'My username is: ' + this.username;
        console.log(sentence);
    }
},
{},
{},
{}
];

users[0].sayHi;
// Now the object users is an array of objects of individual users.
// this is the command to use to identify the specific object that it is called in.
// So when this is used inside of the sayHi function it identifies this object the object that it is inside in order for it to run.
// Its used in this way becuase now that the object users is an array of objects there is no way to target the indivdual objects easily. Due to it now being an array.
// So functions inside of the objects of the array need to know what user they are targeting to run and that is why this is used.
// this just tells the function to target the object it is written in even though that object by itself is unnamed.
// It is a way to target an unnamed object from within that object.
// users[0].sayHi; targets the index of 0 which is the first object with the .sayHi method that is contained within the [0] index object. And run the function.

var user = {
    posts: [{likes: 1},
            {likes: 2},
            {likes: 3},
            {likes: 4},
            {likes: 5}],
}; 

var sum = 0;

for (var i = 0; i < user.posts.length; i++) {
    sum += user.posts[i].likes;
}
return sum;
// Iterates over user's posts property, which is an array of objects each containing an integer property named likes.
// Sums the value of each likes property.  
// returns sum 
// This mockup user object is similar/same/close to the homework problem sumUserPostLikes on homework 3.
// This is basically what the input was for that problem without the extra properties that are alongside the likes property.

var user = {
  posts: [{post: {likes: 1}},
          {post: {likes: 2}},
          {post: {likes: 3}},
          {post: {likes: 4}},
          {post: {likes: 5}}],
};

console.log(user.posts);


var sum = 0;

for (var i = 0; i < user.posts.length; i++) {
  console.log(user.posts[i].post.likes);  
  sum += user.posts[i].post.likes;
}
// Iterates over user's posts property, which is an array of post objects each containing an integer property named likes.
// Sums the value of each likes property.  
// returns sum
// This was my original mockup of the homework problems user object. I thought that there was a literal post property.
// And that this post property contained the interger property likes. However, there was never any post property and the above mockup is the correct users object from the homework.

 // Truthy and Falsy
 // In javascript every value has either a true value or a false value. 
 // ex:

 if (true) console.log('hi!');
 // Is true b/c it is a true boolean value.
 // Logs to console.

if (10) console.log('hi');
// Is true b/c numbers by themselves have truthy value.

 if (0) console.log('hi');
 // Is false b/c 0 has a falsy value to itself and therefore it does not satisfy the if statement. 
 // Does not log to console.

 if (!false) console.log('hi');
 // Is true b/c ! reverses the true/false value of what it is attached to. So, false is now true and it satisfies the if statement logging to console.

if ('') console.log('hi');
// Is false b/c an empty string is a false value.

if ('hhhhh') console.log('hi');
// Is true b/c the filled in string has a truthy value.

function myFunction(x, y) {
    if (!x) return console.log('hi');
    if (!y) return console.log('error!')
}
// Tests if x is not passed in return error 


function myFunction(options) {
    if (!options.option1) console.log('no option 1');
    if (!options.option2) console.log('no option 2');
}
myFunction({option1: true});
// In this the option1 has a true value. So, when this is passed in the first if statement it makes that if statement true which is then convereted to false b/c of the logical Not reversing the value.
// So the first if statement becomes false b/c it is true.
// And the second if statement becomes true b/c it is false. B/c option two was not passed in making it false which then changed to true.
// This satisfies the second if statement logging to console 'no option 2' b/c it was not passed in.
// This is basically a check for the option that was not passed in b/c the object that is passed in will not print to console.
// And the option that does not pass in will have its value reversed to true and will print to console.
// Good for checking for errors and such. Try to think of various ways that this can be implemented in.


// More function notes

function sumNumbers() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumTotal += arguments[i];
    }
    console.log(sumTotal);
}

sumNumbers(1, 2, 3, 4, 5, 6, 6, 6, 6, 9);
sumNumbers(0);
// sumNumbers function sums the numbers that are passed in as arguments and logs result to console.
// Instead of passing in an array it can pass in an ulimited number of arguments.
// We want to be able to deal with an unknown amount of arguments that could pass in this function.
// Uses the arguments array like object to iterate over the arguments that are passed in adding them together.
// arguments is like an array it has a length and indexcies but you can't do .push, .pop, etc.. 
// arguments can be iterated over like above b/c of the fact that it has indexcies like an array.


// Callback Function
//  is where you pass a function into another function as an argument.
// ex:

var numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.forEach(function(num) {
    console.log(num);
});
// forEach is a method that we pass in a function as its argument.
// forEach will take each item of the array numbers and pass in that number as its num argument and log each result to console.
// This is the preffered/best way to iterate over arrays MAKE NOTE OF THIS. 

var numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.forEach(function(num, i) {
    console.log(num, i);
});
// Now it logs the value of each element of the array with its corresponding index to the console.

function invokeCallback(cb) {
    cb();
}

function sayHi() {
    console.log('hi!')
}

invokeCallback(sayHi);
// cb is a reference to the function that is passed in as the argument. cb = call back 
// In the invokeCallback sayHi is not invoked with paraenthesis like sayHi() this is so that it is just passed in as a value.
// sayHi passes in as the argument of invokeCallback above where the function is declared as cb. 
// sayHi is invoked when it passes through as cb(); b/c cb is the placeholder waiting for the argument (which is sayHi) to pass through.
// sayHi happends to be a function so once it is passed in next to the (); it is invoked.

function invokeCallback(cb) {
    cb();
}

function sayHi() {
    console.log('hi!')
}

function sayNiHao() {
    console.log('ni hao!');
}
invokeCallback(sayHi);
invokeCallback(sayNiHao);
// This time sayHi and sayNiHao are passed in as arguments and are both invoked as they pass through being logged to console.

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(runningTotal, num) {
   return runningTotal += num;
});
console.log(sum);
// .reduce loops over all the numbers in the array one at a time as the argument num. 
// num gets added to the runningTotal argument each time it is passed through.
// So everytime .reduce passes in a new argument for num that num is added to the runningTotal argument.  
// runningTotal (or the agregation) is a value that is increased each time the function is invoked and num is added to it. 
// Therefore it easily sums all of the numbers in the array and returns the sum.


// .map()
/*
map() calls on each item in the array and passes them into the function
once the element is passed into the function some transformation will be done on it and whatever is returned will replace that element in the array.
Use a callback function (passed in the .map() function) to invoke the desired change to each element of the array.
Since .map() by itself only iterates over the each element of the array. The callback function exists to make a change to the element that .map() is iterating over.
*/
// ex:

var numbers = [1, 2, 3, 4, 5];

var newNumbers = numbers.map(function(num){
    return 'hi';
});

console.log(newNumbers);
// This uses .map() to iterate over the numbers array and replace each element with the string 'hi'
// newNumbers variable is assigned this new array of 'hi' strings
// Uses a callback function which is passed in the .map() function to invoke the desired change to each element of the array.

var numbers = [1, 2, 3, 4, 5];

var squares = numbers.map(function(num){
    return num * num;
});

console.log(squares);
// This uses .map() to iterate over the numbers array and replace each element with the square of that element.
// B/c num * num makes the element times itself by itself returning the square as the new value in the squares array.



// Constructors
/*
If you have to use a object over and over again like multiple of the same object to fill with data use constructor functions.
ie user data, etc.
Essentially you make a template to be used to recreate more objects to fill with data.
Constructors are always capitilized
Use the new keyword before the constructor function to create a new object assigned to whatever variable you have declared for said new object.
*/
// ex:

function User(options) {
    this.username = options.username;
    this.password = options.password;
}

var ben = new User({ // This is the same as.
    username: 'SunJieMing',
    password: 'I love JS!',
});
var ben = new User({username: 'SunJieMing', password: 'I love JS!',}); // This. Looks more like arguements now to be passed in the function.
// User() is a constructor function for making new objects of users.
// Function User takes in an options object as the parameter of the function. 
// this specifies the object that it is contained in and assigns the passed in username and password properties to the new objects username and password properties.
// User() returns the new object with the new properties.
// This new anonymous object is then assigned to var ben creating a object consisting of the users username and password.
// Think of the username and password properties that are passed in as arguments b/c they are arguments that are passed in.
  

function encryptPassword(password) {
    return 'sdafhskjfhkalsjdhflskdf';
}

function User(options) {
    this.username = options.username;
    this.password = encyptPassword(options.password);
}

var ben = new User({
    username: 'SunJieMing',
    password: 'I love JS!'
});
// This is like if the user that we are creating needed to have a password encrypted.
// Like the example he gave of that company he worked for the constructor function would have within it many methods.
// These methods would work on the given user data to ie validate a username to check against the companies database to see if it is available.
// Or validate that the email provided by the user is real, or that it has an @ symbol in the correct place. Stuff like that.
// These various methods would work on the supplied properties that the user inputed than create a new user object to store all of this data.
// Like encrypting a users password for storage or validating a password whenever someone logs in against the users password stored in the database.
// All different uses for constructor functions.

function Cat(options) {
    this.name = options.name;
    this.age = options.age;
    this.meow = function() {
        console.log('meow!');
    }
}

var snowballII = new Cat({
    name: 'Snowball II',
    age: 5
});

snowballII.meow();
// Creates a constructor function for cats.
// It assigns the provided name and age properties to the new cat object. 
// Also assigns the meow method to the new cat object.
// Creates a new cat snowballII using new Cat() constructor.
// The final line invokes the meow method of the newly created cat object.

function Cat(options) {
    this.name = options.name;
    this.age = options.age;
    this.meow = function() {
        console.log('meow! My name is ' + this.name);
    }
}

var snowballII = new Cat({
    name: 'Snowball II',
    age: 5
});

snowballII.meow();
// The meow method in this constructor is changed from the previous one.
// This meow method logs a string containing the cat objects name property. 
// this keyword targets the object it is contained in which happends to have a name property.
// The value of the new cat objects name property is concatenated to the rest of the meow methods string.
// Than it is logged to console.
// this targets what is to the left of the dot that the meow method is attached to. 
// So that this is the object that the this inside of meow method targets. 
// Because the computer sees this and it than tries to find what is this object.
// To do that it looks to the left of the dot to find the correct object to target. 



// Prototypes
// ex:
function Cat(options) {
    this.name = options.name;
    this.age = options.age;
}

Cat.prototype.meow = function() {
    console.log('meow! my name is ' + this.name);
};

var snowballII = new Cat({
    name: 'Snowball II',
    age: 5
});

snowballII.meow();
// This is how to attach prototypes to functions.
// The prototype is attached to the Cat() constructor function. The meow method is attached to the prototype.
// The prototype has a single function (the meow method). This is stored in memory.
// All of the cat objects remember the prototypes that are attached to thier constructor.
// So rather than all of the many cat objects containing a function that will run they just access the prototype method meow that is 
// attached to thier constructor. So all of the cat objects use this same function instead of running thier own functions.
// This will speed up the program considerably.
// When snowballII invokes the meow method the computer looks to see that if it contains the meow method. 
// It doesnt so it then checks to see if the Cat() constructor contains any prototypes. It does so the meow method is then invoked.


Array.prototype
// Array is a built in javascript keyword that behind the scenes actually creates the arrays that you create. 
// So when I declare an array behind the scenes this Array.prototype is used to make it.
// Uppercase array is the reserved keyword that creates the lowercase arrays that I make. Never use uppercase Array as one of my arrays.

Array.prototype.sayHi = function() {
    console.log('I\'m on the array!');
}

var array = [1, 2, 3];
array.sayHi();
// the \ escapes the ' so that it does not close out the string right there and instead just acts as an apostrophee.
// This uses the Array reserved keyword that effects all the arrays to add the sayHi() method to all of the declared arrays.
// Since Array creates all the arrays adding a method onto it using prototype adds the same method to all created arrays.
// That is why array.sayHi() invokes the sayHi method.




// Closures
/*
Just like functions can pass in a callback functions. Functions can also return functions.
*/

function outer() {
    return function() {
        console.log('hi there!');
    };
}

var inner = outer();
inner();


// This shows a function returning another function when invoking said function.
// The inner() function is invoked and returns outer's anonymous function.
// The anonymous function is what is actually assigned to inner(). 
// B/c outer() just returns the anonymous function.
// inner is lastly invoked and logs 'hi there!' to console.
// inner() from above ^ is essentially this 
var inner = function() {
    console.log('hi there!');
};



// Function Scope - Scope
// This determines how the code can interact with other code between varrying levels of a nested function.
// Ie. A inner nested function can see itself and the levels outside itself. 
// It cannot look within (inner) itself to see an inner function.
// Just as the outer function that it can observe cannot look within itself and observe the inner function.
// This is especially important with variables, variable names, and the values of variables.

var x = 5;

function outer() {
    x;
    var y = 10;
    function inner() {
        x;
        y;
        var z = 15;
    }
}
// The above outer() function demonstrates the conscept of function scope.
// var x is declared, with a value of 5, outside the outer() function.
// outer() can see the x variable that is outside of it.
// It can also manipulate this variable independent of the actual variable x that resides outside of outer().
// var y is declared within outer(). This cannot be seen by other functions outside of outer().
// So, this y variable is completly independent of any other varible y's in the rest of the code. Just like var x.
// inner() resides within outer() and it has the same rules on scope as outer(). 
// Any of inner()'s declared variables (like z) can likewise not be observed/changed/interacted with by functions outside of itself.
// Only functions inside of inner() could interact with inner()'s variables etc. 
// So on and so forth until the innermost function.



// Closures - notes
// Closures are functions that refer to independent (free) variables.
// free variables - variables that are used locally, but defined in an enclosing scope.
// These functions 'remember' the enviroment in which they were created.
// Idea that if you return a function from a function the returned function remembers the scope that it was returned from.
// So the returned function remembers  the scope from where it was written.


function outer() {
    var x = 10;
    return function() {
        console.log(x);
    }; // This needs a ; because it is a statement of the outer() function.
}

var inner = function() {
    console.log(x);
}; // ; because declaring a variable.

inner(); // Last line invokes the inner() function.
// On invoking inner() when the code is run it will find inner() and look within it to the function the returns console.log(x).
// But it will not find a declared x. Instead of erroring Javascript will look elsewhere for another function that may have declared x.
// JS remembers that console.log(x) first came from the outer function. 
// JS will then find x, return x's value, and log x's value to the console.
// This is an example of closures.


function limitFunctionCallCount(cb) {
    return function() {
        cb(); // callback function
    };
}

function sayHi() {
    console.log('hi!');
}

var newSayHi = limitFunctionCallCount(sayHi); 

newSayHi();
// On run the above will invoke the newSayHi() function.
// newSayHi() equals invoking limitFunctionCallCount() while passing through sayHi as the argument.
// The sayHi() function becomes the callback function that is returned within the limitFunctionCallCount().
// So the end result on invoking newSayHi(); is to return sayHi() as the cb() and invoke sayHi() logging 'hi!' to the console.
// workflow 
// The comp essentially checks newSayHi() on invoking it. Then goes up to limitFunctionCallCount() to satisfy the passing of the arg as cb().
// Then returning said arg as cb() to invoke the arg. This satisfies the initial invoking of newSayHi().


function limitFunctionCallCount(cb, limit) {
    var callCount = 0;
    return function() {
        if (callCount >= limit) return; // 1 ln if statement where if callCount greater= the passed in limit return that many callbacks.
        callCount++;
        cb();
    };
}

function sayHi() {
    console.log('hi!');
}

var newSayHi = limitFunctionCallCount(sayHi, 5); 

newSayHi();
// Shows how to limit the amount of callbacks in a cb function using an if statement w/passed in limit.
// callCount++ increments up to >= the value of the passed in limit. 
// Then once the if statement is satisfied the cb() is return equal to the value of the callCount variable (and subsequent limit value).
// Limits note this for later.




// Recursion
/*
Essentially another way to iterrating.
Another way to loop.
For large/complicated functions its usually easier to use recursion to loop instead of using a for loop.

Base Case - defined condition/value that stops the loop from being infinite. 
Ie. the length of an array w/for loops and arrays.
*/


function nFibbonacci(n) {
    if (n < 3) return 1;
    return nFibbonacci(n - 2) + nFibbonacci(n - 1)
}

var result = nFibbonacci(30); // assigns invoking nFibbonacci w/30 as the arg. So, 30th number of the sequence.

console.log(result); // logs 832040  
// Returns the value of the nth number in the Fibbonacci sequence.
// Ie. 1, 1, 2, 3, 5, 8, 13, 21.
// Each number is the sum of the two numbers the precede it.
// The base case is the if statement. Where if n < 3 return 1. This keeps n from being subtracted infinitely smaller.
// nFibbonacci() calls itself inside of itself.
// returns the passed in arg minus 2 plus passed in arg minus 1 in some crazy loop until the value is found... maybe?
// Example of a recursive function. 