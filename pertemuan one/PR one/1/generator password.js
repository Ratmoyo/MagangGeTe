/*var generator = require('generate-password');

var password = generator.generate({
    length: 10,
    numbers: true
});

// 'uEyMTw32v9'
console.log(password);*/

var generator = require('generate-password');

var passwords = generator.generateMultiple(5, {
    length: 8,
    numbers: true
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);