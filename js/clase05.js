
//Array de Objetos
let trabajadores = [
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

let inversionistas = [
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

console.log(inversionistas);
//Métodos de los Arrays

console.log(trabajadores);

//Agregar datos - objetos
trabajadores.push({
    nombre: 'Maria',
    cargo: 'Recursos Humanos',
    telefono: 123456789
});

console.log(trabajadores);

let imprimir = document.getElementById('caja');

imprimir.innerHTML =`La nueva empleada de la empresa es ${trabajadores[4].nombre} y su cargo es Gerente de ${trabajadores[4].cargo} y su telefono es: ${trabajadores[4].telefono}.`;

//agrego datos al inicio del Array

trabajadores.unshift({
    nombre: 'Mario',
    cargo: 'Cajero',
    telefono: 123456789
});

console.log(trabajadores);

//Eliminamos objetos
trabajadores.splice(4);
//Reemplazamos objetos
trabajadores.splice(4, 1, {
    nombre: 'Pablo',
    cargo: 'Transporte',
    telefono: 123456789
});

console.log(trabajadores);

//Unos 2 Arrays distintos. Es bueno crear la union de arrays en una nueva variable
let empresa = trabajadores.concat(inversionistas);

console.log(`Los integrantes de la empresa son ${empresa}`)

let mayores = inversionistas.slice(2)
console.log(mayores);