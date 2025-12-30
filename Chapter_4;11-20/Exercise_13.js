//(Convert letter grade to number) Write a program that prompts the user to enter a 
// letter grade A, B, C, D, or F and displays its corresponding numeric value 4, 3, 2, 
// 1, or 0. Here is a sample run:

function grade() {
    var userinput = prompt('Enter a letter');
    userinput = userinput.toUpperCase();

    switch (userinput) {
        case 'A':
            alert('4');
            break;
        case 'B':
            alert('3');
            break;
        case 'C':
            alert('2');
            break;
        case 'D':
            alert('1');
            break;
        case 'F':
            alert('0');
            break;
        default:
            alert('Bad');
    }
}

grade();
