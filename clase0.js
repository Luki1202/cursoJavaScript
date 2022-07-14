let hora = 15;

console.log("IF ELSE IF ELSE");

if (hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
} else if(hora >= 6 && hora <= 11){
    console.log("Buenos días");
} else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
} else{
    console.log("Buenas noches");
}

/*OPERADOR TERNARIO*/
let edad = 17;

console.log("OPERADOR TERNARIO");

let eresMayor = (edad >=18)
 ?"Eres mayor de edad"
 :"Eres menor de edad";
console.log(eresMayor);

/*SWITCH - CASE*/

let dia = 5;

console.log("SWITCH - CASE");

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("El día no existe");
        break;
}

//EJEMPLO DE SCRIPT

/*let entrada = prompt("Ingresa una letra");
let salida = entrada + " " + "ingresada";
alert(salida);*/

//ejercicio



/*let nombre = prompt("Ingrese su nombre");

alert("Hola " + nombre);*/


let numeroA;
let numeroB;
let resultado;

numeroA = prompt("Ingrese un numero");
numeroB = prompt("Ingrese otro numero");
resultado = (parseInt(numeroA) + parseInt(numeroB));

alert("El resultado de la suma es: " + resultado);

