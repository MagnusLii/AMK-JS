
function over(){
  document.querySelector('#target').src = "img/picB.jpg"
}
function off(){
  document.querySelector('#target').src = "img/picA.jpg"
}

document.querySelector('#trigger').addEventListener('mouseover', over)
document.querySelector('#trigger').addEventListener('mouseleave', off)