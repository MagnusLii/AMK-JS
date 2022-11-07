
const startyear = parseInt(prompt(`gib start year`));
const endyear = parseInt(prompt(`gib end year`));
let leapyear = [];

for (let i = startyear; i < endyear; i++){
  if (i % 400 == 0){
    leapyear.push(i)
  }
  else if (i % 100 == 0){
  }
  else if (i % 4 == 0){
    leapyear.push(i)
  }
  else {
  }
}


const list = document.getElementById('print')


for (const elem of leapyear){
  const listelemt = document.createElement('li')
  listelemt.innerHTML = elem
  list.append(listelemt)
}