//(Order three cities) Write a program that prompts the user to enter three cities and 
// displays them in ascending order. Here is a sample run:

function all() {
    var city = prompt('Enter the first city:');
    var city1 = prompt('Enter the second city:');
    var city2 = prompt('Enter the third city:');

    city = city.toUpperCase();
    city1 = city1.toUpperCase();
    city2 = city2.toUpperCase();

    var allCities = [city, city1, city2];

    allCities.sort();

    alert(allCities);
}

all();
