//CICLOS/BUCLES
    //Son un medio rapido y sencillo para hacer algo repetidamente
    //Para esto utilizaremos FOR, WHILE O DO...WHILE

    //TIPOS DE BUCLES
    //CICLOS POR CONTEO
    //Repiten un bloque de codigo un numero de veces especificos. Estructura FOR

    //CICLOS CONDICIONALES
    //Repiten un bloque de codigo mientras la condicion evaluada es verdadera. Estructuras WHILE y DO...WHILE

    //ESTRUCUTRA FOR
    /*for(desde; hasta; actulizacion){
        //Lo que se escriba aca se ejecutara mientras dure el ciclo
    }*/
    //DESDE: es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo
    //HASTA: es el uico elemento que decide si se repite o se detiene el ciclo.
    //ACTUALIZACION: es el nuevo valor que se asigna despues de cada repeticion a las variables que controlan la repeticion.

    //EJEMPLO

    //for (let i = 0; i < 10; i++){
    //    alert(i);
    //}

    //for (let b = 1; b <= 10; b++){
    //    alert(b);
    //}*/

    //EJEMPLO APLICANDO FOR : TABLAS

    //Solicitamos un valor al usuario
 //  let ingresarNumero = parseInt(prompt("Ingresar Numero"));
    //En cada repeticion, calculamos el numero ingresado x el numero de repeticiones (i)
//    for (let i = 1; i <= 10; i++ ) {
//        let resultado = ingresarNumero * i ;
//        alert(ingresarNumero + " x " + i + " = " + resultado);
//    }

    //APLICANDO FOR : TURNOS
//    for ( let i = 1; i <= 20; i++){
        //En cada repeticion solicitamos un nombre
//        let ingresarNombre = prompt("Ingresar nombre");
        //Informamos el turno asignado usando el numero de repeticion (i)
//        alert("Turno N° " + i + "Nombre: " + ingresarNombre);
//    } 


    //SENTENCIA BREAK
    //Cuando escribimos una estructura FOR, necesitamos que bajo cierta condicion el ciclo se interrumpa
    //Al escribir esa linea dentro de un ciclo FOR, el mismo se interrumpira como si hubiera finalizado.
//    for (let i = 1; i <= 10; i ++) { 
        //Si la variable i es igual 5 interrumpo el for 
//        if (i == 5) {
//            break;
//        }
//        alert(i);
//    } 

    //SENTENCIA CONTINUE
    //Cuando escribimos una estructura FOR, necesitamos que bajo cierta condicion, el ciclo saltee esa repeticion y siga con la proxima.
    //for (let i = 5; i <= 10; i++) {
        //Si la variable i es 5, no se interpreta la repeticion
     //   if (i == 5) {
    //        continue;
    //    }
//    }


    //WHILE
    //Permite crear bucle que se ejecutan cero o mas veces, dependiendo de la condicion indicada
    //Mientras se cumpla la condicion indicada, repite las instrucciones incluidas dentro del bucle.
    //Cuando usamos while, asumimos que en algun momento la repeticion finaliza
    //Si la comparacion no se realiza podemos generar el llamado BUCLE INFINITO

    //EJEMPLO
    //let entrada = prompt("Ingresar un dato");
    //Repetimos con while hasta que el usuario ingresa "ESC"
    //while(entrada != "ESC") {
    //    alert("El usuario ingreso " + entrada);
        //Volvemos a solicitar un dato. En la proxima interaccion se evalua si no es ESC
    //    entrada = prompt("Ingresar otro dato"); 
    //}


    //DO...WHILE
    //Bucles que se ejecutan dos o mas veces
    //A diferencia de while, garantiza que el bloque de codigo se interpreta al menos una vez, porque la condicion se evalua al final

    //EJEMPLO DO...WHILE: N°
    //Algoritmo que solicita una entrada y se detiene cuando NO es numero

    //let numero = 0;
    //do{
        //Repetimos con do...while mientras el usuario ingresa un n°
    //    numero = prompt("Ingresar Numero");
    //    console.log(numero);
    //Si el parseo no resulta un numero se interrumpe el bucle
    //} while(parseInt(numero));  


    //SWITCH
    //Diseñada para manejar de forma sencilla multiples condiciones sobre la misma variable
    //Tecnicamente se podria resolver con un IF, pero el uso de SWITCH es mas ordenado

    //EJEMPLO APLICANDO WHILE Y SWITCH: ENTRADAS
    
   // let entrada = prompt("Ingresar un nombre");
    //Repetimos hasta que se ingresa "ESC"
    //    while(entrada != "ESC" ) {
    //        switch (entrada) {
    //            case "ANA":
    //                alert("HOLA ANA");
    //                break;
    //            case "JUAN":
    //                alert("HOLA JUAN");
    //                break;
    //            default:
    //                alert("¿QUIEN SOS?")
    //                break;
    //       }
    //        entrada = prompt("Ingresar un nombre");
    //    }

