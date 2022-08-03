//ARRAY
//Un ARRAY es un tipo de dato que sirve para almacenar valores en forma de lista.
//Los valores del ARRAY pueden ser distintos y es posible agregar o quitar elementos en todo momento.
//Los elementos del array tienen un indice, que va desde el 0 (el primer elemento del array) hasta el ultimo.

//DECLARACION DEL ARRAY
//Para declarar una variable y asignar un array usamos los [] y dentro de ellos definimos tos los valores separados por coma.
//Los ARRAYA en JavaScript empiezan siempre en la posicion 0.
//Un ARRAY que tenga 10 elementos, tendra posiciones de 0 a 9.

//Declaracion de array vacio
const arrayA = [];

//Declaracion de array con numeros
const arrayB = [1, 2];

//Declaracion de array con string
const arrayC = ["C1", "C2", "C3"];

//Declaracion de array con booleanos
const arrayD = [true, false, true, false];

//Declaracion de array mixto
const arrayE = [1, false, "C4"];


//ACCESO AL ARRAY
//Es posible acceder a los elementos de un array a traves de su posicion

//const numeros = [1, 2, 3, 4, 5];
//console.log(numeros[0]); //Accedemos al 1
//console.log(numeros[3]); //Accedemos al 4
//let resultado = numeros[1] + numeros[2];
//console.log(resultado); //Esta suma es igual a 5


//RECORRIDO DEL ARRAY
//Decimos que estamos recorriendo un ARRAY cuando empleamos un bucle para acceder a cada elemento por separado.
//Los ARRAY en JavaScript son objetos iterable, lo que permite usar distintas estructuras para iterar sobre ellos.

const numeros =[1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}