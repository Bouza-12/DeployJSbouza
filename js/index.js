


//Este es un comentario de una línea
console.log("==============================");
console.log("==============================");


/*
Este es otro
comentario, 
pero de 
varias 
líneas
*/

console.log('Soy el código del Archivo Externo de JS.');

//VARIABLES EN JAVASCRIPT - EC1 2 3 / 4 5 6
var nombreEmpleado; //es una declaración de una varianle
//var 123Hola; //no se pueden nombrar variables que inician en número
//var -país;//no iniciamos una variable con - y tildes
var $apellidoEmpleado; //podemos iniciar una variables con el símbolo de peso
var _provinciaEmpleado; //podemos inicar una variable con guión bajo

console.log("==============================");


console.log('Cambio de variables');
var nombreEmpleado = 'Berni'; //asignar la info a la variable
console.log(nombreEmpleado);

nombreEmpleado = 'Pablo'; 
console.log(nombreEmpleado);


let continente;
let pais = "Argentina";//declaración y asignación de una variable tipo string
let edad = 25;
console.log(edad);


edad = 35;
console.log(edad);

edad = 'Mario'
nombreEmpleado = 150;
console.log(edad);
console.log(nombreEmpleado);

console.log("==============================");

continente = 'América del Sur';


const PI = 3.14454838453; //variable que no cambia en toda la ejecución del sistema
const IVA = 21;

console.log(nombreEmpleado);
console.log(pais);
console.log(edad);
console.log(continente);
console.log(PI);

console.log("==============================");
console.log("==============================");

//let let = 152; //no podemos usar palabras reservadas del lenguaje en otras indicaciones
//var var = 'Mendoza'


//Variables booleanas
let verdadero = true;
let falso = false;

//Arrays 
//                0         1        2          3         4
let frutas = ['Manzana', 'Pera', 'Ciruela', 'Pomelo', 'Sandía'];
let masFrutas = ['Manzana', 'Pera', 'Ciruela', 'Pomelo', 'Sandía'];
let notasAlumnos = [10, 8, 9, 7, 10];

//Acceso a Todos los elemntos del Array
console.log(frutas);


//Introducir datos al Array
frutas.push('Uvas');

let todasFrutas = frutas.concat(masFrutas);
console.log(todasFrutas);

//Acceso a UN elemento del Arreglo
console.log('La fruta en el índice 3 del Arrary de Frutas es: ' + frutas[3]);
console.log(notasAlumnos);


let decimal = 25.36;

//Acceso al DOM
document.write('<p>Esta es nuestra primer clase de JavaScript!!</p>')


//Variable tipo Objeto
const Persona = {
    nombre : 'Berni',
    dni: 123456789,
    provincia:'Mendoza',
    pais: 'Argentina'
}

//Imprimimos la variable de tipo Objeto
console.log(Persona);

console.log('Quiero los datos de la persona con DNI: ' + Persona.dni);

















