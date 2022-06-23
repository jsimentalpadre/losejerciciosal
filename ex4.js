'use-strict'
// EXERCISE #4
/* Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario */

var num1 = parseInt(prompt("Number 1 by user: "));
var num2 = parseInt(prompt("Number 2 by user: "));

console.log("/// Exercise 4 ///");
for (let i = num1; i <= num2; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}