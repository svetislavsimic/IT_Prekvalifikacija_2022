"use strict";

// Selecting elements
const playerEl = document.querySelector(".player");
const scoreEl = document.querySelector("#score--0");
const current0El = document.getElementById("current--0");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");

let scores, currentScore;
currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `kockica-${dice}.png`;
  currentScore += dice;
  document.getElementById(`current--0`).textContent = dice;
  document.getElementById(`score--0`).textContent = currentScore;
});
