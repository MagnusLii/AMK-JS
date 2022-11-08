'use strict';
console.log('Howdy partner!');
alert('Hi from here too!');
let name = prompt('gib name');
document.querySelector('#target').innerHTML = 'Good morning, ' + name + '!';
let x = prompt('Enter int:');
x = parseInt(x);
document.querySelector('#test').innerHTML = x;