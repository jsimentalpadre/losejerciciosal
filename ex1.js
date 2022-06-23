'use-strict'
// EXERCISE #1
/* Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
    PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir */

function conditions(num1, num2){
    if (num1 > num2){
        console.log(num1 + " is greater than " + num2);
    } else if (num1 < num2){
        console.log(num1 + " is less than " + num2);
    }  else if (num1 == num2){
        console.log(" are the same");
    }
}

var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter number 2: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Enter number 1: "));
}
while (num2 <= 0 || isNaN(num2)){
    num2 = parseInt(prompt("Enter number 2: "));
}

console.log("/// Exercise 1 ///");
conditions(num1,num2);