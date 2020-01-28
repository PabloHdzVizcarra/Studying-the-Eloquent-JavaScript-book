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
// console.log(greaterThan20(19));

//-----------------------------------------------------
function linux(f) {
  return (...args) => {
    console.log(`Calling with ${args}`);
    let result = f(...args);
    console.log(`called with ${args} returned ${result}`);
    return result;
  }
}

linux(Math.min)(3, 2, 1);

//--------------------------------------------------------
['Ubuntu', 'Lubuntu', 'Xubuntu'].forEach((i) => console.log(i));

//----------------------------------------------------------

let company =
{
  name: "Plastic Products",
  ranges: [[902, 1020], [1050, 2100], [3500, 4550]],
  direction: 'Blvd. Torreon, Matamoros',
  year: 2005,
  living: true,
  link: "https://www.google.com"
}

//------FUNCTION FILTER()-------------
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(company, script => script.living));

function destroy(arr) {
  var args = Array.prototype.slice.call(arguments);
  for (let i = 1; i < args.length; i++) {
    let dato = arr.indexOf(args[i]);
    console.log(dato);
  }
  return args;
}

console.log(destroy([1, 2, 3, 4, 5, 6], 2, 4));