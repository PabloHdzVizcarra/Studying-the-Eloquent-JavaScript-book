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

let numOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function reverseArray(arr) {
  let localArray = [];
  for(let i =0; i < arr.length; i++) {
    localArray.unshift(arr[i]);
  }

  return console.log(localArray);
}


function reverseArray2(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i])
  }

  return console.log(output);
}
// reverseArray2(numOne);

//-----ARRAY AL REVES-----


function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return console.log(arr);
}
// reverseArrayInPlace(numOne);


//---CREACION DE JSON---------//

let newJson = 
{
  "nombre" : "Pablo",
  "edad" : 27,
  "apellidos" : {
    "paterno" : "Hernandez",
    "materno" : "Vizcarra"
  },
  "intereses" : [
    "Programar",
    "Ciclismo"
  ]
}

// let dat = JSON.stringify(newJson);
// console.log(dat);

// dat = JSON.parse(dat)
// console.log(dat);

let newUsers =[

  {
    "name" : "Pablo",
    "sex" : "Masculino"
  },
  {
    "name" : "Lucero",
    "sex" : "Femenino"
  },
  {
    "name" : "Thiago",
    "sex" : "Masculino"
  },
  {
    "name" : "Yara",
    "sex" : "Femenino"
  },
  {
    "name" : "Andrea",
    "sex" : "Femenino"
  },
];

function printUsers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].sex);
  }
}

// printUsers(newUsers);

//---EXCERSISE 3---
/*
Escriba una función arrayToList que construya una estructura de lista como la que se muestra cuando se da [1, 2, 3]como argumento. También escriba una listToArray función que produzca una matriz a partir de una lista. Luego agregue una función auxiliar prepend, que toma un elemento y una lista y crea una nueva lista que agrega el elemento al frente de la lista de entrada, y nth que toma una lista y un número y devuelve el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no existe tal elemento.

Si aún no lo ha hecho, también escriba una versión recursiva de nth.
*/

function arrayToPokemon(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {pokemon: arr[i], rest: list};
  }
  return list;
}
// console.log(JSON.stringify(arrayToPokemon(['Charizard', 'Pikachu', 'Diglett'])));

function listPokemon(list) {
  
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.pokemon);
  }
  return array;
}
// console.log(listPokemon(arrayToPokemon(["Charizard", "Totodile", "Chikorita"])));

function prependPokemon(pokemon, list) {
  return {pokemon, rest: list};
}
// console.log(prependPokemon('MewTwo', arrayToPokemon(['Celebi', 'Lugia', 'Ho-Oh'])));
// console.log(prependPokemon(JSON.stringify('MewTwo', arrayToPokemon(['Celebi', 'Lugia', 'Ho-Oh']))));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.pokemon;
  else return nth(list.rest, n-1);
}

// console.log(nth(arrayToPokemon(['Charizard', 'Pikachu', 'Diglett']), 1));

//-----Excersise 4-----
/*
Escriba una función deepEqual que tome dos valores y devuelva verdadero solo si son el mismo valor o son objetos con las mismas propiedades, donde los valores de las propiedades son iguales en comparación con una llamada recursiva a deepEqual.

Para saber si los valores deben compararse directamente (use el ===operador para eso) o comparar sus propiedades, puede usar el typeofoperador. Si produce "object"ambos valores, debe hacer una comparación profunda. Pero hay que tener en cuenta una tonta excepción: a causa de un accidente histórico, typeof nulltambién produce "object".

La Object.keysfunción será útil cuando necesite revisar las propiedades de los objetos para compararlos.
*/
let distroUbuntu = {
  distro : 'Ubuntu',
  deskpot : 'Gnome',
  version : 19.10
};
console.log(Object.keys(distroUbuntu));

let ubuntu = {here: {is: "an"}, object: 2};


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a == null || typeof a != 'object' ||
      b == null || typeof b != 'object') {
    return false;
  }
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(ubuntu, ubuntu));
console.log(deepEqual(ubuntu, {here: {is: "an"}, object: 2}));