let celsius = [76, 43, 26, -18.9];
let farenheit = [];
for (let index = 0; index < celsius.length; index++) {
    const unit = celsius[index];
    let Farenheit = (unit * 9) / 5 + 32;
    console.log(Farenheit);
    farenheit.push(Farenheit);
}
console.log(farenheit);
export {};
