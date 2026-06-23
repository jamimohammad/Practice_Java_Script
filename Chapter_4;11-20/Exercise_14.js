// (Phone key pads) The international standard letter/number mapping found on the 
// telephone is shown below:
function number() {
    var userinput = prompt('Enter a Letter');
    userinput = userinput.toUpperCase();

    switch (userinput) {
        case 'A':
        case 'B':
        case 'C':
            alert('2');
            break;
        case 'D':
        case 'E':
        case 'F':
            alert('3');
            break;
        case 'G':
        case 'H':
        case 'I':
            alert('4');
            break;
        case 'J':
        case 'K':
        case 'L':
            alert('5');
            break;
        case 'M':
        case 'N':
        case 'O':
            alert('6');
            break;
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
            alert('7');
            break;
        case 'T':
        case 'U':
        case 'V':
            alert('8');
            break;
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            alert('9');
            break;
        default:
            alert('bad');
    }
}

number();
