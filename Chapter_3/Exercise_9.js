// 3.9 (بررسی ISBN-10)
// برنامه‌ای در جاوااسکریپت بنویسید که 9 رقم اول یک شماره ISBN-10 را بگیرد و رقم دهم (Checksum) را محاسبه و شماره کامل را نمایش دهد.
let user = prompt("Enter the first 9 digits of an ISBN:");

let d1 = Number(user.charAt(0));
let d2 = Number(user.charAt(1));
let d3 = Number(user.charAt(2));
let d4 = Number(user.charAt(3));
let d5 = Number(user.charAt(4));
let d6 = Number(user.charAt(5));
let d7 = Number(user.charAt(6));
let d8 = Number(user.charAt(7));
let d9 = Number(user.charAt(8));

let sum = (d1*1 + d2*2 + d3*3 + d4*4 + d5*5 + d6*6 + d7*7 + d8*8 + d9*9) % 11;

let d10 = (sum === 10) ? "X" : sum;

console.log("The ISBN-10 number is " + user + d10);
