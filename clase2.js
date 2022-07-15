//CONTROL DE FLUJOS
//Marca puntos, a partir de una evaluacion y pueda tomar varios caminos posibles
    
    //CONDICIONALES
    //Una estructura sintactica que sirve para tomar una decision a partir de una condicion
    //Si <condicion> entonces <operacion>

    //ESTRUCTURA IF - ELSE
    //Si se cumple esta condicion (IF), hazlo
    //Si no se cumple (ELSE), haz esto otro

    //EJEMPLOS
    let edad;

    edad = prompt("Ingrese su edad");

    if (edad > 17){
       console.log("Eres mayor de edad");
    } else {
       console.log("Eres menor de edad");
    }

   let nombreUsuario = prompt("Ingresar nombre de usuario");

   if (nombreUsuario == "") {
        alert("Por favor ingresa un nombre de usuario valido");
   } else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
   }

   //CONDICIONES ANIDADAS IF - ELSE - IF - ELSE
   //EJEMPLO

   //Dejame dormir 00hs - 5hs
   //Buenos dias 6hs - 11hs
   //Buenas tardes 12hs - 18hs
   //Buenas noches 19hs - 23hs

   let hora;

   hora = prompt("Ingresar hora -formato 24hs-") ;

   if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir " + nombreUsuario);
   } else if (hora >= 6 && hora <= 11) {
    console.log("Buenos dias " + nombreUsuario);
   } else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes "+ nombreUsuario);
   } else {
    console.log("Buenas noches " + nombreUsuario);
   }

   //VALORES BOOLEANOS
   //Estos pueden ser TRUE o FALSE

   //let numeroZ = 10;
   //let esMayor = (numeroZ > 5); //Su valor sera true

   //if (esMayor) {
   //alert("Es boolean true");
   //}


   //OPERADORES RELACIONALES JS
    // " == "  COMPARACION DE VALOR (ejemplo 7 == 7)
    // " === " COMPARACION DE VALOR Y TIPO DE DATO (MAS RECOMENDABLE)
            //EJEMPLOS " === "   7 === 7     TRUE (SON DOS NUMEROS)
            //                   "7" === 7   FALSE (UNO ES CADENA Y OTRO UN NUMERO)
            //                   0 === false FALSE (UNO ES NUMERO Y OTRO BOOLEAN)
    // " != "  ES DISTINTO (ejemplo a != b)
    // " !== " ESTRICTAMENTE DISTINTO (ejemplo a !== b)
    // " < "   MENOR QUE
    // " <= "  MENOR O IGUAL QUE
    // " > "   MAYOR QUE
    // " >= "  MAYOR O IGUAL QUE

   //OPERADORES LOGICOS
    // " ! "  OPERADOR NOT - NIEGA
    // " || " OPERADOR OR - O
    // " && " OPERADOR AND - Y


    //CONDICIONES COMPUESTAS CON &&
    //Sera requisito que todas las comparaciones sean verdaderas para que la condicion compuesta sea verdadera
    let nombreI = prompt("Ingresar nombre");
    let apellidoI = prompt("Ingresar apellido");

    if ((nombreI != "") && (apellidoI != "")){
        alert("Nombre: " + nombreI + " Apellido: " + apellidoI);
    } else {
        alert("Error: Ingresar nombre y apellido");
    }

    //CONDICIONES COMPUESTAS CON ||
    //Sera requisito que al menos una de las comparaciones sea verdadera para que la condicion compuesta sea verdadera
    //let ejemploA = prompt("Ingresar nombre");

    if ((ejemploA == "LUCAS") || (ejemploA == "lucas")){
        alert("El nombre ingresado es Lucas");
    } else {
        alert("El nombre ingresado NO ES Lucas");
    }

    //COMBINACION DE OPERADORES && y ||
    //Es posible combinar ||(OR) y &&(AND) para hacer comparaciones cada vez mas complejas

    let usuarioIngresado = prompt("Ingresar nombre");

    if ((usuarioIngresado != "") && ((usuarioIngresado === "LUCAS") || (usuarioIngresado === "lucas"))){
        alert("Hola Lucas");
    } else {
        alert("Error: Ingresar nombre valido");
    }

    //Las expresiones logicas son evaluadas de izquierda a derecha
    //Es necesario agrupar las operaciones para asegurar que se cumpla como uno lo desea
    //El cambio de agrupacion con los parentesis produce resultados diferentes

    //No es lo mismo:
        // if ((nombreIngresado != "") && ((nombreIngresado == "LUCAS") || (nombreIngresado == "lucas"))){}
    //Que:
        // if (((nombreIngresado != "") && (nombreIngresado == "LUCAS")) || (nombreIngresado == "lucas")){}
