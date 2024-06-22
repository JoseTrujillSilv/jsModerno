/*
Para poder simplificar los switch y además hacerlos más optimizados y legibles, podemos usar objetos en lugar de swicth. 

Veamos un ejemplo:
*/

let num = 3;

const swicth = {
    1:'Totalmente en desacuerdo',
    2:'Parcialmente en desacuerdo',
    3:'No se',
    4:'Parcialmente de acuerdo',
    5:'Totalmente de acuerdo'
}

console.log(swicth[num]);

/*Ejemplo con switch....*/

switch (num) {
    case 1:
        console.log('Totalmente en desacuerdo')
        break;
        case 2:
            console.log('Parcialmente en desacuerdo')
            break;
        case 3:
            console.log('No se')
            break;
            case 4:
                console.log('Parcialmente de acuerdo')
                break;
                case 5:
                    console.log('Totalmente de acuerdo')
                    break;
}

