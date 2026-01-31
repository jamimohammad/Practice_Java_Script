// 6.39 (Geometry: point position) Programming Exercise 3.32 shows how to test whether 
// a point is on the left side of a directed line, on the right, or on the same line. Write
// the methods with the following headers:
// /** Return true if point (x2, y2) is on the left side of the 
//  *  directed line from (x0, y0) to (x1, y1) */ 
// public static boolean leftOfTheLine(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// /** Return true if point (x2, y2) is on the same
//  *  line from (x0, y0) to (x1, y1) */ 
// public static boolean onTheSameLine(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// /** Return true if point (x2, y2) is on the
//  *  line segment from (x0, y0) to (x1, y1) */ 
// public static boolean onTheLineSegment(double x0, double y0, 
// double x1, double y1, double x2, double y2)
// Write a program that prompts the user to enter the three points for p0, p1, and p2
// and displays whether p2 is on the left of the line from p0 to p1, right, the same 
// line, or on the line segment. Here are some sample runs:
// Enter three points for p0, p1, and p2: 1 1 2 2 1.5 1.5
// (1.5, 1.5) is on the line segment from (1.0, 1.0) to (2.0, 2.0)
// Enter three points for p0, p1, and p2: 1 1 2 2 3 3
// (3.0, 3.0) is on the same line from (1.0, 1.0) to (2.0, 2.0)    
// Enter three points for p0, p1, and p2: 1 1 2 2 1 1.5
// (1.0, 1.5) is on the left side of the line 
//   from (1.0, 1.0) to (2.0, 2.0)
// Enter three points for p0, p1, and p2: 1 1 2 2 1 -1
// (1.0, -1.0) is on the right side of the line 
//   from (1.0, 1.0) to (2.0, 2.0)

function leftOfTheLine(x0, y0, x1, y1, x2, y2) {
    let position = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    return position > 0;
}

function onTheSameLine(x0, y0, x1, y1, x2, y2) {
    let position = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    return position === 0;
}

function onTheLineSegment(x0, y0, x1, y1, x2, y2) {
    if (!onTheSameLine(x0, y0, x1, y1, x2, y2)) {
        return false;
    }

    return (x2 >= Math.min(x0, x1) && x2 <= Math.max(x0, x1) && y2 >= Math.min(y0, y1) && y2 <= Math.max(y0, y1));
}

var x0 = Number(prompt('Enter x0'));
var y0 = Number(prompt('Enter y0'));

var x1 = Number(prompt('Enter x1'));
var y1 = Number(prompt('Enter y1'));

var x2 = Number(prompt('Enter x2'));
var y2 = Number(prompt('Enter y2'));


if (onTheLineSegment(x0, y0, x1, y1, x2, y2)) {
    console.log('(' + x2 + ', ' + y2 + ') is on the line segment from (' + x0 + ', ' + y0 + ') to (' + x1 + ', ' + y1 + ')');

}
else if (onTheSameLine(x0, y0, x1, y1, x2, y2)) {
    console.log('(' + x2 + ', ' + y2 + ')  is on the same line from  (' + x0 + ', ' + y0 + ') to (' + x1 + ', ' + y1 + ')');

}
else if (leftOfTheLine(x0, y0, x1, y1, x2, y2)) {
    console.log('(' + x2 + ', ' + y2 + ')  is on the left side of the line from  (' + x0 + ', ' + y0 + ') to (' + x1 + ', ' + y1 + ')');
}
else {
    console.log('(' + x2 + ', ' + y2 + ')   is on the right side of the line from  (' + x0 + ', ' + y0 + ') to (' + x1 + ', ' + y1 + ')');

}
