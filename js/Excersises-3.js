"use strict";

function min(a, b) {
  return console.log(Math.min(a, b));
}
min(26, 20);


const Min2 = (a, b) => console.log(Math.min(a, b));
Min2(26, 13);


const MinArrayNumber = (arr) => console.log(Math.min(...arr));
MinArrayNumber([10, 56, 3, 12]);


//Excersises II

function isEven(num) {
    if (num >= 0 && num % 2 == 0) {
        return console.log(true);
    } else if (num >= 0) {
        return console.log(false);
    } else {
        isEven(num);
    }
}
isEven(4);

//Excersise III
function countBS(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count++;
        }
    }
    return console.log(count);
}
countBS('BBC');


function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return console.log(count);
}
countChar('papplo', 'p');



const getString = () => prompt('Ingresa tu Texto');
const getText = () => prompt('Ingresa la cadena de texto a analizar');
function letter(string, text) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === text) {
            count++;
        }
    }

    return console.log(`En el texto ${string} la letra ${text} se encuentra ${count} veces en la cadena`);
}
letter(getText(), getString());