require('dotenv').config();
const snoowrap = require('snoowrap');


const r = new snoowrap({
    userAgent: 'myApp v1.0.0 by /u/waldytest',
    clientId: '',
    clientSecret: '',
    username: 'waldytest',
})