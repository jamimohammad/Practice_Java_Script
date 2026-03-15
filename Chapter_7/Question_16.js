// 7.16 (Execution time) Write a program that randomly generates an array of 100,000 
// integers and a key. Estimate the execution time of invoking the linearSearch
// method in Listing 7.6. Sort the array and estimate the execution time of invok
// ing the binarySearch method in Listing 7.7. You can use the following code 
// template to obtain the execution time:
// long startTime = System.currentTimeMillis();
// perform the task;
// long endTime = System.currentTimeMillis();

let array = [];
for (let i = 0; i < 100000; i++) {
    array.push(Math.floor(Math.random() * 100000));
}

let key = Math.floor(Math.random() * 100000);

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

let startTime1 = performance.now();
linearSearch(array, key);
let endTime1 = performance.now();
let linearTime = endTime1 - startTime1;

console.log("Linear Search Time:", linearTime.toFixed(4), "ms");

array.sort((a, b) => a - b);

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

let startTime2 = performance.now();
binarySearch(array, key);
let endTime2 = performance.now();
let binaryTime = endTime2 - startTime2;

console.log("Binary Search Time:", binaryTime.toFixed(4), "ms");




   