var Snoocore = require('snoocore');

// Our new instance associated with a single account.
// It takes in various configuration options.
var reddit = new Snoocore({
    userAgent: 'myApp v1.0.0 by /u/waldytest', // Unique string identifying the app
    oauth: {
        type: 'script',
        key: 'un13mtSgOHvHCg', // OAuth client key (provided at reddit app)
        secret: 'ZG5Tnw8bBcUsy2_60Jt-eFfFsu0', // OAuth secret (provided at reddit app)
        username: 'waldytest', // Reddit username used to make the reddit app
        password: '', // Reddit password for the username
        scope: ['identity', 'read', 'vote', 'history', 'mysubreddits', 'privatemessages']
        // The Oauth scopes that we need to make the calls that we want. 
        // The reddit documentation will specify which scope is needed for every call.
    }
});

var promise = reddit('/path/to/endpoint').get({
// Arguments for this endpoint can be passed in here as a javascript object.
});


// Logs my user account preferences to console. Currently commented out.
reddit('/api/v1/me').get().then(function(result) {
    //console.log(result);
});


reddit('/r/The_Donald/hot').listing().then(function(slice) {
    
    // This is the front page of /r/The_Donald. Also the first page.
    // slice.children contains the contents of the page
    console.log(slice.children);

    // Get a promise for the next slice in this listing (the next page!).
    return slice.next();

}).then(function(slice){
    
    // This is the second page of /r/The_Donald.
    console.log(slice.children);
});
// Uses Snoocore helper .listing
// listing returns a slice for a listing that has various helpers attached to it.