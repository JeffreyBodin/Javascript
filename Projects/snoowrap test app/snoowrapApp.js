require('dotenv').config({path: '/C:/Users/jeffr/Documents/GitHub/Javascript/Projects/snoowrap test app/config.env'});
const snoowrap = require('snoowrap');


const r = new snoowrap({
    userAgent: 'myApp v1.0.0 by /u/waldytest',
    clientId: process.env.ENVCLIENT_ID,
    clientSecret: process.env.ENVCLIENT_SECRET,
    refreshToken: process.env.ENVREFRESH_TOKEN,
});

// Submitting a link to a subreddit
r.getSubreddit('subreddit example').submitLink({
  title: 'Post title',
  url: 'https://i.imgur.com/n5iOc72.gifv'
});


// Printing a list of the titles on a thread
r.getHot().map(post => post.title).then(console.log);
