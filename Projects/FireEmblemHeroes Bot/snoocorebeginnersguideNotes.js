
// Notes on the building blocks of the snoocore beginners guide bot's code below. 


var promise = reddit('/path/to/endpoint').get({
    // Arguments for this endpoint can be passed in here as a javascript object.
});
// Example on how to set up a promise variable.


reddit('/r/The_Donald/hot').get().then(function(result){
    console.log(result);
});
// This is a promise using .get method to aquire the listing (a value) of the front/first page of The_Donald. 
// Uses the .then method to acess the promised .get value.
// .then acesses promised values that can be pending (ie in the future the .get on invoking aquires the value), fulfilled (ie .get has aquired the value), or rejected (ie on invoking .get failed to aquire the value).



reddit('/api/v1/me').get().then(function(result) {
    console.log(result); 
});
// Logs my user account preferences to console.


reddit('/r/The_Donald/hot').listing().then(function(slice) {
    //limit: 10  //specifies limit of 10 children per slice of the listing. If not specified default is 25.
    console.log(slice.children); // slice.children is the front/first page of /r/The_Donald
    return slice.next(); // Uses .next() to get the next slice in the listing.

}).then(function(slice){ 
    console.log(slice.children); // This slice.children is the second page of /r/The_Donald.
});
// Uses Snoocore helper .listing
// .listing returns a listing of contents of the endpoint that was targeted. 
// In this case it was the front page of /r/The_Donald that was targeted. 
// .then function seperates the listing into a slice of the lisitng.
// .listing method is much easier to manipulate than the regular .get method  

// Helpers attact to the slice of the listing to make navigating through the listing easier. Helpers such as:
// located https://snoocore.readme.io/v3.0.0/docs/listings
// .next() to go to the next slice of the listing
// .previous to go to the previous slice of the listing
// slice.children is the children in a slice. Is the contents of the slice/ how to access the contents of the slice.
// slice.stickied is the sticked children a slice. Typically only populated in the first slice of the listing of a subreddit.
// slice.allChildren lists the stickied and non-stickied together.


reddit('/api/vote').post({
    dir: 1, // upvote
    id: 'fullname-of-a-thing'
});
// This upvotes 
// See https://www.reddit.com/dev/api#fullnames for fullnames explanation.

