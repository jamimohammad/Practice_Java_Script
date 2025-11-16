//4.2 (Geometry: great circle distance) The great circle distance is the distance between 
// two points on the surface of a sphere. Let (x1, y1) and (x2, y2) be the geographi
// cal latitude and longitude of two points. The great circle distance between the two 
// points can be computed using the following formula:
//  d = radius * arccos(sin(x1) * sin(x2) + cos(x1) * cos(x2) * cos(y1- y2))
//  Write a program that prompts the user to enter the latitude and longitude of two 
// points on the earth in degrees and displays its great circle distance. The average 
// earth radius is 6,371.01 km. Note that you need to convert the degrees into radians 
// using the Math.toRadians method since the Java trigonometric methods use 
// radians. The latitude and longitude degrees in the formula are for north and west. 
// Use negative to indicate south and east degrees. Here is a sample run: 

function all(lat1, lon1, lat2, lon2) {
    const radius = 6371.01;
    
    lat1 = lat1 * Math.PI / 180;
    lon1 = lon1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;

    var distance = radius * Math.acos( Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2) )
       
    return distance;
}

var x1 = Number(prompt("Enter lat 1:"));
var y1 = Number(prompt("Enter lon 1:"));
var x2 = Number(prompt("Enter lat 2:"));
var y2 = Number(prompt("Enter lon 2:"));

console.log("distance: " + all(x1, y1, x2, y2) + " km");
