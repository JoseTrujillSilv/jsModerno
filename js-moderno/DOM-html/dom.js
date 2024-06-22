/***********************************************************

Objeto HTML: Una forma simplificada y personalizada de interactuar con el DOM de JavaScript

El objeto HTML surge como una propuesta para simplificar y mejorar la nomenclatura del objeto DOM de JavaScript, permitiendo una interacción más sencilla y personalizada.

Estructura del objeto HTML:

Para una nomenclatura correcta, se deben seguir las siguientes pautas para nombrar las variables del objeto:


Etiquetas (tags):

Se representan sin guiones ni caracteres especiales.

const html = {
  div: document.getElementsByTagName('div'),
};


Identificadores (id):

Se distinguen de otros elementos utilizando dos guiones bajos al inicio del nombre.

const html = {
  __idMarca: document.getElementById('id-marca'),
};


Clases (class):

Se diferencian del resto de elementos utilizando dos guiones bajos al inicio y al final del nombre.


const html = {
  __class__: document.getElementsByClassName('class'),
};


Ventajas del objeto HTML:

Simplicidad: La nomenclatura intuitiva facilita la comprensión y el uso del código.

Personalización: Permite crear nombres de variables personalizados para mayor claridad.

Diferenciación: Los guiones bajos ayudan a distinguir entre etiquetas, IDs y clases.

En resumen, el objeto HTML ofrece una alternativa práctica y organizada para interactuar con el DOM de JavaScript, mejorando la legibilidad y el mantenimiento del código.


************************************************************/


const html = {
    div:document.getElementsByTagName('div'),
    __div:document.getElementById('div'),
    __div__:document.getElementsByClassName('div')
}

html.div[0].classList.add('box01');//Añade una clase al primer div
html.__div.classList.add('box02');//Añade una clase al segundo div
html.__div__[0].classList.add('box03');//Añade una clase al tercer div
