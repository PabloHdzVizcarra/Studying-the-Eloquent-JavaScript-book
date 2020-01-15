"use script";

const Hello = () => console.log("Hola Pablo");

Hello();

function moneyThesday(money) {
  return hola => hola * money;
}

let thesday = moneyThesday(4);
console.log(thesday(10));

//Funciones Recursivas

function giveMe(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * giveMe(base, exponent - 1);
  }
}
console.log(giveMe(2, 10));



function multipli(num) {
    if (num == 0) {
        return 1;
    } else {
        return multipli(num - 1);
    }
}
console.log(multipli(100));



function findRequest(target) {
    function find(num, histo) {
        if (num === target) {
            return histo
        } else if (num > target) {
            return null;
        } else {
            return find(num + 10, `(${histo} + 10)`) ||
                find(num * 3, `(${histo} * 3)`); 
        }
    }
    return find(1, '2')
}
console.log(findRequest(12));

//Exersise

function printDistroLinuxPopularity(number, label) {
    let numberString = String(number);
    while (numberString.length <= 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printDistro(linuxMint, MxLinux, Manjaro) {
    printDistroLinuxPopularity(linuxMint, 'Linux Mint');
    printDistroLinuxPopularity(MxLinux, 'MX Linux');
    printDistroLinuxPopularity(Manjaro, 'Manjaro');
}
printDistro(2, 1, 3);



