// **6.25 (Convert milliseconds to hours, minutes, and seconds) Write a method that con
// verts milliseconds to hours, minutes, and seconds using the following header:
// public static String convertMillis(long millis)
// The method returns a string as hours:minutes:seconds. For example, 
// convertMillis(5500) returns a string 0:0:5, convertMillis(100000) returns 
// a string 0:1:40, and convertMillis(555550000) returns a string 154:19:10.

function convertMillis(millis) {
    
    let totalsecond = millis / 1000;
    let hours = Math.floor(totalsecond / 3600);
    let remainingsecond = totalsecond % 3600;
    let minutes = Math.floor(remainingsecond / 60);
    let seconds = Math.floor(remainingsecond % 60);

    return hours + ':' + minutes + ':' + seconds;
}

let userInput = Number(prompt('Enter milliseconds to convert to hours:minutes:seconds'));
console.log(convertMillis(userInput));
