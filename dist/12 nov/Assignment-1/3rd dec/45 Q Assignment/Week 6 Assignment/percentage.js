function percentage(numerator, denominator) {
    return (numerator / denominator) * 100;
}
let numerator = parseFloat("Enter the numerator: ");
let denominator = parseFloat("Enter the denominator: ");
let result1 = percentage(numerator, denominator);
console.log("${numerator} is ${result}% of ${denominator}.");
export {};
