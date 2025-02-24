const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");
const replay = document.getElementById("replay");

const min = 1;
const max = 100;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(answer); // For debugging

let attempts = 0;

myInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    myBtn.click(); // Simulate button click
  }
});


myBtn.addEventListener("click", function () {
  let guess = Number(myInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    result.textContent = `Plz! Enter a valid number between ${min} and ${max}.`;
    return;
  }

  attempts++;

  if (guess < answer) {
    result.textContent = `${guess} is Too low! Try again.`;
    myInput.value = "";
  } else if (guess > answer) {
    result.textContent = `${guess} is Too high! Try again.`;
    myInput.value = "";
  } else {
    result.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
    replay.innerHTML = `<button id="playAgain">Play Again</button>`;
    
    // Reset game when Play Again is clicked
    document.getElementById("playAgain").addEventListener("click", function () {
      answer = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(answer); // Debugging
      attempts = 0;
      result.textContent = "";
      replay.innerHTML = "";
      myInput.value = "";
    });
  }
});
