function dosnumerosintroducidosporelusuario(){
    //Realiza un algoritmo que muestre todos los números entre dos números introducidos por el usuario.
    
    console.log("****PRIMER EJERCICIO****")
    
    let primero = prompt("Ingresa el primer numero valor")
    let segundo = prompt("Ingresa el segundo numero valor")
    let i = parseInt(primero) + 1
    for(i; i < segundo; i++){
        console.log(i)
    
        
    }

    function nuemerosimpares(){
//Mostrar los números impares que hay entre dos números introducidos por el usuario.

console.log("****SEGUNDO EJERCICIO****")

let primero = prompt("Ingresa el primer numero valor")
let segundo = prompt("Ingresa el segundo numero valor")
let i = parseInt(primero) + 1
for(i; i < segundo; i++){
    if(i%2 != 0){
        console.log(i)

    
    }
    
    function multiplicacion(){

//Tabla de multiplicar de un número introducido por pantalla.

console.log("****TERCER EJERCICIO****")

let tabla = prompt("Ingrese el Valor del que queira la Tabla de Multiplicar")

for(let i = 1; i < 21; i++){
    console.log(tabla + " X " + i + " = " + tabla*i)
}
    
    }

    function determinarelnumero(){
//Desarrolle un algoritmo que permita leer un valor cualquiera N y escriba si dicho número es par o impar. //Tabla de multiplicar de un número introducido por pantalla.

console.log("****CUARTO EJERCICIO****")

let numero = prompt("Es Par o Impar?")

if(numero%2 == 0){
    console.log("El numero " + numero + " es PAR")
}else{
    console.log("El numero " + numero + " es IMPAR")
}

    
    }

    function ordenmayormenor(){
//Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a mayor, si es el caso.
console.log("****QUINTO EJERCICIO****")

let primero = prompt("Ingresa el primer numero valor")
let segundo = prompt("Ingresa el segundo numero valor")

if(primero < segundo){
    console.log(` 1. ${primero}\n 2. ${segundo}`)          
}else{
    console.log(` 1. ${segundo}\n 2. ${primero}`)          
}

    
    }

    function primoono(){
//Desarrolle un algoritmo que permita leer un valor entero positivo N y determinar si es primo o no.

console.log("****SEXTO EJERCICIO****")

let positivo = prompt("Ingresa un valor positivo N para saber si es primo o no")
positivo = parseInt(positivo)

const esPrimo = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}
	console.log(` ${positivo} es primo?`, positivo, esPrimo(positivo)? " Si es primo":"No es primo");

    
    }

    function cajaregistradora(){
//Desarrolle un algoritmo que funcione como caja registrador.

console.log("****SEPTIMO EJERCICIO****")

let productos = prompt("Cuantos productoas vas a registrar")
productos = parseInt(productos)

suministros = []
precios = []
let total = 0
for(let i = 0; i < productos; i++){
    let suministro = prompt(`Como se llama el producto N.${i+1}`)
    suministros.push(suministro)
    let precio = prompt(`Cual es el precio de ${suministro}`)
    precios.push(precio)
}
console.log("Sus Productos fueron: \n")
for(let n=0; n < productos; n++){
    console.log(`${n+1}. ${suministros[n]} costo: ${precios[n]}`)
    total = total + parseInt(precios[n])
}
console.log("El costo total de la compra es: " + total)

    
    }

    function mayoromenor(){
//Desarrolle un algoritmo que permita leer dos valores distintos, determinar cual de los dos valores es el mayor y escribirlo.

console.log("****OCTAVO EJERCICIO****")

let primero = prompt("Ingresa el primer numero valor")
let segundo = prompt("Ingresa el segundo numero valor")

if(primero > segundo){
    console.log(` ${primero} es Mayor`)          
}else{
    console.log(`${segundo} es Mayor`)          
}

    
    }

    function suma(){
// Desarrolle un algoritmo que realice la sumatoria de los números enteros comprendidos entre el 1 y el 10, es decir, 1 + 2 + 3 + …. + 10.
console.log("****NOVENO EJERCICIO****")

let total = 0
for(let i=1; i < 11; i++){
    total += i
}

console.log("La suma de los numero comprendidos de 1 hasta 10 es " + total)

    
    }

    function areavolumencilindro(){
// Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro dado su radio (R) y altura (H). 

console.log("****DECIMO EJERCICIO****")

let nR = prompt("Ingresa el RADIO del cilindro")
let nH = prompt("Ingresa el ALTURA del cilindro")

let volumen = Math.PI * Math.pow(nR,2) * nH
let area = (2*Math.PI * nR *nH) + ((2*Math.PI) * Math.pow(nR,2))


console.log("El Volumen del Cilindro es " + volumen)
console.log("El Area del Cilindro es " + area)

    
    }

    function salario(){
//Dadas las horas trabajadas de una persona y el valor por hora.Calcular su salario e imprimirlo.

console.log("****ONCEAVO EJERCICIO****")

let horas = prompt("Horas Trabajadas")
let sueldo = prompt("Valor del sueldo por Hora")


console.log(`El salario total del trabajador seria  ${horas*sueldo}`)

    
    }

    function nombresaludo(){
//Realiza el algoritmo necesario para que el ordenador te pregunte tu nombre y te responda con un saludo personalizado.

console.log("****DOCEAVO EJERCICIO****")

let nombre = prompt("HOLA! Soy el ordenar, como es tu nombre?")

console.log(`Hola ${nombre}, me llamo ordenador, y soy tu amigo y te quiero saludar`)

    
    }

    function perimetrocuadrado(){
//Realiza un algoritmo que determina el perímetro de un cuadrado

console.log("****TRECEAVO EJERCICIO****")

let lado = prompt("Ingresa el largo de uno de los lados del cuadrado")

console.log("El perimetro del cuadro seria " + lado*4)

    
    }

    function edadmensaje(){
// Realiza un algoritmo que pregunte y tu edad y muestre un mensaje en pantalla agradable para ti.

console.log("****CATORCEAVO EJERCICIO****")

let edad = prompt("Hola! Dime cuantos años tienes")

console.log(`Wooow solo tienes ${edad}, aun tienes mucho tiempo para hacer lo que te propongas, te deseo suerte")

    }

    function arearectangulo(){
        //Realiza un algoritmo que determine el área de un rectángulo..

        console.log("****QUINCEAVO EJERCICIO****")
        
        let base = prompt("Cual es la BASE de tu rectangulo")
        let altura = prompt("Cual es la ALTURA de tu rectangulo")
        
        console.log("Tu rectangulo tiene un AREA de " + base*altura)

    
    }

    function diasvividos(){
        var diasVida = parseInt(prompt("Cuántos dias has vivido",""));

        var numAnos = Math.floor(diasVida / 365);
        var diasRestantes = diasVida % 365 ;
        var numMeses = Math.floor(diasRestantes / 30);
        diasRestantes = diasRestantes % 30;
        alert ("Ha vivido" + numAnos +" años, " + numMeses + "meses y " + diasRestantes + " dias,");


    }
   
    
















