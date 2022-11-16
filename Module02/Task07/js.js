/*Modify the function above so that it gets the number of sides on the dice as
a parameter. With the modified function you can for example roll a 21-sided
role-playing dice. The difference to the last exercise is that the dice rolling
in the main program continues until the program gets the maximum number on
the dice, which is asked from the user at the beginning. (2p)*/

let roll = -1
const dicesides = parseInt(prompt('num of sides'))

function rollDice(sides) {
  return Math.ceil(Math.random(sides) * sides);
}

const list = document.getElementById('list');

while (roll != dicesides){
  roll = rollDice(dicesides)
  const listelemt = document.createElement('li');
  listelemt.innerHTML = roll;
  list.append(listelemt);
}