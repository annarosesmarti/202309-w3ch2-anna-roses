const cardSuits = ["♠️", "♣️", "♥️", "♦️"];
const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "A",
];

const deckGenerator = () => {
  const cardsDeck = [];
  cardSuits.forEach((suits) => {
    cardNumbers.forEach((numbers, position) => {
      cardsDeck.push({ suits: suits, numbers: numbers, value: position });
    });
  });
  return cardsDeck;
};

const randomCard = () =>
  deckGenerator()[Math.floor(Math.random() * deckGenerator().length)];

console.log(randomCard());
