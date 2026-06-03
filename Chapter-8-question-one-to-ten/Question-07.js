// *8.7 (Points nearest to each other) Listing 8.3 gives a program that finds two points in a 
// two-dimensional space nearest to each other. Revise the program so that it finds two 
// points in a three-dimensional space nearest to each other. Use a two-dimensional 
// array to represent the points. Test the program using the following points:
// double[][] points = {{-1, 0, 3}, {-1,-1,-1}, {4,1,1},
//   {2, 0.5, 9}, {3.5, 2,-1}, {3,1.5,3}, {-1.5,4,2},
//   {5.5, 4,-0.5}};
//   The formula for computing the distance between two points (x1, y1, z1) and 
// (x2, y2, z2) is 2(x2-x1)2 +(y2-y1)2 +(z2-z1)2.

function distance3d(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) +(y2 - y1) * (y2 - y1) +(z2 - z1) * (z2 - z1));
}

let points = [
  [-1, 0, 3],
  [-1, -1, -1],
  [4, 1, 1],
  [2, 0.5, 9],
  [3.5, 2, -1],
  [3, 1.5, 3],
  [-1.5, 4, 2],
  [5.5, 4, -0.5]
];

let p1 = 0, p2 = 1;

let short = distance3d(
  points[p1][0], points[p1][1], points[p1][2],
  points[p2][0], points[p2][1], points[p2][2]
);

for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {

    let distance = distance3d(
      points[i][0], points[i][1], points[i][2],
      points[j][0], points[j][1], points[j][2]
    );

    if (distance < short) {
      p1 = i;
      p2 = j;
      short = distance;
    }
  }
}

console.log(
  "The closest two points are (" +
   points[p1][0] + ", " + points[p1][1] + ", " + points[p1][2] +
  ") and (" +
  points[p2][0] + ", " + points[p2][1] + ", " + points[p2][2] +
  ")"
);