
const dicenum = parseInt(prompt(`Give amount = dice?`));
let sum = 0;

for (let i = 0; i < dicenum; i++){
  let dice = Math.floor(Math.random() * 6) + 1
  sum = sum + dice
}

document.querySelector('#print').innerHTML = `Sum of dice = ${sum}`