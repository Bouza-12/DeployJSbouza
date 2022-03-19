
//Operadores en JS
//Asignación =
let numero = 25;
console.log('El número inicial es: ' + numero);

//Incremento ++ : suma uno a la variable 
//Una forma de sumar un número
let otroNumero = numero + 1;
console.log(otroNumero);

//Otra forma
numero = numero + 1;
//25 = 25 + 1;

console.log(numero);

//Utilizo el operador ++
numero++;
console.log(numero);

//Operador decremento --
numero--;

console.log(numero);

console.log("==============================");
console.log("==============================");

let uno = -100;
let dos = 12;
console.log(uno);
console.log(dos);

//Sumar 
let resultado = uno + dos;
console.log('El resultado de la suma es: ' + resultado);

//Resta
resultado = uno - dos;
console.log('El resultado de la resta es: ' + resultado);

//Multiplicación
resultado = uno * dos;
console.log('El resultado de la multiplicación es: ' + resultado);

//División
resultado = uno / dos;
console.log('El resultado de la división es: ' + resultado);

//Módulo
resultado = uno % dos;
console.log('El resultado del módulo es: ' + resultado);

resultado = (200 + 250) * uno / dos;
console.log('El resultado de la operación es: ' + resultado);

//Potencia
resultado = uno ** 2;
console.log('El resultado de lo potencia es: ' + resultado);

//Operardor de Negación
let falso = false;
console.log('Antes de la negación: ' + falso);
console.log(!falso);

console.log("==============================");
console.log("==============================");

//Operadores lógicos && - || 
let codigo = 123456;
let usuario = 'Berni';

if(codigo == 12345 && usuario == 'Berni'){
    console.log('Bienvenido a la Red Social de tu Preferencia');
}else{
    console.log('Contraseña o Usuario Incorrectos');
}

let edad = 18;
let dinero = false;

if(edad == 18 && dinero == true){
    console.log('Genial! podés comprar bebidas!!');
}else{
    console.log('Lo siento, será en otra oportunidad');
}

//O lógico
if(codigo == 12345 || usuario == 'Berni'){
    console.log('Bienvenido a la Red Social de tu Preferencia');
}else{
    console.log('Contraseña o Usuario Incorrectos');
}


if(edad == 18 || dinero == true){
    console.log('Genial! podés comprar bebidas!!');
}else{
    console.log('Lo siento, será en otra oportunidad');
}

console.log("==============================");
console.log("==============================");

/* 
> mayor que
< menor que
== igual, para comparación
>= mayor o igual
<= menor o igual
!= distinto a 
*/

edad = 18;
if(edad >= 18){
    console.log('Genial! podés comprar bebidas!!');
}else{
    console.log('Lo siento, será en otra oportunidad');
}

edad = 17;

if(edad < 18){
    console.log('Lo siento, no podés ingresar a la Fiesta!!');
}

let lugares = 'lleno'

if(lugares != 'libre'){
    console.log('Lo siento, ya NO hay lugar en el Cine');
}else{
    console.log('Compre todas las entradas que necesite!!');
}


//If con else IF

let comprar = true;
let asientos = false;

if (comprar) {
    console.log('Bienvenido a la empresa de Pasajes'); 
    document.write('Bienvenido a la empresa de Pasajes')   
}

if(comprar && asientos){
    console.log('Lo sentimos, este vuelo viaja completo y no tenemos asientos');
}else{
    console.log('Esta invitado a viajar cuando quiera');
}












