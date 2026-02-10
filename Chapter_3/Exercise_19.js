//3.19 (محیط مثلث)
// برنامه‌ای در جاوااسکریپت بنویسید که سه ضلع یک مثلث را بگیرد و اگر معتبر بود محیط را محاسبه کند، وگرنه پیام دهد "Invalid input".

var take1 =Number(prompt('enter a number'))
var take2 =Number(prompt('enter a number'))
var take3 =Number(prompt('enter a number'))

if (take1 + take2 >= take3 && take1 + take3 >= take2 && take3 + take2 >= take1){
    alert('good')
}else {
    alert('Invalid input')
}