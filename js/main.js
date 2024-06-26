let elCard1 = document.querySelector(".light1");
let elCard2 = document.querySelector(".light2");
let elCard3 = document.querySelector(".light3");
// function
function changeColor() {
  setTimeout(() => {
    elCard1.classList.add("red");
    elCard2.classList.remove("yellow");
    elCard3.classList.remove("green");
  }, 0);
  setTimeout(() => {
    elCard2.classList.add("yellow");
    elCard1.classList.remove("red");
    elCard3.classList.remove("green");
  }, 4000);
  setTimeout(() => {
    elCard1.classList.remove("red");
    elCard2.classList.remove("yellow");
    elCard3.classList.add("green");
  }, 8000);
}
changeColor();
// set interval
setInterval(() => {
  changeColor();
}, 12000);
