
const name = prompt('Gib name!');
const rannum = Math.random();
console.log(rannum);

if (rannum < 0.25) {
  document.querySelector('#print').innerHTML = `${name} you are Gryffindor`
}
else if (rannum > 0.25 && rannum < 0.5) {
  document.querySelector('#print').innerHTML = `${name} you are Slytherin`
}
else if (rannum > 0.5 && rannum < 0.75) {
  document.querySelector('#print').innerHTML = `${name} you are Hufflepuff`
}
else {
  document.querySelector('#print').innerHTML = `${name} you are Ravenclaw`
}