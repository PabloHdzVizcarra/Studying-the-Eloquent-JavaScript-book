"use strict";

const numbers1_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers1_5 = [1, 2, 3, 4, 5];

const double = n => n * 2;
// console.log(numbers1_5.map(double));
// console.log(numbers1_5.map((n) => n * 2));

const less_2 = n => n - 2;
// console.log(numbers1_10.map(less_2));
// console.log(numbers1_10.map((i) => i - 2));

var grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" }
];
/*
let isBoy = (student) => student.sex === 'M';
let isGirl = (student) => student.sex === 'F';
let getBoys = (grades) => (grades.filter(isBoy));
let getBoys2 = (grades) => (grades.filter((student) => student.sex === 'M'));

let getGirls = (grades) => (grades.filter(isGirl));
let average = (grades) => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
);
let maxGrade = (grades) => (
    Math.max(...grades.map(student => student.grade))
);
let minGrade = (grades) => (
    Math.min(...grades.map(student => student.grade))
);


console.log(average(grades));
console.log(average(getBoys(grades)));
console.log(average(getGirls(grades)));
console.log(maxGrade(grades));
console.log(minGrade(grades));
console.log(maxGrade(getBoys(grades)));
console.log(minGrade(getBoys(grades)));
console.log(maxGrade(getGirls(grades)));
console.log(minGrade(getGirls(grades)));
*/

const family = [
  { name: "Pablo", age: 27, status: "Studing", sex: "M" },
  { name: "Lucero", age: 24, status: "Watching Tv", sex: "F" },
  { name: "Thiago", age: 4, status: "Sleep", sex: "M" },
  { name: "Yara", age: 2, status: "Sleep", sex: "F" },
  { name: "Andrea", age: 1, status: "Sleep", sex: "F" }
];

let getBoys = member => member.filter(member => member.sex === "M");

let toSelect = family =>
  family.reduce((acc, obj) => acc + obj.age, 0) / family.length;

// console.log(getBoys(family));
// console.log(toSelect(getBoys(family)));
// let boysFamily = family.filter(member => member.sex === 'M' )
//                     .map(member => member.name);
// console.log(boysFamily.map(user => user));

function pokemonFire() {
  console.log("Charizard");
}
function pokemonWater() {
  console.log("Blastoise");
}
function pokemon(type, getPokemonFire, getPokemonWater) {
  if (type === "water") {
    pokemonWater();
  } else if (type === "fire") {
    pokemonFire();
  } else {
    let noneType = () => console.log("Pokemon no type");
  }
}
// pokemon("fire", pokemonFire, pokemonWater);

//------------------------------------------------------------

function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
      accion(i + 1);
  }
}
// repetir(10, console.log);

let numsText = [];
repetir(5, (i) => {
    numsText.push(`Unidad ${i + 1}`);
});

// console.log(numsText);


/*
FUNCIONES QUE CREAN NUEVAS FUNCIONES
*/

function atackPikachu(power) {
    return (newAttack) => newAttack > power;
}
let atackPikachu110 = atackPikachu(100);
console.log(atackPikachu110(150));

/*
FUNCIONES QUE CAMBIAN OTRAS FUNCIONES
*/

function live100(f) {
    return (...args) => {
        console.log("Ejecutando con", args);
        let result = f(...args);
        console.log("Ejecutando con", args, ", returned", result);
        return result;
    };
}

live100(Math.max)(5, 4, 3, 2, 1);


//---FUNCIONES QUE MODIFICAN EL FLUJO

function unless(test, then) {
    if(!test) then();
}

repetir(3, (n) => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});


//-----------------------------------------------------------------
let script = 
{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
};


function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(script, script => script.living));