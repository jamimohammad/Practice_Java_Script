// 8.28 (Identical arrays) The two-dimensional arrays m1 and m2 are identical if they
// have the same contents. Write a method that returns true if m1 and m2 are identical, using the following header:
// public static boolean equals(int[][] m1, int[][] m2)
//  Write a test program that prompts the user to enter two 3 * 3 arrays of integers
// and displays whether the two are identical. 

let m1 = [];
let m2 = [];

for (let i = 0; i < 3; i++) {
    m1[i] = [];

    for (let j = 0; j < 3; j++) {
        m1[i][j] = Number(prompt(`m1[${i}][${j}]:`));
    }
}

for (let i = 0; i < 3; i++) {
    m2[i] = [];

    for (let j = 0; j < 3; j++) {
        m2[i][j] = Number(prompt(`m2[${i}][${j}]:`));
    }
}

function equals(m1, m2) {

    let array1 = [];
    let array2 = [];

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            array1.push(m1[i][j]);
        }
    }

    for (let i = 0; i < m2.length; i++) {
        for (let j = 0; j < m2[i].length; j++) {
            array2.push(m2[i][j]);
        }
    }

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

if (equals(m1, m2)) {
    console.log("The two arrays are identical");
} else {
    console.log("The two arrays are not identical");
}
