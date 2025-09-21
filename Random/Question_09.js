//کاربر وزن و قیمت دو بسته برنج را وارد می‌کند.
//برنامه باید بسته‌ای که قیمت بهتری دارد را نمایش دهد.
var price1 = Number(prompt('Enter price for package 1:'));
var weight1 = Number(prompt('Enter weight for package 1:'));

var price2 = Number(prompt('Enter price for package 2:'));
var weight2 = Number(prompt('Enter weight for package 2:'));

if (price1 < price2) {
    alert('Package 1 has a better price.');      
} else if (price2 < price1) {
    alert('Package 2 has a better price.');
} else {
    alert('Both packages have the same price.');
}
