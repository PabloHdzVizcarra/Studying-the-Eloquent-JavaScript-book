'use strict'

let myArray = ['Ubuntu', 'Linux Mint', 'Manjaro', 'Arch Linux'];
console.log(myArray[2]);
console.log(myArray.length);

let pablo = 'Pablo'
console.log(typeof pablo.toUpperCase);
console.log(typeof pablo.toUpperCase());

myArray.push('Elementary Os')
console.log(myArray);

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

console.log(DistroUbuntu);
console.log(Object.keys(DistroLinux));

let deskpotLinux = [];
function addDistroLinux(distro, deskpot) {
    deskpotLinux.push(distro, deskpot)
}

addDistroLinux(['Ubuntu', 'Xubuntu'], 'XFCE');
console.log(deskpotLinux);

//Lista de tareas

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgen(task) {
    todoList.unshift(taks);
}

