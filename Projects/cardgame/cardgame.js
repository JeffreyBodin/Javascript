// @ts-check

/* A "standard" deck of playing cards consists of 52 Cards in each of the 4 suits of Spades, Hearts, Diamonds, and Clubs. 
Each suit contains 13 cards: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King. */

// Array of fifty-two cards.
var deckOfCards = [
    {card: 'Ace of Spades', cardValue: 1},
    {card: 'Two of Spades', cardValue: 2},
    {card: 'Three of Spades', cardValue: 3},
    {card: 'Four of Spades', cardValue: 4},
    {card: 'Five of Spades', cardValue: 5},
    {card: 'Six of Spades', cardValue: 6},
    {card: 'Seven of Spades', cardValue: 7},
    {card: 'Eight of Spades', cardValue: 8},
    {card: 'Nine of Spades', cardValue: 9},
    {card: 'Ten of Spades', cardValue: 10},
    {card: 'Jack of Spades', cardValue: 11},
    {card: 'Queen of Spades', cardValue: 12},
    {card: 'King of Spades', cardValue: 13},
    {card: 'Ace of Hearts', cardValue: 1},
    {card: 'Two of Hearts', cardValue: 2},
    {card: 'Three of Hearts', cardValue: 3},
    {card: 'Four of Hearts', cardValue: 4},
    {card: 'Five of Hearts', cardValue: 5},
    {card: 'Six of Hearts', cardValue: 6},
    {card: 'Seven of Hearts', cardValue: 7},
    {card: 'Eight of Hearts', cardValue: 8},
    {card: 'Nine of Hearts', cardValue: 9},
    {card: 'Ten of Hearts', cardValue: 10},
    {card: 'Jack of Hearts', cardValue: 11},
    {card: 'Queen of Hearts', cardValue: 12},
    {card: 'King of Hearts', cardValue: 13},
    {card: 'Ace of Diamonds', cardValue: 1},
    {card: 'Two of Diamonds', cardValue: 2},
    {card: 'Three of Diamonds', cardValue: 3},
    {card: 'Four of Diamonds', cardValue: 4},
    {card: 'Five of Diamonds', cardValue: 5},
    {card: 'Six of Diamonds', cardValue: 6},
    {card: 'Seven of Diamonds', cardValue: 7},
    {card: 'Eight of Diamonds', cardValue: 8},
    {card: 'Nine of Diamonds', cardValue: 9},
    {card: 'Ten of Diamonds', cardValue: 10},
    {card: 'Jack of Diamonds', cardValue: 11},
    {card: 'Queen of Diamonds', cardValue: 12},
    {card: 'King of Diamonds', cardValue: 13},
    {card: 'Ace of Clubs', cardValue: 1},
    {card: 'Two of Clubs', cardValue: 2},
    {card: 'Three of Clubs', cardValue: 3},
    {card: 'Four of Clubs', cardValue: 4},
    {card: 'Five of Clubs', cardValue: 5},
    {card: 'Six of Clubs', cardValue: 6},
    {card: 'Seven of Clubs', cardValue: 7},
    {card: 'Eight of Clubs', cardValue: 8},
    {card: 'Nine of Clubs', cardValue: 9},
    {card: 'Ten of Clubs', cardValue: 10},
    {card: 'Jack of Clubs', cardValue: 11},
    {card: 'Queen of Clubs', cardValue: 12},
    {card: 'King of Clubs', cardValue: 13},
    ];

// Logs each object's cardValue property to the console.
deckOfCards.forEach(function(object){
    console.log(object.cardValue);
})


// compareFunctions for use with the .sort() method.

// Sorts by the difference of two card values in ascending order. 
function sortByCardValue(a, b) {
    return a.cardValue - b.cardValue;
}
// Sorts by the difference of two card string length values in ascending order.
function sortByCardName(a, b) {
    var nameA = a.card.length;
    var nameB = b.card.length;
    return nameA - nameB;
}

// This one was successful. Shuffles the deck and logs to console.
console.log(deckOfCards.sort());
// This was not.
deckOfCards.sort(sortByCardValue).then(sort(sortByCardName)).then(console.log);