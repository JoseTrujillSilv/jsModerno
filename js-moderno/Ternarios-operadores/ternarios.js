/*
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

Veamos ejemplos:
*/

let palanca = false;

!palanca?console.log('palanca es falso'):console.log('palanca es verdadero');

/*
Multiples ternarios:
Una secuencia de operadores de signos de interrogación ? puede devolver un valor que depende de más de una condición.

Ejemplo:
*/

let age = 18;

let message = (age < 3) ? 'Eres un bebe' :
  (age < 18) ? 'Eres menor de edad' :
  (age < 100) ? 'Eres mayor de edad' :
  '¡Qué edad tan inusual!';

console.log(message)