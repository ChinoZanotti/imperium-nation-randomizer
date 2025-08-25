// Define the suits or groups available in the deck
const suits = ["a"];

// Define the values for each suit (from 01 to 14, formatted with leading zeros)
const values = Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, "0"));

// Create an empty array to store the deck
// export let deck = [];

// Function to create the deck by combining suits and values
const createDeck = () => {
	return suits.flatMap(suit => 
		values.map(value => `images/card-${suit}-${value}.jpg`)
	);
};

// Function to reset the deck (recreate a new deck)

export const reset = () => {
	let deck = [];
	deck = createDeck();
};

// Function to draw a card from the deck
export const draw = () => {
	const card = document.getElementById("cardOnTable");
	if (deck.length > 0) {
		// Take the last card from the deck and display it
		card.src = deck.pop();
	} else {
		// If the deck is empty, show an empty card image
		card.src = "images/card-empty.jpg";
		card.classList.add("empty");
	}
};

// Function to shuffle the deck
export const shuffle = () => {
	// Randomize the order of the deck
	deck.sort(() => 0.5 - Math.random());
	const card = document.getElementById("cardOnTable");
	// Reset the card on the table to a default image
	card.src = "images/card-0.jpg";
	card.classList.remove("empty");
};