//function to find volume of a cube
function volumecube(l: number, w: number, h: number) {
  let volume = l * w * h;
  return volume;
}
//driver program
let l = 5;
let w = 6;
let h = 7;
console.log("Volume= " + volumecube(l, w, h));
