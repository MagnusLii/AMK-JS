// Defining func.
// Can be called before defining.
function doSomething() {
  console.log('doing something.');
}

// Calling func.
doSomething();

// Second way to def func, "function expression".
// Cannot be called before being defined.
const doSomethingElse = function() {
  console.log('doing something else.');
};

doSomethingElse();

// Third way to define function, using "=>".
// Also needs to be defined before calling.
const doSomethingElsest = () => {
  console.log('doing something else.');
};

doSomethingElsest();

// Parameters
function param(parameter) {
  console.log(`print ${parameter}`);
}

param('lol');
param();   // Params can be left undefined. Returns "undefined".

function sayHello(toWhom, greeting) {
  if (!greeting) {
    greeting = 'Huomenta';
  }
  console.log(`${greeting} ${toWhom}`);
}

sayHello('Mag', 'hello');
sayHello('Mikko');

function calculateSumArray(numberArray) {
  let sum = 0;
  for (const number of numberArray) {
    if (typeof number == 'number') {   // "typeof" used to test and filter type of var.
      sum = sum + number;
    }
  }
  return sum;
}

console.log(calculateSumArray([1, 2, 3, 4, '5', '6']));



// Task 6
function rollDice(sides) {
  return Math.ceil(Math.random() * sides);
}

console.log(rollDice(19));

function playDieGame(sides){
  try {
    s
  }
  const resultsElem = document.getElementById('results');
  const ulElem = document.createElement('ul');
  resultsElem.append(ulElem);
  let dievalue = -1;
  while (dievalue != sides){
    dievalue= rollDice(sides);
    console.log(dievalue);
    const liElem = document.createElement('li');
    liElem.innerText = `heiton tulos: ${dievalue}`;
    ulElem.append(liElem);
  }
}

playDieGame(prompt('gib number!'))