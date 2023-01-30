/*This Program is a Number guess game which generate a random number between 1-100 and match it with user
  entered value. */

"use strict";

let number = Math.floor(Math.random() * 100) + 1; // Generates a random number b/w 1 and 100
let score = 100;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when no number entered
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
  // when player wins
  else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b347";

    // Updating the high score

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when number is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector("score").textContent = 0;
    }
  }

  // when number is too low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Resetting the game

document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  Number = Math.floor(Math.random() * 100) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
