const cardSuits = ["♠️", "♣️", "♥️", "♦️"];
const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

const generateDeck = () => {
  const deckOfCards = [];
  cardSuits.forEach((cardSuit) => {
    cardValues.forEach((cardValue, cardValuePosition) => {
      deckOfCards.push({
        suit: cardSuit,
        value: cardValue,
        score: cardValuePosition,
      });
    });
  });
  return deckOfCards;
};

const getRandomCard = () =>
  generateDeck()[Math.floor(Math.random() * generateDeck().length)];

const startButton = document.querySelector(".button-start");
const greaterButton = document.querySelector(".button-greater");
const smallerButton = document.querySelector(".button-smaller");

const cardsDisplay = document.querySelector(".cards-container");
const suitCardGameTop = document.querySelector(".card-game-suit-top");
const suitCardGameBottom = document.querySelector(".card-game-suit-bottom");
const valueCardGame = document.querySelector(".card-game-value");

let visibleRandomCardGame;
let hiddenRandomCardPlayer;

const clickStartButton = () => {
  startButton.addEventListener("click", (event) => {
    visibleRandomCardGame = getRandomCard();
    hiddenRandomCardPlayer = getRandomCard();

    startButton.classList.add("hidden");
    cardsDisplay.classList.remove("hidden");
    greaterButton.classList.remove("hidden");
    smallerButton.classList.remove("hidden");

    suitCardGameTop.textContent = `${visibleRandomCardGame.suit}`;
    suitCardGameBottom.textContent = `${visibleRandomCardGame.suit}`;
    valueCardGame.textContent = `${visibleRandomCardGame.value}`;
  });
};

clickStartButton();

const suitCardPlayerTop = document.querySelector(".card-player-suit-top");
const suitCardPlayerBottom = document.querySelector(".card-player-suit-bottom");
const valueCardPlayer = document.querySelector(".card-player-value");
const questionCardPlayer = document.querySelector(".card-player-question-mark");
const displayText = document.querySelector(".display-text");

const clickGreaterButton = () => {
  greaterButton.addEventListener("click", (event) => {
    clickStartButton();

    questionCardPlayer.classList.add("hidden");
    suitCardPlayerTop.classList.remove("hidden");
    suitCardPlayerBottom.classList.remove("hidden");
    valueCardPlayer.classList.remove("hidden");
    suitCardPlayerTop.textContent = `${hiddenRandomCardPlayer.suit}`;
    suitCardPlayerBottom.textContent = `${hiddenRandomCardPlayer.suit}`;
    valueCardPlayer.textContent = `${hiddenRandomCardPlayer.value}`;
    displayText.classList.remove("hidden");

    if (visibleRandomCardGame.score < hiddenRandomCardPlayer.score) {
      displayText.textContent = "Greater!! 🥳 🎉";
    } else {
      displayText.textContent = "Smaller!! 😔";
    }
  });
};

clickGreaterButton();
