// 3.24 (بازی: انتخاب یک کارت) برنامه‌ای در جاوااسکریپت بنویسید که یک کارت تصادفی از 52 کارت انتخاب کند و نام آن (عدد/عکس + خال) را نمایش دهد.
var take = Math.floor(Math.random() * 52);

var all = Math.floor(take / 13);   
var all1 = take % 13;               

var one=''
if (all == 0) {
    one = "Clubs";
} else if (all == 1) {
    one = "Diamonds";
} else if (all == 2) {
    one = "Hearts";
} else if (all == 3) {
    one = "Spades";
} else {
    one = "bad";
}

var rank=''
if (all1 == 0) {
    rank = "Ace";
} else if (all1 == 1) {
    rank = "2";
} else if (all1 == 2) {
    rank = "3";
} else if (all1 == 3) {
    rank = "4";
} else if (all1 == 4) {
    rank = "5";
} else if (all1 == 5) {
    rank = "6";
} else if (all1 == 6) {
    rank = "7";
} else if (all1 == 7) {
    rank = "8";
} else if (all1 == 8) {
    rank = "9";
} else if (all1 == 9) {
    rank = "10";
} else if (all1 == 10) {
    rank = "Jack";
} else if (all1 == 11) {
    rank = "Queen";
} else if (all1 == 12) {
    rank = "King";
} else {
    rank = "bad";
}
alert("The card you picked is " + rank + " of " + one);
console.log("Card number:", take, rank + " of " + one);
