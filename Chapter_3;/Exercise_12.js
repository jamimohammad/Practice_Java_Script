// 3.12 (عدد پالیندروم)
// برنامه‌ای در جاوااسکریپت بنویسید که یک عدد سه‌رقمی از کاربر بگیرد و بررسی کند که آیا پالیندروم است یا خیر.

var a = String(prompt('enter a number'))

if (a[0] == a[2]){
    alert('The number is a palindrome')
}else{
    alert('The number is not a palindrome')
}





























var take = Number(prompt('Please Write Three Number'))

if (take === 786){
    alert('جایزه بزرگ')
}else if (take === 768 || take === 687 || take === 876){
    alert('جایزه متوسط')
}else if ( take === 165 || take === 754 || take === 982){
    alert('کوچک')
}else{
    alert('bad')
}
