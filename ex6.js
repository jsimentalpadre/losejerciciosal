'use-strict'
// EXERCISE #6
/* Hacer un programa que nos diga si es Par e Impar
    1.- Ventana Promt
    2.- Si no es valido que nos pida de nuevo el Numero */

console.log("/// Exercise 6 ///");
var num = parseInt(prompt("Type a number: "));

if (num % 2 == 0){
    console.log(num + " The num is even");
} else {
    console.log(num + " The num is odd");
}
