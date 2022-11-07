
const year = parseInt(prompt('Gib year'));


if (year % 400 == 0){
  document.querySelector('#print').innerHTML = `The year ${year} is a leapyear`
}
else if (year % 100 == 0){
  document.querySelector('#print').innerHTML = `The year ${year} is not a leapyear`
}
else if (year % 4 == 0){
  document.querySelector('#print').innerHTML = `The year ${year} is a leapyear`
}
else {
  document.querySelector('#print').innerHTML = `The year ${year} is not a leapyear`
}