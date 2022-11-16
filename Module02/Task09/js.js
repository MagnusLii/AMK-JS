/*Write a function called even(), which receives an array containing numbers as
a parameter. The function returns a second (usually smaller) array which has
even numbers of the original array. The function must not make changes to the
original table. (3p)

    Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
    Print both the original array and the new array to the console in the main program after you have called the function.
    You can hardcode the array, no need for prompt().*/


const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function even(array){
  let evennumbers = []
  for (i = 0; i<array.length; i++){
    if (array[i] % 2 == 0){
      evennumbers.push(array[i])
    }
  }
  return evennumbers
}

console.log(numarray)
console.log(even(numarray))