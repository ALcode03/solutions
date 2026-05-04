/* Author: ALEXANDRA KEDJU <ALcode03>
   Problem: Temperature Grid
*/

const temperatures = [
  [22, 25, 24],
  [30, 28, 27],
  [19, 21, 20]
];

let lowest = temperatures[0][0]; // start with first value

for (let i = 0; i < temperatures.length; i++) {
  for (let j = 0; j < temperatures[i].length; j++) {
    if (temperatures[i][j] < lowest) {
      lowest = temperatures[i][j];
    }
  }
}

console.log("Lowest temperature:", lowest);