
const dumblist = [
    "firstitem",
    "secitem",
    "3item"
]

for (i = 0; i<3; i++){
  if (i == 1){
    const list = document.createElement('li')
    list.innerHTML = dumblist[i]
    list.classList.add('my-item')
    document.querySelector('#target').appendChild(list)
  }
  else {
      const list = document.createElement('li')
  list.innerHTML = dumblist[i]
  document.querySelector('#target').appendChild(list)
  }
 }

