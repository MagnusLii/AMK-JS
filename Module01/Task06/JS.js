
const choice = confirm('Should I calculate the square root?');

if (choice == true){
  document.querySelector('#print').innerHTML = Math.sqrt(parseFloat(prompt('gib number')))
}
else{
  document.querySelector('#print').innerHTML = `The square root is not calculated.`
}