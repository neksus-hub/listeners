"use strict";

const input = document.getElementById("text");
const button = document.getElementById("btn");
const square = document.getElementById("square");

console.dir(square);

button.addEventListener("click", () => {
  square.style.backgroundColor = input.value;
});

console.log(input);
