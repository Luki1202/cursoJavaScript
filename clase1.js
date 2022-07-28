//JAVASCRIPT
    
        /*JavaScript es un lenguaje de programacion interpretado que se utiliza principalmente para aportar dinamismo a sitios y 
        aplicaciones web.
        Funciona como complemento con los lenguajes web HTML y CSS3, permitiendo crear nuevas funcionalidades e interacciones 
        avanzadas con los usuarios, asi como interactuar con otras aplicaciones o servicios backend.*/

    //VARIABLES

        /*Una variables es un espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo
        de la ejecucion del programa.
        En las variables almacenamos diversos tipos de datos que utilizamos en la aplicacion.*/

        //Declaracion de VARIABLES

        /*Declarar una variable significa crearla. Para esto usamos la palabra reservada "let". Para los nombres no debemos
         utilizar ni espacios ni caracteres especiales.*/

            //EJEMPLOS

    //let apellidoA //esto es correcto

        /*
        let año //NO USAR CARACTERES ESPECIALES CON LA Ñ
        let telefono movil //NO USAR ESPACIO
        */

//CONST
    //const de constante, dato que nunca cambia.
    //Como por ejemplo PI
    //    const pi = 3.1416;

    //Al ser un dato constante, quiere decir que NO se puede cambiar
    //No se puede pisarlo como LET, porque el navegador no te va a dejar avanzar
    //es como un dato fijo
    //Se recomienda usarlo en funciones


//TIPOS DE DATOS

    /*Podemos asociar distintos valores a una variable en JavaScript. Los tipos de datos mas comunes son NUMBER (Numeros) y
    STRING (Cadenas de texto)*/

    //NUMBER
        /*Un valor numerico puede ser entero (5) o decimal (3.15).*/
        //EJEMPLO
     //   let a = 2 ;
    //let numberB = newNumber(1);
     //   let b = 7.19;

        /*INGRESANDO console.log(numberC.toFixed(1)); LE ORDENO A LA CONSOLA MOSTRAR UN SOLO DECIMAL*/

    //STRING
        /*Un STRING (Cadena de texto) es un valor compuesto por uno o mas caracteres, definido entre comillas simples('') o
    dobles ("").*/
        //EJEMPLO
       // let nombre = 'Lucas';
       // let apellido = 'Garcia';

        //CONCATENACION
       // let saludoA = "Hola mi nombre es " + nombre + " " + apellido + ".";

        //TEMPLATE STRING (INTERPOLACION DE VARIABLES)
       // let saludoB = 'Hola soy ${nombre} ${apellido}';

       // let confirmar = confirm("¿Desea formatear su disco?");

//ASIGNACION
    //En una variable podemos asignar distintos tipos de valores mediante el operador de asignacion (=)

    //EJEMPLO DE DECLARACION: let edad
    //                        let nombre
    //                        let apellido

    //EJEMPLO DE ASIGNACION:  edad = 20
    //                        nombre = "Lucas"
    //                        apellido = "Garcia"

    //Tambien podemos INICIALIZAR variables al momento de declararla
    //Variables inicializadas: let edad = 20
    //                         let nombre = "Lucas"
    //                         let apellido = "Garcia"


//OPERACIONES BASICAS
    //Con variables de valores numericos se puede realizar operaciones matematicas: sumas, restas, multiplicaciones, etc.

    //EJEMPLO DE OPERACIONES

   // let numeroA = 1;
   // let numeroB = 2;
   // let numeroC = 3;

    //SUMA 
   // let resultadoSuma = numeroA + numeroB;
    //RESTA
   // let resultadoResta = numeroB - numeroA;
    //PRODUCTO DE DOS NUMEROS
   // let resultadoProducto = numeroB * numeroC;
//PROMPT()
    //prompt() muestra un cuadro de dialogo donde el usuario debera ingresar un dato
    //Se puede poner un mensaje sobre el campo de texto
    //El valor que devuelve es una cadena que representa lo que el usuario ingreso
    //Al valor que se ingresa se lo llama ENTRADA

   // let nombreIngresado = prompt("Ingrese su nombre para ser hackeado");

//CONSOLE
    //console.log() muestra el mensaje que pasemos como parametro a la consola JavaScript

   // let muestraConsola = "Soy un consolelog";
   // console.log(muestraConsola);

//ALERT
    //alert() muestra una ventana sobre la pagina web, mostrando el mensaje que pasemos como parametro
    //Al valor que mostramos se lo llama SALIDA

   // alert("¡Hola soy un alert!");