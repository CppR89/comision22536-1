// alert('Hola desde app.js');


// var y let 

// let comisionLet = "22536 con Let";
// var comisionVar = "Comision 22536 con Var";
// // var windows.outerWidt"Pepito";
// // console.log( console.log('Hola Mundo') );

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Comision 22536',
    x = a + b;

const saludo =  c + d;

// console.log('%c Mis variables', 'color:blue; font-weight: bold');
// console.log({ a });
// console.log({ b });
// console.log({ c });

// c = 'Hola de nuevo';

// // console.table({a, b, c, d, x });

// let miNuevoNombre = 'Cosme Fulanito';


// console.log("He obtenido un", calificacion);

/*Otro ejemplo*/
// var menu = prompt("Ingrese una opción (1: Abrir programa, 2: Salir del programa, etc.): ", "");
// if (menu == "1") {
//   alert("Bienvenido!");
// }
// else if (menu == "2") {
//   alert("Adiós!");
// }
// else if (menu == "3") {
//   alert("Opción 3");
// }
// else {
//   alert("No ha ingresado una opción válida!");
// }

/*************** SWITCH ****************/
// var nota = prompt('¿Cuál una nota?');
// console.log("He realizado mi examen. Mi resultado es el siguiente:");
// switch (parseInt(nota)) {
//   case 10:
//     calificacion = "Sobresaliente";
//     break;
//   case 9:
//   case 8:
//     calificacion = "Notable";
//     break;
//   case 7:
//   case 6:calificacion = "Maso";
//   case 5: 
//   case 4:
//     calificacion = "Bien";
//     break;
//   case 3:
//   case 2:
//     calificacion = "Suficiente";
//     break;
//   case 1:
//   case 0:
//     calificacion = "Insuficiente";
//     break;
//   default:
//     // Cualquier otro caso
//     calificacion = "Nota errónea";
//     break;
// }
// console.log("He obtenido un", calificacion);

// let nota = 10;
// if (nota < 5) {
//     calificacion = "suspendido";
//     } else {
//     calificacion = "aprobado";
//     }
//     console.log("Estoy", calificacion)
// // Operador ternario: (condición ? verdadero : falso)
// var calificacion = nota < 5 ? "suspendido" : "MUY BIEN";
// console.log("Estoy", calificacion);


var altura = 0;
var edad = 0;
let nombre = "Pedro";
altura = parseFloat(prompt("Ingrese la altura").replace(',','.'));
edad = parseInt(prompt("Ingrese la edad"));
if (altura > 1.30 && edad > 14) {
console.log("Cumple con los requisitos");
} else{
console.log("No cumple con los requisitos");}