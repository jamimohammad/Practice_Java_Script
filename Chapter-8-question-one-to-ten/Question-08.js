// **8.8 (All closest pairs of points) Revise Listing 8.3, FindNearestPoints.java, to
// display all closest pairs of points with the same minimum distance. Here is
// a sample run:
// Enter the number of points: 8
// Enter 8 points: 0 0 1 1 -1 -1 2 2 -2 -2 -3 -3 -4 -4 5 5
// The closest two points are (0.0, 0.0) and (1.0, 1.0)
// The closest two points are (0.0, 0.0) and (-1.0, -1.0)
// The closest two points are (1.0, 1.0) and (2.0, 2.0)
// The closest two points are (-1.0, -1.0) and (-2.0, -2.0)
// The closest two points are (-2.0, -2.0) and (-3.0, -3.0)
// The closest two points are (-3.0, -3.0) and (-4.0, -4.0)
// Their distance is 1.4142135623730951

let numberOfPoints = Number(prompt("Enter the number of points:"));
let data = prompt(`Enter ${numberOfPoints} points:`).split(" ").map(Number);
  
let points = [];

for (let i = 0; i < data.length; i += 2) {
  points.push([data[i], data[i + 1]]);
}

let minDistance = Math.sqrt(
  (points[1][0] - points[0][0]) ** 2 +
  (points[1][1] - points[0][1]) ** 2
);

let pairs = [];

for (let i = 0; i < points.length - 1; i++) {
  for (let j = i + 1; j < points.length; j++) {

    let distance = Math.sqrt(
      (points[j][0] - points[i][0]) ** 2 +
      (points[j][1] - points[i][1]) ** 2
    );

    if (distance < minDistance) {
      minDistance = distance;
      pairs = [[i, j]];
    } else if (distance === minDistance) {
      pairs.push([i, j]);
    }
  }
}

if (pairs.length === 0) {
  pairs.push([0, 1]);
}

for (let pair of pairs) {
  console.log(
    `The closest two points are (${points[pair[0]][0]}, ${points[pair[0]][1]}) and (${points[pair[1]][0]}, ${points[pair[1]][1]})`
  );
}

console.log("Their distance is " + minDistance);