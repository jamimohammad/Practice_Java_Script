// **6.24 (Display current date and time) Listing 2.7, ShowCurrentTime.java, displays the 
// current time. Improve this example to display the current date and time. The cal
// endar example in Listing 6.12, PrintCalendar.java, should give you some ideas on 
// how to find the year, month, and day.

function showCurrentDateTime() {
    const now = new Date();
    return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " "
        + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

console.log(showCurrentDateTime());
