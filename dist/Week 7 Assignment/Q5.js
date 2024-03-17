function factorial(integer) {
    let result = 1;
    for (let index = 1; index <= integer; index++) {
        result = result * index;
    }
    return result;
}
console.log(factorial(2));
export {};
