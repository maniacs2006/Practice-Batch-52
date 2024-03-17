function leapyear(year) {
    if ((year % 4 == 0 && year % 100 == 0) || year % 400 == 0)
        ;
}
let useryear = parseInt("Enter an year: ");
if (leapyear(useryear)) {
    console.log("It is a leap year.");
}
else {
    console.log("Its not a leap year.");
}
export {};
