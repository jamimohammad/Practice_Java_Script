// 3.7 (کاربرد مالی: واحدهای پولی)
// برنامه‌ای در جاوااسکریپت بنویسید که مقدار پول (به سنت) بگیرد و فقط مقادیر غیرصفر را به شکل درست نمایش دهد. برای یک واحد از حالت مفرد (1 dollar, 1 penny) و برای چند واحد از حالت جمع استفاده کند.

var amount = Number(prompt('enter a number'));

var cents = Math.round(amount * 100);  

var dollars = Math.floor(cents / 100);
var remainder = cents % 100;

var quarters = Math.floor(remainder / 25);
remainder = remainder % 25;

var dimes = Math.floor(remainder / 10);
remainder = remainder % 10;

var nickels = Math.floor(remainder / 5);
remainder = remainder % 5;

var penni = remainder;

var result = "";
if (dollars > 0) result += dollars + (dollars === 1 ? " dollar\n" : " dollars\n");
if (quarters > 0) result += quarters + (quarters === 1 ? " quarter\n" : " quarters\n");
if (dimes > 0) result += dimes + (dimes === 1 ? " dime\n" : " dimes\n");
if (nickels > 0) result += nickels + (nickels === 1 ? " nickel\n" : " nickels\n");
if (penni > 0) result += penni + (penni === 1 ? " penny\n" : " pennies\n");

alert(result);

