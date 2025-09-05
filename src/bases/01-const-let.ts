/**
 * Temas claves: uso del método includes
 * comillas sencillas una buena práctica como primera opcion
 */
let name = 'Ana';
const edad: number = 23;

console.log(`hello ${name}`);

name = 'Elaine';
const incl = name.includes('a'); // tema clave

console.log(`hello ${name}, ${edad}`);
console.log('la edad es ', edad);
console.log(`la letra A incluye en name: ${incl}`);

