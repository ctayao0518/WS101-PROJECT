
function greetUser() {
    var color = prompt("Enter your favorite color:");
    console.log("Welcome! Your favorite color is " + color + ".");
}
greetUser();
function calculateArea(width, height) {
    return width * height;
}
var width = parseInt(prompt("Enter the width:"));
var height = parseInt(prompt("Enter the height:"));
var area = calculateArea(width, height);
console.log("The area of the rectangle is: " + area);