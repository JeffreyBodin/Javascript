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