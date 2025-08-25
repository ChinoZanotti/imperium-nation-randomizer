// Define the suits or groups available in the deck
const suits = ["a"];

// Define the values for each suit (from 01 to 14, formatted with leading zeros)
const values = Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, "0"));

export const Deck = [];

for (let suit of suits) {
  for (let value of values) {
    Deck.push(`/cards/card-${suit}-${value}.jpg`);
  }
}

// Fisher-Yates shuffle
export function shuffleDeck(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}