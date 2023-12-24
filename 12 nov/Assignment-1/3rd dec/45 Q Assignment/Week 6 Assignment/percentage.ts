function percentage(numerator: number, denominator: number): number {
  return (numerator / denominator) * 100;
}
let numerator: number = parseFloat("Enter the numerator: ");
let denominator: number = parseFloat("Enter the denominator: ");
let result1: number = percentage(numerator, denominator);
console.log("${numerator} is ${result}% of ${denominator}.");
