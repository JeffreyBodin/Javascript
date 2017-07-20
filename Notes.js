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







// Javascript Api Notes - How to use APIs with Javascript 

// api - application programming interface,  specifies the ways a program can intereact with an application
// ex: to use data from twitter you'd use the twitter api which  specifies the process for authentication, important urls, classes, methods, classes, etc
// For an API to be RESTful:
// - Seperate the client from the server
// - Not hold state between requests. Meaning that all info needed to respond to a request is available in every indivdual request (the server does not hold state/data from request to request).
// - Use HTTP/HTTP methods
// HTTP is a protocol that connects clients and servers.
// HTTP 4 Methods/Verbs
// - GET: retrieves info form the specified source.
// -- ex: When you send a GET req to codeacademy.com information/data is retrieved to fulfill req you're recieving something etc. 
// - POST: sends new information to the specified source.
// -- ex: When you add/update a blog/page you're sending POST/PUT requests to fulfill the req to essentially add something/push changes etc.
// - PUT: updates existing information of the specified source.
// -- ex: see above.
// - DELETE: requests removes existing information from the specified source.
// -- ex: When you delete a tweet a DELETE req is sent to server to tell it to fulfill your req by deleting your tweet.
// HTTP Request 3 Parts
// - Request line: which tells the server which type of request is being sent (GET, POST, etc) and what kind of request its's looking for.
// - Header: line which sends the server additional information (such as which client is making the request etc.).
// - Body: This can be emtpy () in the case of a GET req (As in you are req info so your req would be void of data. The res to your req would have data.)
// -- Or contain data in the case of a POST/PUT (b/c you are req that the info you supply is added/put somewhere.).
// Endpoints
// - These are API-defined locations where particular data are stored. 
// - You'll GET something different depending on the endpoint you use.
// - For example while using the youtube api there might be endpoints for: most popular vids, most recent vids, or vids belonging to a genre/playlist/catagory/etc.
// Authentication and API keys
// - API key grants access to an API.
// - Your api key identifies you to the API, for authentication/verification/security purposes.
// - Usually a long alphanumeric string.
// HTTP Status Codes
// - response:  successful request results in this.
// - Reponses contain three-digit status code. These codes can start with a 1, 2, 3, 4, 5 and each set of codes means something different. 
// -- Full list of HTTP status codes https://en.wikipedia.org/wiki/List_of_HTTP_status_codes.
// - Status codes work like:
// -- 1xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."
// -- 2xx: These mean 'Okay!'. Server sends these  when it's successfully res to your req.
// -- 3xx: These mean 'I can do what you want, but I have to do someting else first.' You might see this if a website has changed addresses and it has to first redirect you before it can fulfill your req.
// -- 4xx: These mean you made a mistake/error. Example error 404 meaning file not found. Your fault.
// -- 5xx: These mean the server gofed up and can't successfully respond to your req. "Thier" fault.
// HTTP Response
// - Its structure mirrors that of a HTTP req. It contains:
// -- Response line, which includes the 3 digit status code.
// -- Header, which includes further info about the server and its response.
// -- Body, which contains the text of the reponse that will fulfill the request. 
// XML
// - Stands for Extensible Markup Language.
// -  Similar to HTML uses tags between angle brackets.
// -- Difference b/w them is that XML allows use of tags that you create/define. Rather than predefined tags as in the case of HtML.
// -- Ex:
<pet>
  <name>Jeffrey</name>
  <species>Giraffe</species>
</pet>
// -- This is an api that returns info about a pet. 
// -- As long as the structure of your API's res is documented, others can use it to get info about the pets stored within the <pet> tag.  
// JSON
// - Alternative to XML.
// - Stands for Java Script Object Notation. Gets its name from the fact that its data format resembles JS objects.
{
  "pets": {
    "name": "Jeffrey",
    "species": "Giraffe"
  }
}
// The <pet> tag in JSON format. Much better no tags needed easy just like js objects.

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
// ln 1 xhr request constructor
// ln 2 is the request to codeacademy.com
// Variable xhr is shorthand for XML HTTP Request. Use this naming convention. 
// "GET" is the type of req you want to make.
// "https://www.codecademy.com/" is the URL to that you target to req whatever your specified type of HTTP req is.
// false sets it so that the excercise will wait untill it gets a res from the server before doing anything else. 

POST /codecademy/learn-http HTTP/1.1 // POST information in the request line
Host: www.codecademy.com 
Content-Type: text/html; charset=UTF-8 // header information?

Name=Eric&Age=26 // body/data to be POSTed
// Example of a POST request. 

HTTP/1.1 200 OK
Content-Type: text/xml; charset=UTF-8

<?xml version="1.0" encoding="utf-8"?>
<string xmlns="https://www.codecademy.com/">Accepted</string>
// Example of a response. 

var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";
// Example of an API key.

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
// GET request that asks for an XML document in return.
// .send() sends the .open request.

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);
// JSON object that represents the kind of info you would be returned from an HTTP req. 
// Reading (ie console.log) from demo var is just like reading JSON sent by a server. 
// Outputs { pets: { name: 'Jeffrey', species: 'Giraffe' } }. Just like a js object when the entirity of the obj is logged to console. 





// Javascript Youtube API v3 Notes

// - Link here: https://developers.google.com/youtube/v3/.
// JS Client Library:
// - https://github.com/google/google-api-javascript-client
// - Setup Below:
// -- Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// -- Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// -- Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    
    // Add code here to test out showResponse():
    
}
// This sets up basic HTML doc search.html. It includes 2 js files Google API's JavaScript client lib, and search.js (used for my code).
// Once the client lib is loaded it auto calls onClientLoad(). Which loads extra code needed to make youtube reqs.
// After this the API key is set by onYouTubeApiLoad(). 
// showResponse() is an method that takes js values and adds them to a visible element on a HTML page. Displays output basically.
// - Only used with browser figure out how to display output within discords framework. (Maybe discord's client channels are HTML pages?? Or interact similarly???)
// - This is a custom method take note of it for later use essentially logging things to the HTML page just like console.log() is used. Ie console.log('Response Shown!!!'); is basically equal to showResponse('Response Shown!!!');
// Basic seach.list
// - Added directly below above setup code. So, they are both in reality part of the same script just broken up here for notes purposes.
// - search() is defined after/below onYouTubeApiLoad().
function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'id'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}
// This is the basic request to search youtube. API call is seach method modified by .list parameter = seach.list().
// search() makes the API call. It specifies one parameter (part: 'id') which tells the API to return only the YouTube ids of the search res.
// Once API call completes onSearchResponse() is called automatically and uses its passed in response arg to essentially log said arg to HTML page w/showResponse().
// -- So, this is a way to see the API res to my initial req by logging to the html page. 
// -- Note is displayed in JSON. Google must use JSON by default for all responses.
// Ex results of search.list() in JSON:
{
  "kind": "youtube#searchListResponse",
  "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/myu0zUlnTj1ij_Os4Nsx_q51UAg\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/cN1aKDjHm9dAyFfaLLlv-lEACHE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nfs8NYg7yQM"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/BDEfjpY3JDutURWxdJdJ8calYuA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nSDgHBxUbVQ"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/H8BdzIbcQ0yfy0atECu-gA1NKp4\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "mk48xRzuNvA"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/cRQ-CErhi044oT1SUYFo9lF-w2w\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "S9bCLPwzSC0"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/dVGwcwXxPgpurbq-dZ_nh92fZe0\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "dT2owtxkU8k"
      }
    }
  ],
  "result": {
    "kind": "youtube#searchListResponse",
    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/myu0zUlnTj1ij_Os4Nsx_q51UAg\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/cN1aKDjHm9dAyFfaLLlv-lEACHE\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "nfs8NYg7yQM"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/BDEfjpY3JDutURWxdJdJ8calYuA\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "nSDgHBxUbVQ"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/H8BdzIbcQ0yfy0atECu-gA1NKp4\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "mk48xRzuNvA"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/cRQ-CErhi044oT1SUYFo9lF-w2w\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "S9bCLPwzSC0"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/dVGwcwXxPgpurbq-dZ_nh92fZe0\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "dT2owtxkU8k"
        }
      }
    ]
  }
}  
// Results of the above req to the YouTube API using search.list() to call it. As logged to the HTML page.
// Part Parameter
// - Link: https://developers.google.com/youtube/v3/getting-started#part.
// --  Listing of all the different valid part values and their explanation/descriptions. Make note of this for later discord interaction.
// - In initial search() req 'id' was used as the value for the part key. This just returns a unique id string for each result of the search as shown by the res of seach.list() above in JSON.
// - Setting 'snippet' for the part key's value will instead tell API that you'd like to retrieve info about each item in the res. Ie title and desc of videos.
{
  "kind": "youtube#searchListResponse",
  "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/1khBh3ohfCz8zjQL6MfdbORw4p0\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/MMzRgk0I4RHyLq_4niRESMHcm7Q\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nfs8NYg7yQM"
      },
      "snippet": {
        "publishedAt": "2017-04-24T17:00:05.000Z",
        "channelId": "UCwppdrjsBPAZg5_cUwQjfMQ",
        "title": "Charlie Puth - Attention [Official Video]",
        "description": "Download and Stream \"Attention\": https://Atlantic.lnk.to/AttentionID Video Directed by Emil Nava Written By: Charlie Puth and Jacob Kasher Produced By: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Charlie Puth",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/UapgvLP147XoQQjIGJxkugyp2RQ\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "nSDgHBxUbVQ"
      },
      "snippet": {
        "publishedAt": "2015-05-10T00:40:11.000Z",
        "channelId": "UC0C-w0YjGpqDXGB8IHb662A",
        "title": "Ed Sheeran - Photograph (Official Music Video)",
        "description": "Download on iTunes: http://smarturl.it/x-itunesdlx Listen on Spotify: http://smarturl.it/stream.photograph Directed by Emil Nava Subscribe to Ed's channel: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ed Sheeran",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/O0gUq6DS3b56rS2zUOjPxK7M2_o\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "mk48xRzuNvA"
      },
      "snippet": {
        "publishedAt": "2012-08-22T01:04:14.000Z",
        "channelId": "UCafVZzwtU8XUWbXGs4LYtdg",
        "title": "The Script - Hall of Fame ft. will.i.am",
        "description": "The Script's official music video for 'Hall of Fame'. Click to listen to The Script on Spotify: http://smarturl.it/TheScriptSpotify?IQid=ScriptHOF As featured on #3.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mk48xRzuNvA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mk48xRzuNvA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mk48xRzuNvA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "TheScriptVEVO",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/mW9OlbJ1-GIHMEgzyrnGz6nVCls\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "S9bCLPwzSC0"
      },
      "snippet": {
        "publishedAt": "2009-12-25T04:20:46.000Z",
        "channelId": "UC20vb-R_px4CguHzzBPhoyQ",
        "title": "Eminem - Mockingbird",
        "description": "Music video by Eminem performing Mockingbird. YouTube view counts pre-VEVO: 14297644. (C) 2004 Aftermath Entertainment/Interscope Records.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "EminemVEVO",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/sgIDfXml1uxLCMMugn9Khkpwdss\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "dT2owtxkU8k"
      },
      "snippet": {
        "publishedAt": "2017-06-21T04:00:01.000Z",
        "channelId": "UC4-TgOSMJHn-LtY4zCzbQhw",
        "title": "Shawn Mendes - There's Nothing Holdin' Me Back",
        "description": "Shawn Mendes' new single “There's Nothing Holdin' Me Back” is out now. Get it off Illuminate: iTunes: https://lnk.to/IlluminateDeluxeDL/itunes Apple Music: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dT2owtxkU8k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dT2owtxkU8k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dT2owtxkU8k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ShawnMendesVEVO",
        "liveBroadcastContent": "none"
      }
    }
  ],
  "result": {
    "kind": "youtube#searchListResponse",
    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/1khBh3ohfCz8zjQL6MfdbORw4p0\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/MMzRgk0I4RHyLq_4niRESMHcm7Q\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "nfs8NYg7yQM"
        },
        "snippet": {
          "publishedAt": "2017-04-24T17:00:05.000Z",
          "channelId": "UCwppdrjsBPAZg5_cUwQjfMQ",
          "title": "Charlie Puth - Attention [Official Video]",
          "description": "Download and Stream \"Attention\": https://Atlantic.lnk.to/AttentionID Video Directed by Emil Nava Written By: Charlie Puth and Jacob Kasher Produced By: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Charlie Puth",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/UapgvLP147XoQQjIGJxkugyp2RQ\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "nSDgHBxUbVQ"
        },
        "snippet": {
          "publishedAt": "2015-05-10T00:40:11.000Z",
          "channelId": "UC0C-w0YjGpqDXGB8IHb662A",
          "title": "Ed Sheeran - Photograph (Official Music Video)",
          "description": "Download on iTunes: http://smarturl.it/x-itunesdlx Listen on Spotify: http://smarturl.it/stream.photograph Directed by Emil Nava Subscribe to Ed's channel: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nSDgHBxUbVQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Ed Sheeran",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/O0gUq6DS3b56rS2zUOjPxK7M2_o\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "mk48xRzuNvA"
        },
        "snippet": {
          "publishedAt": "2012-08-22T01:04:14.000Z",
          "channelId": "UCafVZzwtU8XUWbXGs4LYtdg",
          "title": "The Script - Hall of Fame ft. will.i.am",
          "description": "The Script's official music video for 'Hall of Fame'. Click to listen to The Script on Spotify: http://smarturl.it/TheScriptSpotify?IQid=ScriptHOF As featured on #3.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mk48xRzuNvA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mk48xRzuNvA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mk48xRzuNvA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TheScriptVEVO",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/mW9OlbJ1-GIHMEgzyrnGz6nVCls\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "S9bCLPwzSC0"
        },
        "snippet": {
          "publishedAt": "2009-12-25T04:20:46.000Z",
          "channelId": "UC20vb-R_px4CguHzzBPhoyQ",
          "title": "Eminem - Mockingbird",
          "description": "Music video by Eminem performing Mockingbird. YouTube view counts pre-VEVO: 14297644. (C) 2004 Aftermath Entertainment/Interscope Records.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/S9bCLPwzSC0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EminemVEVO",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/sgIDfXml1uxLCMMugn9Khkpwdss\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "dT2owtxkU8k"
        },
        "snippet": {
          "publishedAt": "2017-06-21T04:00:01.000Z",
          "channelId": "UC4-TgOSMJHn-LtY4zCzbQhw",
          "title": "Shawn Mendes - There's Nothing Holdin' Me Back",
          "description": "Shawn Mendes' new single “There's Nothing Holdin' Me Back” is out now. Get it off Illuminate: iTunes: https://lnk.to/IlluminateDeluxeDL/itunes Apple Music: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dT2owtxkU8k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dT2owtxkU8k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dT2owtxkU8k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "ShawnMendesVEVO",
          "liveBroadcastContent": "none"
        }
      }
    ]
  }
}
// - Results of the seach.list() using snippet for the value of the part parameter/key. 
// All the above responses returned rather randomized titles etc. b/c with only 1 parameter defining what the API returns it essentially is told to return anything.
// To get a filtered/concise JSON obj returned simply define more valid parameters to filter out/reduce scope of the API request's response.
// All valid search parameters here: https://developers.google.com/youtube/v3/docs/search/list.
// 'q' Parameter
// - Q parameter tells API to only return results whose title, description, or keywords, match the value passed in.
// - Basically equilvalent to seach interface on Youtube.com.
// - Probs stands for Query.
// - See correct way to add params:
 var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'the floor is losing',
    });
// - For adding new params to search() make sure to format as below with commas after every key/value pair. Or else error.
{
  "kind": "youtube#searchListResponse",
  "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/50UDkuaW0fE9PDIAGlTUnKid8Ms\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/6zWPGNnTTxtwW8U4kgzH9hqVk4c\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "ZiDU4d8LfKQ"
      },
      "snippet": {
        "publishedAt": "2017-06-23T04:38:28.000Z",
        "channelId": "UCMLek7zw4H2dR5mHYXbXdGg",
        "title": "The floor is losing",
        "description": "Props to this guy for doing the hard work: https://youtu.be/XLVyMAAVFRk If you are dying to support me, check this out: https://www.patreon.com/thuglifenewshit ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Thug Life New Shit",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/364y0KJ74zhePNpZH2PiPEySZTM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "r5NoWnN2rYw"
      },
      "snippet": {
        "publishedAt": "2013-06-17T17:23:40.000Z",
        "channelId": "UCueWKYhCJAecQlGb4Mb0NQA",
        "title": "| Hit The Floor | Winning At All Costs + Losing What Matters Most",
        "description": "Follow \"Hit The Floor\" on VK: http://vk.com/jerseyluv7 \"Get ready for VH1's brand new scripted series Hit The Floor where dreams can come true, but at what ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FanClubMDC andHTF",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/SUA0rYKmIcjt9JYqB0p5jyPfnDY\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "9dcVOmEQzKA"
      },
      "snippet": {
        "publishedAt": "2009-12-25T01:07:59.000Z",
        "channelId": "UC20vb-R_px4CguHzzBPhoyQ",
        "title": "Eminem - Just Lose It",
        "description": "Music video by Eminem performing Just Lose It. (C) 2004 Aftermath Entertainment/Interscope Records.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "EminemVEVO",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/G5Lvy2XrGV5yPe2Im30r9jEVUp8\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "xMlou7Q0GRE"
      },
      "snippet": {
        "publishedAt": "2008-12-06T03:21:42.000Z",
        "channelId": "UC_SUc_SaXJ5YIHDorHg9mjg",
        "title": "The Fray - You Found Me (with lyrics) + HQ",
        "description": "You Found Me by: The Fray with lyrics. I found God on the corner of 1st and Amistad Where the West was all but won All alone, smoking his last cigarette I said, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "avagurlie",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/x2xv9az2q8gfoQXMBlm2oMjusW0\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "FKPtvXjLFXw"
      },
      "snippet": {
        "publishedAt": "2017-05-16T17:54:00.000Z",
        "channelId": "UCxmNlf-eN5RnwbysQApDrnw",
        "title": "Dachshund losing it on something on the floor",
        "description": "Here she goes again!: something is laying on the floor and this Dachshund completely loses it! She jumps out of excitement and is absolutely thrilled. If you want ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Doxie Pom",
        "liveBroadcastContent": "none"
      }
    }
  ],
  "result": {
    "kind": "youtube#searchListResponse",
    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/50UDkuaW0fE9PDIAGlTUnKid8Ms\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/6zWPGNnTTxtwW8U4kgzH9hqVk4c\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "ZiDU4d8LfKQ"
        },
        "snippet": {
          "publishedAt": "2017-06-23T04:38:28.000Z",
          "channelId": "UCMLek7zw4H2dR5mHYXbXdGg",
          "title": "The floor is losing",
          "description": "Props to this guy for doing the hard work: https://youtu.be/XLVyMAAVFRk If you are dying to support me, check this out: https://www.patreon.com/thuglifenewshit ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZiDU4d8LfKQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Thug Life New Shit",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/364y0KJ74zhePNpZH2PiPEySZTM\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "r5NoWnN2rYw"
        },
        "snippet": {
          "publishedAt": "2013-06-17T17:23:40.000Z",
          "channelId": "UCueWKYhCJAecQlGb4Mb0NQA",
          "title": "| Hit The Floor | Winning At All Costs + Losing What Matters Most",
          "description": "Follow \"Hit The Floor\" on VK: http://vk.com/jerseyluv7 \"Get ready for VH1's brand new scripted series Hit The Floor where dreams can come true, but at what ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/r5NoWnN2rYw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "FanClubMDC andHTF",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/SUA0rYKmIcjt9JYqB0p5jyPfnDY\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "9dcVOmEQzKA"
        },
        "snippet": {
          "publishedAt": "2009-12-25T01:07:59.000Z",
          "channelId": "UC20vb-R_px4CguHzzBPhoyQ",
          "title": "Eminem - Just Lose It",
          "description": "Music video by Eminem performing Just Lose It. (C) 2004 Aftermath Entertainment/Interscope Records.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9dcVOmEQzKA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "EminemVEVO",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/G5Lvy2XrGV5yPe2Im30r9jEVUp8\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "xMlou7Q0GRE"
        },
        "snippet": {
          "publishedAt": "2008-12-06T03:21:42.000Z",
          "channelId": "UC_SUc_SaXJ5YIHDorHg9mjg",
          "title": "The Fray - You Found Me (with lyrics) + HQ",
          "description": "You Found Me by: The Fray with lyrics. I found God on the corner of 1st and Amistad Where the West was all but won All alone, smoking his last cigarette I said, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/xMlou7Q0GRE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "avagurlie",
          "liveBroadcastContent": "none"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/x2xv9az2q8gfoQXMBlm2oMjusW0\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "FKPtvXjLFXw"
        },
        "snippet": {
          "publishedAt": "2017-05-16T17:54:00.000Z",
          "channelId": "UCxmNlf-eN5RnwbysQApDrnw",
          "title": "Dachshund losing it on something on the floor",
          "description": "Here she goes again!: something is laying on the floor and this Dachshund completely loses it! She jumps out of excitement and is absolutely thrilled. If you want ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/FKPtvXjLFXw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Doxie Pom",
          "liveBroadcastContent": "none"
        }
      }
    ]
  }
}
// - Results of the seach.list() using q parameter and value 'the floor is losing' to return snippet formatted (b/c part param value of snippet) results of The_Donald the floor is losing vid.
// - When using for discord setup like this to try for whatever passed in arg is serched for:
function search(query) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query,
    });
    // Send the request to the API server, and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}
// -- Place witin scope of YoutubeSearch method res to users req. 
// -- With users req string somehow (being snipped/cut off end of command string???) used to become value of query arg that is passed in to fulfill req and deliver res.
// -- Idk note this right here and refer back to later.

// Full search.js script to be used with Youtube API. Includes setup functions that are defined at top:
// - Other API parameters for calls you can make here (instead of just .list): https://developers.google.com/youtube/v3/docs/.
// --  These calls are made by modifying below code by changing the name of the API call made to gapi.client.youtube, and passing in appropriate parameters.
// - Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// - Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// - Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}
// - Search() function.
function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'the floor is losing',
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// - Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
} 