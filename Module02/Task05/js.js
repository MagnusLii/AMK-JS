/*Write a program that prompts the user for numbers. When the user enters one
of the numbers he previously entered, the program will announce that the number
has already been given and stops its operation and then prints all the given
numbers to the console in ascending order. (2p)*/

let usrprompt = 0;
let numbers = [];

while (usrprompt == 0) {
  let int = parseInt(prompt(`Give number.`));
  if (numbers.includes(int)){
    alert('THIS NUMBER EXISTSAJHASJKJKLHJKL.-___!!!!!!!');
    usrprompt = 1;
  }
  else{
    numbers.push(int);
  }
}

numbers.sort(function(a, b){return a-b});

for (i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}