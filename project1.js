var changerColor = document.querySelector(".changecolor");
var box = document.querySelector(".box");

changerColor.addEventListener("click", function () {
  // let c1 = Math.floor(Math.random() * 255 + 1)
  // let c2 = Math.floor(Math.random() * 255 + 1)
  // let c3 = Math.floor(Math.random() * 255 + 1)

  // let randomColor = c1+c2+c3;

  function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }

  box.style.background = `linear-gradient(135deg, ${randomColor()}, ${randomColor()})`;
  changerColor.style.background = `linear-gradient(135deg, ${randomColor()}, ${randomColor()})`;
});
