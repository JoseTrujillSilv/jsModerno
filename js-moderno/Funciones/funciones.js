/*
Forma super optimizada de representar las funciones.

Nota: usar esta nomeclatura solamente en funciones rápidas o sencillas. NO RECOMENDABLE PARA FUNCIONES LARGAS.

Funciones cortas --> const funcion = ()=> contenido de la funcion;

Funciones largas --> fuction funcion(){contenido de la funcion};
*/

let num1 = 67;
let num2 = 22;

const suma = (num1,num2) => num1+num2;
const resta = (num1,num2) => num1-num2;
const multiplicacion = (num1,num2) => num1*num2;
const division = (num1,num2) => num1/num2;


console.log('La suma de ambos números es: '+suma(num1,num2));
console.log('La resta de ambos números es: '+resta(num1,num2));
console.log('La multiplicación de ambos números es: '+multiplicacion(num1,num2));
console.log('La división de ambos números es: '+division(num1,num2));
