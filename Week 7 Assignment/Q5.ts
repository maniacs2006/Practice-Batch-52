function factorial(integer: number) {
  let result = 1;
  for (let index = 1; index <= integer; index++) {
    result = result * index;
  }
  return result;
}
console.log(factorial(5));
