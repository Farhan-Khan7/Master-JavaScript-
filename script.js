var box = document.querySelector(".box");
var increment = document.querySelector(".increment");
var decrement = document.querySelector(".decrement");
var h1 = document.querySelector("h1");  

increment.addEventListener("click", function(){
    h1.innerText = parseInt(h1.innerText) + 1;
});

decrement.addEventListener("click", function(){
    h1.innerText = parseInt(h1.innerText) - 1;
});