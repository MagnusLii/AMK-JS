const dicenum = parseInt(prompt('HOW MANY DICE!?!??!?!?!!!!!!!'));
const goal = parseInt(prompt('HAU many eyz you wants?'));
let goalachieved = 0;
let sum = 0;

for (throws = 0; throws <= 1000000; throws++) {
  for (i = 0; i < dicenum; i++) {
    sum += Math.floor((Math.random() * 6) + 1);
    if (sum == goal) {
      goalachieved++;
    }
  }
  sum = 0;
}
document.querySelector('#print').textContent = `Probability to get sum ${goal} with ${dicenum} dice is ${((goalachieved / 10000) * 100).toFixed(5)}%`