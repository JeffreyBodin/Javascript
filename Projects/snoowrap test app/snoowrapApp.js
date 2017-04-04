require('dotenv').config();
const snoowrap = require('snoowrap');
// '/C:/Users/jeffr/Documents/GitHub/Javascript/Projects/snoowrap test app/config.env'
// 'C:\Users\jeffr\Documents\GitHub\Javascript\Projects\snoowrap test app'
// {path: '/C:/Users/jeffr/Documents/GitHub/Javascript/Projects/snoowrap test app'}

const r = new snoowrap({
    userAgent: 'myApp v1.0.0 by /u/waldytest',
    clientId: ,
    clientSecret: ,
    refreshToken: ,
}); 

/*
const r = new snoowrap({
  userAgent: 'myApp v1.0.0 by /u/waldytest',
  clientId: process.env.ENVCLIENTID,
  clientSecret: process.env.ENVCLIENTSECRET,
  username: process.env.WTESTUSERNAME,
  password: process.env.WTESTPASSWORD,
});
*/

// Printing a list of the titles on a thread
r.getHot('The_Donald').map(post => post.title).then(console.log);
