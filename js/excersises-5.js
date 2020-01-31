"use strict";
/*
Flattening
Utilice el reduce método en combinación con el concat método para "aplanar" una matriz de matrices en una única matriz que tenga todos los elementos de las matrices originales.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

function passArray(array) {
  let localArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      localArray.push(array[i][x]);
    }
  }
  return console.log(localArray);
}
// passArray(arrays);



function unitArray(array) {
  return array.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator.concat(currentValue);
  });
}

console.log(unitArray(arrays));


//---------------EXCERSISE 2---------------------------------------------
/*
Escriba una función de orden superior loop que proporcione algo así como una for declaración de bucle. Toma un valor, una función de prueba, una función de actualización y una función de cuerpo. Cada iteración, primero ejecuta la función de prueba en el valor del bucle actual y se detiene si eso devuelve falso. Luego llama a la función del cuerpo, dándole el valor actual. Finalmente, llama a la función de actualización para crear un nuevo valor y comienza desde el principio.

Al definir la función, puede usar un bucle regular para hacer el bucle real.
*/

/* Examples
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


*/

function loop(value, test, refresh, body) {
  let localArray = [];
  for (let i = value; value > 0; value--) {
    localArray.push(value);
  }
  return console.log(localArray.filter(test));
}
loop(10, n => n > 0, );