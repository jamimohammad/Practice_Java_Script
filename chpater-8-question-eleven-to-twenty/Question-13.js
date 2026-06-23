// *8.13 (Locate the largest element) Write the following method that returns the location
// of the largest element in a two-dimensional array.
// public static int[] locateLargest(double[][] a)
//  The return value is a one-dimensional array that contains two elements. These
// two elements indicate the row and column indices of the largest element in the
// two-dimensional array. Write a test program that prompts the user to enter a twodimensional array and displays the location of the largest element in the array.
// Here is a sample run:
// Enter the number of rows and columns of the array: 3 4
// Enter the array:
// 23.5 35 2 10
// 4.5 3 45 3.5
// 35 44 5.5 9.6
// The location of the largest element is at (1, 2)

function locateLargest(a) {
    let row = 0;
    let column = 0;
    let largest = a[0][0];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] > largest) {
                largest = a[i][j];
                row = i;
                column = j;
            }
        }
    }

    return [row, column];
}

let rows = Number(prompt("Enter the number of rows:"));
let columns = Number(prompt("Enter the number of columns:"));

let array = [];

for (let i = 0; i < rows; i++) {
    array[i] = [];

    for (let j = 0; j < columns; j++) {
        array[i][j] = Number(prompt(`Enter element [${i}][${j}]:`));
    }
}

let location = locateLargest(array);

console.log(`The location of the largest element is at (${location[0]}, ${location[1]})`);
