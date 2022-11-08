const num1 = parseInt(prompt('Gib number'));
const num2 = parseInt(prompt('Gib number'));
const num3 = parseInt(prompt('Gib number'));

document.querySelector('#sum').innerHTML = `sum = ${num1 + num2 + num3};`;
document.querySelector('#product').innerHTML = `product = ${num1 * num2 *
num3};`;
document.querySelector('#average').innerHTML = `average = ${(num1 + num2 +
    num3) / 3}`;