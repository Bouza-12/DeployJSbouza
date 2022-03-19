
let titulo = document.getElementById('titulo');

let otroTitulo = document.getElementById('otroTitulo');

console.log('El elemento capturado es: ' + titulo);

titulo.innerText='Bienvenido a la Clase 04';

otroTitulo.innerHTML='<div> Nuevo Elemento para el HTML </div>';


let uno = document.querySelector('.uno');
console.log(uno);

//Array de Objetos
let empleados = [
    {
        nombre: 'Juan',
        cargo: 'Administrador',
        telefono: 123456789
    },
    {
        nombre: 'Pepe',
        cargo: 'Auxilar',
        telefono: 123456789 
    },
    {
        nombre: 'Laura',
        cargo: 'Contadora',
        telefono: 123456789
    },
    {
        nombre: 'Pablo',
        cargo: 'Abogado',
        telefono: 123456789
    }
];

//Método que ordena los arreglos
empleados.sort();

//Acceso al array de emplados
console.log('Accedemos a todo el array');
console.log(empleados);

//Acceso a uno de los elementos del Arreglo de empleados
console.log('Accedemos a un elemento del array');
console.log(empleados[1]);

//Acceso a las propiedades de un elemento del objeto
console.log('Accedemos a una propiedad del array');
console.log(empleados[1].cargo);


let ultimo = empleados[empleados.length -1];

console.log(`El último empleado es: ${ultimo.nombre}, su cargo es ${ultimo.cargo} y su contacto es ${ultimo.telefono}.`);

console.log('El último empleado es: ' + ultimo.nombre + ',' + ' su cargo es ' + ultimo.cargo + ' y su contacto es ' + ultimo.telefono + '.');


