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

//ARRAY: METOFOS Y PROPIEDADES
//LENGTH
//Al igual que en un string, la propiedad length nos sirve para obtenes el largo de un ARRAY.
//Nos permite identificar cuantos elementos tiene.

const miArray = ["marca", 3, "palabra"];
console.log(miArray.length); //impreme 3

//LENGTH es muy comun utilizarlo para definir el limite de una iteracion sobre un array

let numerosA = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numerosA.length; i++){
    alert(numerosA[i]);
}


//AGRERAR ELEMENTOS
//Para sumar un elementos a un ARRAY ya existente, se utiliza el metodo push, pasando como parametro el valor o variable a agregar
//Siempre lo agrega al final del array
miArray.push('otro elemento');

console.log(miArray.length) //imprime 4
console.log(miArray)
//["marca", 3, "palabra", "otro elemento"]; AGREGA SIEMPRE AL FINAL DEL ARRAY

//METODO UNSHIFT()
//Si queremos agregar al inicio del array, utilizamos el metodo unshift()

miArray.unshift('otro elemento');

console.log(miArray);
//["otro elemento", "marca", 3, "palabra", "otro elemento"]; //Agrega al inicio del array


//QUITAR ELEMENTOS
//Si queremos eliminar el primer elemento del array utilizamos el metodo SHIFT()
//Para elimimar el ultimo, el metodo POP()


//SPLICE
//El metodo SPLICE() eliminar uno o varios elementos de un array en cualquier posicion
//Funciona con 2 parametros: el primero es el indice donde se ubica el metodo para trabajar.
//El segundo es la cantidad de elementos a eliminar desde esa posicion

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2) //Pedro, miguel

console.log(nombres)
//Quedaron ['Rita', 'Ana', 'Vanesa']
