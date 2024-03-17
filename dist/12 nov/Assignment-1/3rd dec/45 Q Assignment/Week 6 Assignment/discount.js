let product = parseFloat("Enter the price of the product: ");
let discount;
if (product > 100) {
    discount = product * 0.1;
    console.log("Your discounted price is : $${(product-discount)}");
}
else {
    discount = product * 0.05;
    console.log("Your discounted price is: $${(product-discount)}");
}
export {};
