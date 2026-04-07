// **7.24 (Simulation: coupon collector’s problem) Coupon collector is a classic statistics 
// problem with many practical applications. The problem is to pick objects from 
// a set of objects repeatedly and find out how many picks are needed for all the 
// objects to be picked at least once. A variation of the problem is to pick cards from 
// a shuffled deck of 52 cards repeatedly and find out how many picks are needed 
// before you see one of each suit. Assume a picked card is placed back in the deck 
// before picking another. Write a program to simulate the number of picks needed 
// to get four cards from each suit and display the four cards picked (it is possible a 
// card may be picked twice). Here is a sample run of the program: 
// Queen of Spades
// 5 of Clubs
// Queen of Hearts
// 4 of Diamonds
// Number of picks: 12

let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function drawCard() {
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let rank = ranks[Math.floor(Math.random() * ranks.length)];
  return { suit, rank };
}

function collectFourOfEachSuit() {
  let count = { Hearts: 0, Diamonds: 0, Clubs: 0, Spades: 0 };
  let pickedCards = [];
  let totalPicks = 0;

while (
  count.Hearts < 4 ||
  count.Diamonds < 4 ||
  count.Clubs < 4 ||
  count.Spades < 4
) {
    let card = drawCard();
    pickedCards.push(card.rank + " of " + card.suit);
    count[card.suit]++;
    totalPicks++;
  }

  for (let i = 0; i < 4; i++) {
    console.log(pickedCards[i]);
  }
  console.log("Total cards drawn = " + totalPicks);
}

collectFourOfEachSuit();

