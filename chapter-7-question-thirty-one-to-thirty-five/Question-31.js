// **7.31 (Merge two sorted lists) Write the following method that merges two sorted lists 
// into a new sorted list.
// Consecutive four
// public static int[] merge(int[] list1, int[] list2)
// Implement the method in a way that takes at most list1.length + list2.
// length comparisons. Write a test program that prompts the user to enter two 
// sorted lists and displays the merged list. Here is a sample run. Note that the first 
// number in the input indicates the number of the elements in the list. This number 
// is not part of the list.
// Enter list1: 5 1 5 16 61 111
// Enter list2: 4 2 4 5 6
// The merged list is 1 2 4 5 5 6 16 61 111

let input1 = prompt("Enter list1");
let arr1 = input1.split(" ").map(Number);

let size1 = arr1[0];
let firstlist = arr1.slice(1);

let input2 = prompt("Enter list2");
let arr2 = input2.split(" ").map(Number);

let size2 = arr2[0];
let secondlist = arr2.slice(1);

function merge(list1, list2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            result.push(list1[i]);
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return result;
}

let mergedList = merge(firstlist, secondlist);

console.log(mergedList.join(" "));
