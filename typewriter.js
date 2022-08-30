"use strict";

let headlineDOMElement;
let headlineText;

let letterPos = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
  headlineDOMElement = document.querySelector("#typewriter");
  headlineText = headlineDOMElement.textContent;

  headlineDOMElement.textContent = "";

  loop();
}

function loop() {
  //make all the "fun"
  headlineDOMElement.textContent += headlineText[letterPos];

  letterPos++;

  if (letterPos < headlineText.length) {
    setTimeout(loop, 100);
  } else {
    finish();
  }
}

function finish() {
  console.log("Yay! We did it!!!");
}
