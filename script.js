"use strict";

const input = document.getElementById("text");
const button = document.getElementById("btn");
const square = document.getElementById("square");
const btnInCircle = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");

console.dir(square);

button.addEventListener("click", () => {
  square.style.backgroundColor = input.value;
});

const logger = function (event) {
  rangeSpan.textContent = event.target.value;
};

btnInCircle.classList.add("display-none");
range.addEventListener("input", logger);

console.log(btnInCircle);
