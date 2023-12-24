"use strict";
let thenumber = parseFloat("Enter a number: ");
function divisibility(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("This number is divisible by both 3 and 5.");
    }
    else if (number % 3 == 0) {
        console.log("This number is only divisible by 3.");
    }
    else if (number % 5 == 0) {
        console.log("This number is only divisible by 5");
    }
    else {
        console.log("This number is not divisible by 3 nor 5.");
    }
}
