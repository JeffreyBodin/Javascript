var Snoocore = require('snoocore');

// New instance associated with a single reddit account. It takes in various configuration options.
var reddit = new Snoocore({
    userAgent: 'myApp v1.0.0 by /u/waldytest', // Unique string identifying the app
    oauth: {
        type: 'script',
        key: 'un13mtSgOHvHCg', // OAuth client key (provided at reddit app)
        secret: 'ZG5Tnw8bBcUsy2_60Jt-eFfFsu0', // OAuth secret (provided at reddit app)
        username: 'waldytest', // Reddit account username used to make the reddit app. DO NOT use /u/.
        password: '', // Reddit account password.
        scope: ['identity', 'edit', 'flair', 'history', 'mysubreddits', 'privatemessages', 'read', 'save', 'submit', 'subscribe', 'vote']
        // The OAuth scopes that we need to make the calls that we want. The reddit documentation specifies the scopes needed for every call.
    }
});

reddit('/api/v1/me').get().then(function(result) { // This is all just one long chain of functions/methods.
    console.log('/u/' + result.name);
    return reddit('/r/askreddit/hot').listing(); // uses .listing to return the listing
}).then(function(slice) { // .then then slices the returned listing into slices of children 
    return slice.next(); // returns the next slice of the listing 
}).then(function(slice) {                      // slice is an object who's properties are arrays
    var firstSubmission = slice.children[0]; // slice.children is an array of objects (the objects are the reddit posts/children).
                                            // slice.children[0] is the very first submission because it is the first index of the slice.children array.
    console.log('upvoating post:'); // logs string
    console.log(firstSubmission.data.title); // logs post title
    console.log(firstSubmission.data.url); // logs post url

    return reddit('/api/vote').post( {
        dir: 1, // 1 upvote
        id: firstSubmission.kind + '_' + firstSubmission.data.id // ie t3_345jur etc..
    });
}).then(function() {
    console.log('Done! Checkout the link to see that it is really upvoted.')
});
// It works.
// Logs my username to the console first.
// upvoats top post in /r/askreddit/hot
// logs the title of the top post
// logs the url to the top post
// logs the final console.log string. 
// Refer back to in order to make my own bot.
