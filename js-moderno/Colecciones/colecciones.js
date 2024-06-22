/***********************************************************

Las colecciones son estructuras de datos que permiten almacenar y organizar grupos de objetos de manera eficiente. Estas estructuras son fundamentales para el desarrollo de aplicaciones web, ya que proporcionan una forma flexible y escalable de manejar conjuntos de datos.


Características principales de las colecciones en Java:

    Agrupación de objetos: Las colecciones permiten agrupar objetos de una misma clase o de clases compatibles, facilitando su manejo y procesamiento conjunto.
    Tipificación genérica: Java implementa colecciones genéricas, lo que significa que pueden almacenar objetos de cualquier tipo compatible. Esto permite una mayor flexibilidad y reutilización del código.
    Diversidad de estructuras: El framework de colecciones de Java ofrece una amplia variedad de estructuras de datos, como listas, conjuntos, mapas y colas, cada una con sus propias características y comportamientos.
    Operaciones comunes: Las colecciones proporcionan métodos comunes para realizar operaciones básicas sobre los elementos almacenados, como agregar, eliminar, buscar y obtener información.
    Integración con el lenguaje: Las colecciones están estrechamente integradas con el lenguaje Java, lo que facilita su uso y manipulación dentro de los programas.

Beneficios del uso de colecciones:

    Organización y gestión de datos: Las colecciones permiten organizar y gestionar de manera eficiente conjuntos de datos complejos, simplificando el trabajo con grandes cantidades de información.


    Mejora de la legibilidad y mantenibilidad del código: El uso adecuado de colecciones mejora la legibilidad y mantenibilidad del código, ya que permite expresar de forma clara y concisa las operaciones sobre conjuntos de datos.


    Reutilización del código: Las colecciones genéricas promueven la reutilización del código, ya que permiten escribir código que puede trabajar con diferentes tipos de datos sin necesidad de modificaciones.


    Optimización del rendimiento: Las estructuras de datos eficientes utilizadas en las colecciones permiten optimizar el rendimiento de las aplicaciones, especialmente al trabajar con grandes conjuntos de datos.



COLECCIONES:

    Proxy:

    Un proxy en JavaScript es un objeto que proporciona una interfaz interceptadora para acceder y modificar otro objeto, conocido como objeto objetivo. Actúa como un agente que media entre el código y el objeto objetivo, permitiendo personalizar el comportamiento de las operaciones básicas como lectura, escritura y creación de propiedades.

    Casos de uso:

    Validación de datos: Garantizar la integridad de los datos antes de almacenarlos.

    Control de acceso: Limitar el acceso a propiedades o métodos específicos en función de permisos.

    Registro de actividad: Registrar las operaciones realizadas sobre un objeto para fines de auditoría o depuración.
    Encapsulación de lógica: Ocultar la implementación interna de un objeto para facilitar su uso.


    Proxy, Set y Map en JavaScript: Una comparación detallada

Proxy:

Un proxy en JavaScript es un objeto que proporciona una interfaz interceptadora para acceder y modificar otro objeto, conocido como objeto objetivo. Actúa como un agente que media entre el código y el objeto objetivo, permitiendo personalizar el comportamiento de las operaciones básicas como lectura, escritura y creación de propiedades.

Características principales:

    Interceptación: Permite interceptar y modificar las operaciones realizadas sobre el objeto objetivo.
    Validación: Se puede implementar lógica de validación para controlar el acceso y la modificación de datos.
    Registro: Se puede registrar el historial de operaciones realizadas sobre el objeto objetivo.
    Encapsulación: Oculta la implementación interna del objeto objetivo, mejorando la modularidad.

    Casos de uso:

    Validación de datos: Garantizar la integridad de los datos antes de almacenarlos.

    Control de acceso: Limitar el acceso a propiedades o métodos específicos en función de permisos.

    Registro de actividad: Registrar las operaciones realizadas sobre un objeto para fines de auditoría o depuración.

    Encapsulación de lógica: Ocultar la implementación interna de un objeto para facilitar su uso.

Set:

Un set en JavaScript es una colección de valores únicos. Almacena valores de cualquier tipo, incluyendo primitivos y objetos. Los sets son eficientes para verificar si un valor existe en la colección y para recuperar valores.

    Casos de uso:

    Eliminar duplicados: Eliminar elementos duplicados de una lista.

    Conjunto de datos: Almacenar un conjunto de datos únicos, como identificadores o nombres de usuario.

    Caché: Implementar un caché de datos para almacenar elementos de acceso frecuente.

    Conjunto de relaciones: Representar relaciones entre entidades, como amistades en una red social.


Map:

Un map en JavaScript es una colección de pares clave-valor. Almacena pares donde la clave puede ser de cualquier tipo, y el valor puede ser de cualquier tipo. Los maps son eficientes para recuperar valores a partir de claves.

    Casos de uso:

    Diccionarios: Implementar diccionarios de datos, como tablas de traducción o configuraciones.

    Objetos con clave dinámica: Almacenar datos con claves que se determinan en tiempo de ejecución.

    Caché: Implementar un caché de datos para almacenar datos asociados a claves únicas.

    Configuraciones: Almacenar configuraciones de aplicación o preferencias de usuario.





************************************************************/



/*PROXY*/
const target = { nombre: "Juan" };

const handler = {
  get(objeto, propiedad, receptor) {
    if (propiedad === "nombre") {
      return "Sr. " + objeto.nombre;
    } else {
      return objeto[propiedad];
    }
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.nombre); // Sr. Juan



/*SET*/
const listaConDuplicados = [1, 2, 3, 1, 2, 4, 5, 3, 6];

const set = new Set(listaConDuplicados);//Elimina los duplicados

var sinDuplicados = [];

set.forEach ((value)=>{
   sinDuplicados.push(value); 
})

console.log(sinDuplicados);//[1,2,3,4,5,6]



/*MAP*/
const map = new Map();

map.set('persona01','Antonio');
map.set('persona02','Rodrigo');
map.set('persona03','Ángela');
map.set('persona04','María');

for (let index = 1; index < map.size+1; index++) {
    console.log(map.get('persona0'+index));//Antonio, Rodrigo, Ángela, María. 
}