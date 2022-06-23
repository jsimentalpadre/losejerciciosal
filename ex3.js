'use-strict'
// EXERCISE #3
/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */

var num1 = parseInt(prompt("Number 1: "));
var num2 = parseInt(prompt("Number 2: "));

console.log("/// Exercise 3 ///");
console.log(" The Numbers between " + num1 + " and " + num2 + " are: ");
for (let i = num1; i <= num2; i++){
    console.log(i);
}