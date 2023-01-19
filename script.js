
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

// Ajout d'évènement.
rollButton.addEventListener("click", rollDice);
holdButton.addEventListener("click", hold);
newGameButton.addEventListener("click", newGame);

//Lance le dé et affiche le résultat, 1 = manche perdue.
function rollDice() {
    const diceRoll = Math.min(Math.floor(Math.random() * 6) + 1, 6);
    if (diceRoll === 1) {
      roundScore = 0;
      document.getElementById("result").innerHTML = `You lost the round. `;
      alert('You did 1, you lost the round');
      switchPlayer();
    } else {
      roundScore += diceRoll; 
      document.getElementById("result").innerHTML = `<strong>You did ${diceRoll} !</strong>`;
      updateRoundScore();
    }
  }

//pose le score, si le score >= 100 = victoire.
 hold = _ => {
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
  //remet à 0 après le changement de joueur.
  roundScore = 0;
  result.textContent = "";
  switchPlayer();
}

//changement de joueur.
switchPlayer = _ => {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("currentPlayer").innerHTML = `<strong>Player ${currentPlayer}'s turn</strong>`;
  updateRoundScore();
}

// affichage score en cours.
updateRoundScore = _ => {
  if (currentPlayer === 1) {
    player1Round.textContent = roundScore;
  } else {
    player2Round.textContent = roundScore;
  }
}

//update et affiche le score total. 
updateTotalScore = (element, score) => {
  element.textContent = score;
}

//Affichage à 0 pour new game.
newGame = _ => {
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
  