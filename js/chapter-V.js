"use strict";
//-----Higher-Order Functions-----
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
// console.log(total);

function repeat(count, hello) {
  let labels = [];
  for (let i = 0; i < count; i++) {
    console.log(`${hello}${i + 1}`); 
  }
  return labels;
}

// repeat(10, 'Never Die');

// repeat(5, i => {
//   labels.push(`Unit ${i + 1}`);
// })

// console.log(labels);

//FUNCIONES DE ORDEN SUPERIOR

function greaterThan(n) {
  return m => m > n;
}

let greaterThan20 = greaterThan(20);
console.log(greaterThan20(19));