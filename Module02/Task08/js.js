/*Write a function called concat(), which receives an array of strings as a
parameter. The function returns a string formed by concatenating the elements
of the array. (2p)

   Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
   Do not use array.join() function
   You can hardcode the array, no need for prompt().
   Print the result to HTML document.*/

let strlist = ['Jonny', 'Deedee', 'Joey', 'Marky'];

function concat(array){
  let modifiedvar = ''
  for (i = 0; i<array.length; i++){
    modifiedvar = modifiedvar + array[i];
  }
  return modifiedvar;
}

document.querySelector('#p').textContent = concat(strlist);