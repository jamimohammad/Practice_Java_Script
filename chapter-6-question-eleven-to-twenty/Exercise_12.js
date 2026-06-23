// // 6.12 (Display characters) Write a method that prints characters using the following 
// // header:
// // public static void printChars(char ch1, char ch2, int
// //  numberPerLine)
// // This method prints the characters between ch1 and ch2 with the specified num
// // bers per line. Write a test program that prints ten characters per line from 1 to Z.


function printChars(ch1, ch2, numberPerLine) {
    let start = ch1.charCodeAt(0);
    let end = ch2.charCodeAt(0);
    let count = 0;
    let line = "";

    for (let i = start; i <= end; i++) {
        line += String.fromCharCode(i) + " ";
        count++;

        if (count === numberPerLine || i === end) {
            console.log(line);
            line = "";
            count = 0;
        }
    }
}

printChars('1', 'Z', 10);
