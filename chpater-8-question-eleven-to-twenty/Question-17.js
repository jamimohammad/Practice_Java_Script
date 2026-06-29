//  (Shuffle rows) Write a method that shuffles the rows in a two-dimensional int
// array using the following header:
// public static void shuffle(int[][] m)
//  Write a test program that shuffles the following matrix:
// int[][] m = {{1, 2}, {3, 4}, {5, 6}, {7, 8}, {9, 10}};

function shuffle(matrix) {
    for (let i = matrix.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        let temp = matrix[i];
        matrix[i] = matrix[randomIndex];
        matrix[randomIndex] = temp;
    }
}

let m = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
];

shuffle(m);
console.log(m);