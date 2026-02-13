var count = document.querySelector('h1');
var incrementbtn = document.querySelector('#increase');
var decrementbtn = document.querySelector('#decrease');
var countValue = 0;

incrementbtn.addEventListener("click" , function(){
    countValue++
    count.innerHTML = countValue;
})
decrementbtn.addEventListener("click" , function(){
    countValue--
    count.innerHTML = countValue;
})






















