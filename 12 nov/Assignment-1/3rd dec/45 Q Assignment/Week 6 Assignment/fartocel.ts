function celtofar(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}
function fartocel(farenheit: number): number {
  return ((farenheit - 32) * 5) / 9;
}
let temp: number = parseFloat("Enter the temperature: ");
let conversion: string =
  "Enter the conversion of C for celsius and F for farenheit.: ";
if (conversion == "C") {
  let farenheit: number = celtofar(temp);
  console.log("${temp} Celsius is equal to ${farenheit} Farenheit.");
} else if (conversion == "F") {
  let celsius: number = fartocel(temp);
  console.log("${temp} Farenheit is equal to ${celsius} Celsius.");
}
