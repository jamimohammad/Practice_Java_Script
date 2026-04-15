// *7.29 (Game: pick four cards) Write a program that picks four cards from a deck of 52 
// cards and computes their sum. An Ace, King, Queen, and Jack represent 1, 13, 
// 12, and 11, respectively. Your program should display the number of picks that 
// yields the sum of 24.

let cards = [];

for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < 4; j++) {
        cards.push(i);
    }
}

for (let i = 0; i < 4; i++) {
    cards.push(1);
    cards.push(11);
    cards.push(12);
    cards.push(13);
}

function pickFourCards(del) {
    let picked = [];
    let copy = del.slice();
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * copy.length);
        picked.push(copy[index]);
        copy.splice(index, 1);
    }
    return picked;
}

let count = 0;
let tries = 10000;

for (let i = 0; i < tries; i++) {
    let four = pickFourCards(cards);
    let sum = 0;
    for (let i = 0; i < four.length; i++) {
        sum += four[i];
    } if (sum === 24) {
        count++;
    }
}

console.log(count)
