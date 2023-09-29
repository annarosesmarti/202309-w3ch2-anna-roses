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

let visibleRandomCardGame;
let hiddenRandomCardPlayer;

const compareCards = () => {
  if (visibleRandomCardGame.score < hiddenRandomCardPlayer.score) {
    return "greater";
  } else if (visibleRandomCardGame.score > hiddenRandomCardPlayer.score) {
    return "smaller";
  }
};

const checkCardsResult = (choice) => {
  if (compareCards() === choice) {
    displayText.textContent = `Congratulations, ${choice}!! 🥳 🎉`;
  } else {
    displayText.textContent = `oooh, ${choice}, try again!! 😔`;
  }
};

const startTimeout = () => {
  setTimeout(() => {
    startButton.classList.toggle("hidden");
    cardsDisplay.classList.toggle("hidden");
    displayText.classList.toggle("hidden");

    questionCardPlayer.classList.toggle("hidden");
    cardPlayerValue.classList.toggle("hidden");

    cardPlayerSuit.forEach((suit) => {
      suit.classList.toggle("hidden");
    });

    startGame();
  }, "3000");
};

const startGame = () => {
  startButton.addEventListener("click", (event) => {
    event.stopPropagation();

    visibleRandomCardGame = getRandomCard();
    hiddenRandomCardPlayer = getRandomCard();

    startButton.classList.add("hidden");
    cardsDisplay.classList.remove("hidden");
    greaterButton.classList.remove("hidden");
    smallerButton.classList.remove("hidden");

    cardGameSuit.forEach((suit) => {
      suit.textContent = `${visibleRandomCardGame.suit}`;
    });

    cardGameValue.textContent = `${visibleRandomCardGame.value}`;
  });

  greaterButton.addEventListener("click", (event) => {
    event.stopPropagation();
    questionCardPlayer.classList.add("hidden");
    cardPlayerValue.classList.remove("hidden");

    cardPlayerSuit.forEach((suit) => {
      suit.classList.remove("hidden");
    });

    cardPlayerSuit.forEach((suit) => {
      suit.textContent = `${hiddenRandomCardPlayer.suit}`;
    });

    cardPlayerValue.textContent = `${hiddenRandomCardPlayer.value}`;

    displayText.classList.remove("hidden");
    greaterButton.classList.add("hidden");
    smallerButton.classList.add("hidden");

    checkCardsResult("greater");

    startTimeout();
  });

  smallerButton.addEventListener("click", (event) => {
    event.stopPropagation();
    questionCardPlayer.classList.add("hidden");

    cardPlayerSuit.forEach((suit) => {
      suit.classList.remove("hidden");
    });

    cardPlayerValue.classList.remove("hidden");

    cardPlayerSuit.forEach((suit) => {
      suit.textContent = `${hiddenRandomCardPlayer.suit}`;
    });

    cardPlayerValue.textContent = `${hiddenRandomCardPlayer.value}`;

    displayText.classList.remove("hidden");
    greaterButton.classList.add("hidden");
    smallerButton.classList.add("hidden");

    checkCardsResult("smaller");

    startTimeout();
  });
};

startGame();
