"use strict";

/*
Escriba una rangefunción que tome dos argumentos, starty end, y devuelva una matriz que contenga todos los números desde starthasta (e incluyendo) end.

Luego, escriba una sumfunción que tome una matriz de números y devuelva la suma de estos números. Ejecute el programa de ejemplo y vea si realmente devuelve 55.

Como asignación de bonificación, modifique su rangefunción para tomar un tercer argumento opcional que indique el valor de "paso" utilizado al construir la matriz. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiente al comportamiento anterior. La llamada a la función range(1, 10, 2)debería regresar [1, 3, 5, 7, 9]. Asegúrese de que también funcione con valores de paso negativos para que eso range(5, 2, -1)produzca [5, 4, 3, 2].
*/

let newArray = [];

// function range(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }
// range(1, 10);
// console.log(newArray);

// function sumNumbers(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }
// console.log(sumNumbers(newArray));

 function rangeII(num1, num2, plus) {
   let arrayLocal = [];
   if (!isNaN(plus)) {
     if (plus > 0) {
       for (let i = num1; i <= num2; i += plus) {
         arrayLocal.push(i);
       }
     } else {
       for (let x = num2; x >= num1; x+= plus) {
         console.log(x);
       }
     }
   } else {
     return "No es un numero";
   }
   return arrayLocal;
 }

// console.log(rangeII(1, 20, -2));

//Reversing an array
/*
Las matrices tienen un reverse método que cambia la matriz al invertir el orden en que aparecen sus elementos. Para este ejercicio, escriba dos funciones, reverseArrayy reverseArrayInPlace. El primero, reverseArray toma una matriz como argumento y produce una nueva matriz que tiene los mismos elementos en orden inverso. El segundo, reverseArrayInPlace hace lo que hace el reversemé todo: modifica la matriz dada como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el reverse método estándar .

Pensando en las notas sobre los efectos secundarios y las funciones puras en el capítulo anterior , ¿qué variante espera que sea útil en más situaciones? ¿Cuál corre más rápido?
*/

let numOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numOne);
console.log(numOne.reverse());


