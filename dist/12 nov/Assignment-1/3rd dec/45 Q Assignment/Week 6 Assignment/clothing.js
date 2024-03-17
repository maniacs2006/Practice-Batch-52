let temperature = parseFloat("Enter the temperature in Celsius: ");
if (temperature < 10) {
    console.log("Please wear a jacket or sweater it's very cold.");
}
else if (temperature >= 10 && temperature < 20) {
    console.log("It's cold please wear a sweater.");
}
else if (temperature >= 20 && temperature < 30) {
    console.log("Wear clothes accordingly, you still might catch a cold.");
}
else {
    console.log("You can wear whatever you want,take care of yourself.");
}
export {};
