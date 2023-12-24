let negarr: number[] = [-87 - 90, -12, 56, -4];
let newarr: number[] = [];
for (let index = 0; index <= negarr.length; index++) {
  if (negarr[index] >= 0) {
    newarr.push(negarr[index]);
  }
}
console.log(newarr);
