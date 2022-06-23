'use-strict'
// EXERCISE #5
/* Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
    Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, 
    el residuo de la division es CERO */

console.log("/// Exercise 5 ///");
var num = parseInt(prompt("Please user, enter a number: "));

for (let i = 0; i <= num; i++){
    if (num % i == 0){
        console.log(num + " is divisible by " + i + " without remainder");
    }
}

