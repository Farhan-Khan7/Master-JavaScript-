var colorBox = document.querySelector("#box");
var changeColorBtn = document.querySelector("#btn")


changeColorBtn.addEventListener("click", function(){
    var color1 = Math.floor(Math.random()*255)
    var color2 = Math.floor(Math.random()*255)
    var color3 = Math.floor(Math.random()*255)
    var color4 = Math.floor(Math.random()*255)
    var color5 = Math.floor(Math.random()*255)
    var color6 = Math.floor(Math.random()*255)


    colorBox.style.backgroundImage = `linear-gradient(rgb(${color1},${color2},${color3}) , rgb(${color4},${color5},${color6}))`
    
    console.log(color1,color2,color3)

})