// Condicionales
/*
let edad = 18

if( edad < 18){
    console.log("Es menor de edad, no puede entrar")
}else{
    console.log("Es mayor de edad, puede entrar")
}


// Switch

let DiaSemana = 'Lunes';

switch(DiaSemana) {
    case 'Domingo':
        console.log('Hoy es domingo');
        break;

    case 'Viernes':
        console.log('Hoy es Viernes');
        break;

    case 'Lunes':
        console.log('Hoy es Lunes');
        break;

    default:
        console.log('Es otro día');
}


// operador ternario
//Checkea si es true o false pero solo una condición

let esMayor = (edad >= 18) ? true : false;
console.log(esMayor); // Tiene que dar true o false


//Funciones "antigua"

function saludar(nombre){
    console.log("hola " + nombre);
    return
}
saludar('pepe');


// Función flecha "actual"

const saludar2 = nombre =>{
    console.log(`Hola, ${nombre}`);
} 
saludar2('Juan');


// ++ Funciones 

function suma(num1, num2){
    return num1 + num2;
}
let resultado = suna(5,3);
console.log("La suma total es: "+ resultado);


//Otra función con condición

function EsMayorDeEdad(edad){
    return(edad >= 18) ? true : false
}


function mostrarMensajeEdad(edad){
    console.log(esMayorDeEdad(edad) ? "Sos mayor de edad" : "Sos menor de edad");
}
mostrarMensajeEdad(17)
*/

//Metodos de Array

let numeros = [1,2,3,4,5]

//Map
let cuadradros = numeros.map(numero => numero * numero)
console.log(cuadradros)

// Filter
let pares = numeros.filter(numero => numero % 2 == 0)

// Reduce
let sumaTotal = numeros.reduce((total,numero) => total + numero, 0)
console.log(sumaTotal)


//indexOF ---> devuelve el valor del indice que selecciones ej:"X = [0,1,2,3]"

let frutas = ['Manzana','Banana','Anana','Uva']
let indice = frutas.indexOf("Uva")
console.log(indice)


//Push

let num = [1,2,3,4,5]
num.push(5)


//Pop

let ultimoNumero = num.pop();
