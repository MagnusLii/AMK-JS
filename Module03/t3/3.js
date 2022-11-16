'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i<3; i++){
  const list = document.createElement('li')
  list.innerHTML = names[i]
  document.querySelector('#target').appendChild(list)
 }