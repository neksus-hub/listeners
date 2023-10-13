"use strict";

const input = document.getElementById("text");
const button = document.getElementById("btn");
const square = document.getElementById("square");
const btnInCircle = document.getElementById("e_btn");

console.dir(square);

button.addEventListener("click", () => {
  square.style.backgroundColor = input.value;
});

btnInCircle.classList.add("display-none");

console.log(btnInCircle);
