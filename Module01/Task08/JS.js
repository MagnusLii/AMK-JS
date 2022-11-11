const startyear = parseInt(prompt(`gib start year`));
const endyear = parseInt(prompt(`gib end year`));
let leapyear = [];

for (let i = startyear; i < endyear; i++) {
  if (i % 400 == 0) {
    leapyear.push(i);
  } else if (i % 100 == 0) {
  } else if (i % 4 == 0) {
    leapyear.push(i);
  } else {
  }
}

const list = document.getElementById('print'); // Creates 'list' variable that is connected to element in HTML doc via 'print' ID.

for (const elem of leapyear) {
  const listelemt = document.createElement('li'); // Creates empty 'li' (list) elem into HTML under 'print' ID.
  listelemt.innerHTML = elem;   // Fetches the current item from the 'leapyear' list/array
  list.append(listelemt); // Appends the current item into the previously created 'li' element.
}