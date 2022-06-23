'use-strict'
// EXERCISE #2
/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
    hasta introducir un numero negativo y ahi mostrar el resultado*/

var num_s = 0;
var num = 0;
var add = 0;
    
while (num >= 0){
    num = parseInt(prompt("Enter a number: "));
    console.log(num);
    num_s++;
    add += num;
}

var avg = (add - num) / (num_s-1);

console.log("/// Exercise 2 ///");

console.log("The addition of the numbers is: " + add);

console.log("The average of the numbers is: " + avg);