"use strict";
function celtofar(celsius) {
    return (celsius * 9) / 5 + 32;
}
function fartocel(farenheit) {
    return ((farenheit - 32) * 5) / 9;
}
let temp = parseFloat("Enter the temperature: ");
let conversion = "Enter the conversion of C for celsius and F for farenheit.: ";
if (conversion == "C") {
    let farenheit = celtofar(temp);
    console.log("${temp} Celsius is equal to ${farenheit} Farenheit.");
}
else if (conversion == "F") {
    let celsius = fartocel(temp);
    console.log("${temp} Farenheit is equal to ${celsius} Celsius.");
}
