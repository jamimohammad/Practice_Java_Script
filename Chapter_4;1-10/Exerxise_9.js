function guess () {
    let day = 0;

    let set1 = "1 3 5 7\n9 11 13 15\n17 19 21 23\n25 27 29 31";
    let set2 = "2 3 6 7\n10 11 14 15\n18 19 22 23\n26 27 30 31";
    let set3 = "4 5 6 7\n12 13 14 15\n20 21 22 23\n28 29 30 31";
    let set4 = "8 9 10 11\n12 13 14 15\n24 25 26 27\n28 29 30 31";
    let set5 = "16 17 18 19\n20 21 22 23\n24 25 26 27\n28 29 30 31";

    let answer = prompt("Is your birthday in Set1?\n" + set1 + "\nenter Y for Yes and N for No:");
    if (answer.toLowerCase() === "y") day += 1;

    answer = prompt("Is your birthday in Set2?\n" + set2 + "\nenter Y for Yes and N for No:");
    if (answer.toLowerCase() === "y") day += 2;

    answer = prompt("Is your birthday in Set3?\n" + set3 + "\nenter Y for Yes and N for No:");
    if (answer.toLowerCase() === "y") day += 4;

    answer = prompt("Is your birthday in Set4?\n" + set4 + "\nenter Y for Yes and N for No:");
    if (answer.toLowerCase() === "y") day += 8;

    answer = prompt("Is your birthday in Set5?\n" + set5 + "\nenter Y for Yes and N for No:");
    if (answer.toLowerCase() === "y") day += 16;

    return "Your birthday is " + day;
}

alert(guess());
