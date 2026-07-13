// 8.27 (Strictly identical arrays) The two-dimensional arrays m1 and m2 are strictly
// identical if their corresponding elements are equal. Write a method that returns
// true if m1 and m2 are strictly identical, using the following header:
// public static boolean equals(int[][] m1, int[][] m2)
//  Write a test program that prompts the user to enter two 3 * 3 arrays of
// integers and displays whether the two are strictly identical

let list1 = [];
let list2 = [];

for (let i = 0; i < 3; i++) {
    list1[i] = [];

    for (let j = 0; j < 3; j++) {
        list1[i][j] = Number(prompt(`list1[${i}][${j}]:`));
    }
}

for (let i = 0; i < 3; i++) {
    list2[i] = [];

    for (let j = 0; j < 3; j++) {
        list2[i][j] = Number(prompt(`list2[${i}][${j}]:`));
    }
}

function equals(m1, m2) {

    for (let i = 0; i < m1.length; i++) {

        for (let j = 0; j < m1[i].length; j++) {

            if (m1[i][j] !== m2[i][j]) {
                return false;
            }

        }

    }

    return true;
}

if (equals(list1, list2)) {
    console.log("The two arrays are strictly identical");
} else {
    console.log("The two arrays are not strictly identical");
}
