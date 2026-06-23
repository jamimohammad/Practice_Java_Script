//(Student major and status) Write a program that prompts the user to enter two 
// characters and displays the major and status represented in the characters. The first 
// character indicates the major and the second is number character 1, 2, 3, 4, which 
// indicates whether a student is a freshman, sophomore, junior, or senior. Suppose 
// the following chracters are used to denote the majors:
//  M: Mathematics
//  C: Computer Science
//  I: Information Technology

function getstudentinfo() {
    let letter = prompt('Enter a letter').toUpperCase();
    let number = Number(prompt('Enter a number'));

    let major = '';
    let status = '';

    if (letter === 'M') {
        major = 'Mathematics';
    } else if (letter === 'C') {
        major = 'Computer Science';
    } else if (letter === 'I') {
        major = 'Information Technology';
    } else {
        return 'Invalid major';
    }

    if (number === 1) {
        status = 'Freshman';
    } else if (number === 2) {
        status = 'Sophomore';
    } else if (number === 3) {
        status = 'Junior';
    } else if (number === 4) {
        status = 'Senior';
    } else {
        return 'Invalid status';
    }

    return major + ' ' + status;
}

alert(getstudentinfo());


