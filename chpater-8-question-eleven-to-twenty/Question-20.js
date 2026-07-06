//* 8.20  (Central city) Given a set of cities, the central city is the city that has the shortest
// total distance to all other cities. Write a program that prompts the user to enter
// the number of the cities and the locations of the cities (coordinates), and finds
// the central city and its total distance to all other cities.

// Enter the number of cities: 5
// Enter the coordinates of the cities:
// 2.5 5 5.1 3 1 9 5.4 54 5.5 2.1
// The central city is at (2.5, 5.0)
// The total distance to all other cities is 60.81

let numberofcities =Number(prompt("Enter the number of cities"));

let cities = [];

for (let i = 0; i < numberofcities; i++) {
    let input = prompt(`Enter coordinates for city ${i + 1} (x y):`);
    let parts = input.split(" ");

    let x = Number(parts[0]);
    let y = Number(parts[1]);

    cities.push([x, y]);
}

let mindistance = Infinity;
let centralcity = 0;

for (let i = 0; i < cities.length; i++) {

    let totaldistance = 0;

    for (let j = 0; j < cities.length; j++) {

        let x1 = cities[i][0];
        let y1 = cities[i][1];

        let x2 = cities[j][0];
        let y2 = cities[j][1];

        let distance = Math.sqrt((x2 - x1) * (x2 - x1) +(y2 - y1) * (y2 - y1));
            
        totaldistance += distance;
    }

    if (totaldistance < mindistance) {
        mindistance = totaldistance;
        centralcity = i;
    }
}

console.log(
    `The central city is at (${cities[centralcity][0]}, ${cities[centralcity][1]})`
);

console.log(
    `The total distance to all other cities is ${mindistance.toFixed(2)}`
);