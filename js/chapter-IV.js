'use strict'

let myArray = ['Ubuntu', 'Linux Mint', 'Manjaro', 'Arch Linux'];
// console.log(myArray[2]);
// console.log(myArray.length);

let pablo = 'Pablo'
// console.log(typeof pablo.toUpperCase);
// console.log(typeof pablo.toUpperCase());

myArray.push('Elementary Os')
// console.log(myArray);

const DistroLinux = {
    ubuntu: 'Linux Mint',
    archLinux: 'Manjaro',
    debian: 'MX Linux',
    fedora: 'Fedora',
    openSuse: 'Leap',
}

const DistroArch = {
    manjaro: 'XFCE',
    endeavourOs: 'XFCE',
    arcoLinux: 'XFCE'
}

const DistroUbuntu = {
    ubuntu: 'Gnome',
    xubuntu: 'XFCE',
    lubuntu: 'LQXT',
    kubuntu: 'KDE'
}

Object.assign(DistroUbuntu, DistroArch);

// console.log(DistroUbuntu);
// console.log(Object.keys(DistroLinux));

let deskpotLinux = [];
function addDistroLinux(distro, deskpot) {
    deskpotLinux.push(distro, deskpot)
}

addDistroLinux(['Ubuntu', 'Xubuntu'], 'XFCE');
// console.log(deskpotLinux);

//Lista de tareas

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgen(task) {
    todoList.unshift(task);
}

// console.log(todoList);
remember('Poner los frijoles');
remember('Lavar los trastes');
remember('Programar mucho');
// console.log(todoList);
getTask();
// console.log(todoList);
rememberUrgen('Tomar cafe');
// console.log(todoList);
// console.log(todoList.indexOf('Ver Tv'));// Este elemnto no existe en el array



//Works with strings
// console.log(String(7).padStart(3, '0'));

let programmingWeb = 'The really of programming web world';
let words = programmingWeb.split(' ');
// console.log(words);
let newProgramming = words.join('-');
// console.log(newProgramming);
let windows10 = 'Windows ';
// console.log(windows10.repeat(10));

//-----REST PARAMETERS-----

function max(...numbers) {
    let result = 0;
    for (const number of numbers) {
        if (number > result) result = number;
    }
    return console.log(result);
}

// max(10, 5, 52, 89);
let findMax = [10, 32, 100, 56, 82];
// max(...findMax);

//-----MATH METHODS-----
console.log(Math.floor(Math.random()*100)); //Crear un numero aleatorio entre 1 y 100


function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / 
        Math.sqrt((n10 + n11) * (n00 + n01) *
                (n01 + n11) * (n00 + n10));
}

console.log(phi([10, 20, 15, 12]));