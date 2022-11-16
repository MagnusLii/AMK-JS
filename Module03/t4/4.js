'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let i = 0; i<3; i++){
  const list = document.createElement('option')
  list.innerHTML = students[i].name
  list.value = students[i].id
  document.querySelector('#target').appendChild(list)
 }