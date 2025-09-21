// 3.17 (بازی: سنگ، کاغذ، قیچی)
// برنامه‌ای در جاوااسکریپت بنویسید که یک عدد تصادفی 0،1 یا 2 تولید کند (قیچی، سنگ، کاغذ) و از کاربر یک انتخاب بگیرد، سپس برنده را مشخص کند.

var now = Math.floor(Math.random() * 3)
alert(now)

var take = Number(prompt('Please Enter a Number'))


if (now === take){
    alert('Equal')
}else if (now === 0 && take === 1){
    alert('The user won')
}else if (now === 0 && take === 2){
    alert('The user failed')
}else if (now === 1 && take === 2){
    alert('The user won')
}else if (now === 2 && take === 0){
    alert('The user won')
}
else if (now === 2 && take === 1){
    alert('the user failed')
}else if (now === 1 && take === 0){
    alert('the user failed again')
}else {
    alert('bad')
}
