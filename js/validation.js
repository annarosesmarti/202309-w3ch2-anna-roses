const startButton = document.querySelector(".button-start");
const greaterButton = document.querySelector(".button-greater");
const smallerButton = document.querySelector(".button-smaller");
const restartButton = document.querySelector(".button-restart");

const cardsDisplay = document.querySelector(".cards-container");

const cardGameSuit = document.querySelectorAll(".card-game-suit");
const cardGameValue = document.querySelector(".card-game-value");

const cardPlayerSuit = document.querySelectorAll(".card-player-suit");
const cardPlayerValue = document.querySelector(".card-player-value");
const questionCardPlayer = document.querySelector(".card-player-question-mark");

const displayText = document.querySelector(".display-text");

const visibleRandomCardGame = getRandomCard();
const hiddenRandomCardPlayer = getRandomCard();

startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  cardsDisplay.classList.remove("hidden");
  greaterButton.classList.remove("hidden");
  smallerButton.classList.remove("hidden");

  cardGameSuit.forEach((suit) => {
    suit.textContent = `${visibleRandomCardGame.suit}`;
  });

  cardGameValue.textContent = `${visibleRandomCardGame.value}`;
});

greaterButton.addEventListener("click", () => {
  questionCardPlayer.classList.add("hidden");
  cardPlayerValue.classList.remove("hidden");

  cardPlayerSuit.forEach((suit) => {
    suit.classList.remove("hidden");
  });

  cardPlayerSuit.forEach((suit) => {
    suit.textContent = `${hiddenRandomCardPlayer.suit}`;
  });

  cardPlayerValue.textContent = `${hiddenRandomCardPlayer.value}`;

  checkCardsResult("greater");
});

smallerButton.addEventListener("click", () => {
  questionCardPlayer.classList.add("hidden");

  cardPlayerSuit.forEach((suit) => {
    suit.classList.remove("hidden");
  });

  cardPlayerValue.classList.remove("hidden");

  cardPlayerSuit.forEach((suit) => {
    suit.textContent = `${hiddenRandomCardPlayer.suit}`;
  });

  cardPlayerValue.textContent = `${hiddenRandomCardPlayer.value}`;

  checkCardsResult("smaller");
});
