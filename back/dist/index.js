"use strict";
const calculaArea = (lado1, lado2) => lado1 * lado2;
console.log(calculaArea(5, 6));
const presentarUsuario = (name, lastName, age) => {
    if (age !== undefined) {
        console.log(`Hola soy ${name} y tengo ${age} años de edad.`);
    }
    else if (lastName !== undefined) {
        console.log(`Hola soy ${name} ${lastName}`);
    }
    else
        console.log(`Hola soy ${name}`);
};
presentarUsuario("Homero");
presentarUsuario("Marge", "Bubbie");
presentarUsuario("Lisa", "Simpson", 8);
const persona = {
    nombre: "Marge",
    edad: 35,
};
console.log(persona);
const empleado = {
    nombre: "Homero",
    edad: 37,
    puesto: "Jefe de Seguridad",
    empleadoDelMes: true,
};
console.log(empleado);
const celularCODIGO = {
    nombre: "Smartphone",
    precio: 500,
    marca: "Samsung",
    modelo: "Galaxy S20",
};
const remeraCODIGO = {
    nombre: "Camiseta",
    precio: 20,
    talla: "M",
    color: "Azul",
};
console.log(celularCODIGO);
console.log(remeraCODIGO);
const tarea = {
    titulo: "TypeScript II",
    descripcion: "Configuración y práctica",
    completada: false,
};
const tareaParaEntregar = {
    titulo: "Proyecto Integrador M3",
    completada: false,
    fechaLimite: "2024-03-14",
};
console.log(tarea);
console.log(tareaParaEntregar);
