// console.log("1 x 0 = ", 1 * 0);
// console.log("1 x 1 = ", 1 * 1);
// console.log("1 x 2 = ", 1 * 2);
// console.log("1 x 3 = ", 1 * 3);
// console.log("1 x 4 = ", 1 * 4);
// console.log("1 x 5 = ", 1 * 5);
// console.log("1 x 6 = ", 1 * 6);
// console.log("1 x 7 = ", 1 * 7);
// console.log("1 x 8 = ", 1 * 8);
// console.log("1 x 9 = ", 1 * 9);
// console.log("1 x 10 = ", 1 * 10);

// for (i = 1; i < 11; i++) {
//     console.log("1 x", i, "=", 1 * i);
// }

// // Primera vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}
// // Segunda vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}
// // Tercera vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}

//Declaración de la función tablaDelUno()
// function tablaDelUno() {
//     for (i = 1; i <= 10; i++) { console.log("1 x", i, "=", 1 * i); }
// }

//Bucle que ejecuta 3 veces la función tablaDelUno()
// for (let i = 1; i <= 3; i++) { tablaDelUno(); }

// function saludarComision(){
//     let num = "1254"
//     if( num === 1254)
//         return true
//     else{
//         return "No son iguales";
//     } 
// }
// // hola = 
// // let Bienvenido =  Saludar();
// // console.log("Console log de hola despues de la funcion",Saludar());
// // Saludar()
// let sal = saludarComision();
// console.log(sal);
// console.log(Bienvenido);
// hola = 16654;

// Funciones sin parámetros:
saludarComisionSinPar()
// ● Que no devuelven valores


// ● Que devuelven valores
function saludarComisionDevuelveParametro(){
    let saludo = "Hola Comision";
    return saludo;    
}
// Funciones con parámetros:
// ● Que no devuelven valores
function saludarComision(numeroDeComision){
    let saludo = "Hola Comision " + numeroDeComision;
    console.log("Que no devuelven valores" , saludo)
}
function saludarComisionSinPar(){
    let saludo = "Hola Comision";
    let suma = 2 + 2;
    console.log("Que no devuelven valores",saludo)

}
// ● Que devuelven valores
function saludarComisionDevuelveParametroPasandoParametros(numeroDeComision){
    let saludo = "Hola Comision" + numeroDeComision;
    return saludo;    
}

let devuelveParametro = saludarComisionDevuelveParametro();
console.log("devuelven valores", devuelveParametro)

saludarComision(22536);

let conParametros = saludarComisionDevuelveParametroPasandoParametros("22536");
console.log("Que devuelven valores", conParametros);