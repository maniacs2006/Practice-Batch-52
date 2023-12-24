"use strict";
let negarr = [-87 - 90, -12, 56, -4];
let newarr = [];
for (let index = 0; index <= negarr.length; index++) {
    if (negarr[index] >= 0) {
        newarr.push(negarr[index]);
    }
}
console.log(newarr);
