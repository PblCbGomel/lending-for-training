//var elem1; - no use

let elem2;
const elem3 = "";

//type: number, string, Bigint, Symbol, null, undefined, boolean, object. typeof
/* */

elem2 = document.getElementById("text");
//elem2.innerHTML = "123123";

//elem2 = document.querySelector("#id");
//elem2 = document.querySelectorAll("#id");

elem2.style.color = "blue";
console.log(elem2.classList.toggle("text4"), elem2.classList);

//=======================================бургер

const burgerWrapper = document.querySelector(".burger-wrapper");

function toggleActive() {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
}

burgerWrapper.addEventListener("click", toggleActive);

const allNavLi = document.querySelectorAll(".nav-li");

allNavLi.forEach((elem) => {
  elem.addEventListener("click", toggleActive);
});
