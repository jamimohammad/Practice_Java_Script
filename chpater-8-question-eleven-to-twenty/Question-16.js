//   *8.16 (Sort two-dimensional array) Write a method to sort a two-dimensional array
// using the following header:
// public static void sort(int m[][])
//  The method performs a primary sort on rows and a secondary sort on columns.
// For example, the following array
// {{4, 2},{1, 7},{4, 5},{1, 2},{1, 1},{4, 1}}
// will be sorted to
// {{1, 1},{1, 2},{1, 7},{4, 1},{4, 2},{4, 5}}.

function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array[i][0] > array[j][0] || (array[i][0] === array[j][0] && array[i][1] > array[j][1])
                
            ) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

let array = [
    [4, 2], 
    [1, 7],
    [4, 5],
    [1, 2],
    [1, 1],
    [4, 1]
];

sort(array);

console.log(array);
