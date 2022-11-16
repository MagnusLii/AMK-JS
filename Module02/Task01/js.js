/*Write a program that prompts the user for five numbers and prints them in the
reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.*/

numlist = []

for (i = 0; i<5; i++){
  numlist.unshift(prompt('Gib number.'))
}

for (i =0; i<numlist.length; i++){
  console.log(numlist[i])
}