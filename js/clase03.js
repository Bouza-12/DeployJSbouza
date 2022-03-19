
console.log('Bienvenidos a la Clase 03');

console.log("==============================");

//If anidados
let edad = prompt('Introduzca su edad: ');

if (edad >= 20) {
    let nombre = prompt('Ingrese su nombre: ');
    
    if (nombre == 'Pedro') {
        alert('Bienvenido a la Aplicación ' + nombre);
    }else{
        alert('Usted tiene 20 años o más, pero no es Pedro')
    }    
}

console.log("==============================");

//Switch
let pais = prompt('Ingresa la primer letra de tu país');
console.log(pais);

pais.toLowerCase();
console.log(pais);

let minuscula = pais.toLowerCase(pais);
console.log(minuscula);

switch (pais.toLowerCase()) {
    case 'a':
        console.log('Tu país es Argentina'); 
        break;
    case 'u':
        console.log('Tu país es Uruguay');
        break;
    case 'c':
        console.log('Tu país es Chile'); 
        break;
    case 'b':
        console.log('Tu país es Brasil');
        break;
    default:
        console.log('No tenemos registrado ese País');
        break;
}

//Objeto Fecha
let dia = new Date();

console.log(dia);

//Sólo el año
console.log(dia.getFullYear());

//Otros datos que obtengo del objeto fecha
console.log(dia.getMonth() + 1);
console.log(dia.getDay());
console.log(dia.getHours());








