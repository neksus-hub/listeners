"use strict";

const input = document.getElementById("text");
const button = document.getElementById("btn");
const square = document.getElementById("square");
const btnInCircle = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circleHeight = document.getElementById("circle").offsetHeight;
const circleWidth = document.getElementById("circle").offsetWidth;
const squareHeight = document.getElementById("square").offsetHeight;
const squareWidth = document.getElementById("square").offsetWidth;

button.addEventListener("click", () => {
  square.style.backgroundColor = input.value;
});

btnInCircle.classList.add("display-none");

const WidthAndHeight = function () {
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
};

range.addEventListener("input", function (event) {
  rangeSpan.textContent = event.target.value;
  WidthAndHeight();
});
