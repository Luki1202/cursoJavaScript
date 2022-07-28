//FUNCIONES 
//Una funcion es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.
//Ventajas de usar funciones:
// -Evita instrucciones duplicadas - Soluciona un problema complejo usando tareas sencillas
// - Focaliza tareas prioritarias para el programa - Aporta ordenamientos y entendimiento al codigo
// -Aporta facilidad y rapidez para hacer modificaciones

//DECLARACION DE UNA FUNCION function saludar(){}
//Se declara a traves de la palabra function(), seguido de los ().
//El nombre de la funcion no se puede repetir

//LLAMADO DE UNA FUNCION saludar();
//Una vez declarada la funcion, se puede usar en cualquier parte del codigo.
//Para ejecutar una funcion solo hay que escribir su nombre y finalizar la sentencia con ()

//PARAMETROS
//Cuando enviamos a la funcion uno o mas valores para ser empleados en sus operaciones, estamos hablando de los parametros de la funcion
//Se envian a la funcion mediante variables y se colocan entre los parentesis posteriores al nombre de la funcion
//Son VARIABLES que se declaran dentro de la funcion entre los ()
//Los valores de estos se definen luego en el llamado

//EJ: function conParametros(parametro1, parametro2){
//    console.log(parametro1 + " " + parametro2);
//}

//EJEMPLO SUMAR Y MOSTRAR

//Declaracion de variable para guardar el resultado de la suma
/*let resultado = 0;

//Funcion que suma dos numero y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}

//Funcion que muestra el resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}

//Llamamos primero a sumar y luego a mostrar

sumar(6, 3);
mostrar(resultado);
*/

//EJEMPLO CALCULADORA

/*function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(10, 5, "*"));
*/

//FUNCIONES ANONIMAS Y FUNCIONES FLECHA

//FUNCION ANONIMA
//Una funcion anonima es una funcion que se define sin nombre
//Se utiliza para ser pasada como parametro o asignada a una variable
//Generalmente, las funciones anonimas se asignan a variables declaradas como constantes


//FUNCION FLECHA
//Identificamos a las funciones flechas como funciones anonimas de sintaxis simplificada
//NO usan la palabra FUNCTION pero usa => entre los paramteros y el bloque

//EJEMPLO
//const suma = (a, b) => { return a + b}
//Si es una funcion de una sola linea con retorno podemos evitar escribir el cuerpo
//const resta = (a, b) => a - b;

//const suma = (a, b) => a + b
//const resta = (a, b) => a - b
//Si una funcion es una sola linea con retorno y un parametro, puede evitar escribir los()
//const iva = x => x + 0.21
//let precioProducto = 1000
//let descuento = 50
//Calculo el precioProducto + iva - descuento
//let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
//bconsole.log(nuevoPrecio)