//OBJETOS
//Para ingresar al valor del objeto EJ. operador1.nombre

const operador1 = {
    nombre : "Julian",
    edad : "20",
    cargo : "Operario",
    ingreso : "10-01-2020"
}

const operador2 = {
    nombre : "",
    edad : "",
    cargo : "",
    ingreso : ""
}

//FUNCION CONSTRUCTORA
//El constructor de un objeto es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario

function Empleado(nombre, apellido, cargo, ingreso){
    this.nombre = nombre
    this.apellido = apellido
    this.cargo = cargo
    this.ingreso = ingreso
}

const empleado1 = new Empleado("Lucas", "Garcia", "Software Developer", 2022)

/*
const IVA = 1.21
function Producto (nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.precioConIva = function() {
        let precioFinal = this.precio * IVA
        return "$" + precioFinal
    }
    this.restarStock = function(unidades){
        this.stock = this.stock - unidades
    }
}
const prod1 = new Producto("Notebook 14 pulgadas", 150000, 20)
const prod2 = new Producto("Notebook 17 pulgadas", 200000, 5)
const prod3 = new Producto("MacBook 13 pulgadas", 300000, 2)
*/


//CLASES

const IVA = 1.21
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.precioConIva = function () {
            let precioFinal = this.precio * IVA
            return "$" + precioFinal
        }
        this.restarStock = function (unidades) {
            this.stock = this.stock - unidades
        }
    }
}


    function nuevoProducto() {
        nombre = prompt("Ingrese el nombre del producto")
        precio = prompt("Ingrese precio del producto")
        stock = prompt("Ingrese el stock")
        const prodNuevo = new Producto(nombre, stock, precio)
        console.log(prodNuevo)
}