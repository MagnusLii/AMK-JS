/*Write a function that returns a random dice roll between 1 and 6.
 The function should not have any parameters. Write a main program that rolls
  the dice until the result is 6. The main program should print out the result
   of each roll in an unordered list (<ul>). (2p)*/

let roll = -1

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

const list = document.getElementById('list');

while (roll != 6){
  roll = rollDice()
  const listelemt = document.createElement('li');
  listelemt.innerHTML = roll;
  list.append(listelemt);
}
