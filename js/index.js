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

const compareCards = () => {
  if (visibleRandomCardGame.score < hiddenRandomCardPlayer.score) {
    return "greater";
  } else if (visibleRandomCardGame.score > hiddenRandomCardPlayer.score) {
    return "smaller";
  }
};

const checkCardsResult = (choice) => {
  if (compareCards() === choice) {
    displayText.textContent = "Congratulations, your guess was right!! 🥳 🎉";
  } else {
    displayText.textContent = "oooh, try again!! 😔";
  }
  displayText.classList.remove("hidden");
};
