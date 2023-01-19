
const player1Round = document.getElementById("player1Round");
const player1Total = document.getElementById("player1Total");
const player2Round = document.getElementById("player2Round");
const player2Total = document.getElementById("player2Total");
const rollButton = document.getElementById("roll");
const holdButton = document.getElementById("hold");
const newGameButton = document.getElementById("newGame");
const result = document.getElementById("result");

let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let roundScore = 0;

// Ajout d'évènement
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", hold);
newGameButton.addEventListener("click", newGame);

//fonction qui lance le dé et qui donne la possibilité de Roll Dice ou Hold
function rollDice() {
    const diceRoll = Math.min(Math.floor(Math.random() * 6) + 1, 6);
    if (diceRoll === 1) {
      roundScore = 0;
      alert('vous avez fait 1, vous avez perdu la manche !')
      switchPlayer();
    } else {
      roundScore += diceRoll; 
      document.getElementById("result").innerHTML = `Vous avez fait ${diceRoll}`;
      updateRoundScore();
    }
  }


function hold() {
  if (currentPlayer === 1) {
    player1Score += roundScore;
    updateTotalScore(player1Total, player1Score);
    if (player1Score >= 100) {
      alert("Player 1 wins!");
      newGame();
    }
  } else {
    player2Score += roundScore;
    updateTotalScore(player2Total, player2Score);
    if (player2Score >= 100) {
      alert("Player 2 wins!");
      newGame();
    }
  }
  roundScore = 0;
  result.textContent = "";
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateRoundScore();
}

function updateRoundScore() {
  if (currentPlayer === 1) {
    player1Round.textContent = roundScore;
  } else {
    player2Round.textContent = roundScore;
  }
}

function updateTotalScore(element, score) {
  element.textContent = score;
}

function newGame() {
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;
    roundScore = 0;
    player1Round.textContent = 0;
    player1Total.textContent = 0;
    player2Round.textContent = 0;
    player2Total.textContent = 0;
    result.textContent = 0;
  }
  


  //  changer le mot function par une fonction fléchée EMS6
  // rajouter du style CSS
  // vérifier si tout es ok