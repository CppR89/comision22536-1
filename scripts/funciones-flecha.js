// function Saludar (){
//     return "Hola a todos";
// }

// Saludar();

// let saludarFlecha = () =>{
//     return "Hola a todos desde funcion Flecha";
// }
// console.log(saludarFlecha);

// let saludarConParametros = (parametro1) =>{
//     return 'Hola ' + parametro1;
// }

// console.log(saludarConParametros("Comision 22536"));


function saludar(nombre) {
    alert('Hola ' + nombre)
}

function procesarEntradaUsuario() {
    var nombre = prompt('Por favor ingresa tu nombre.')
    saludar(nombre);
}
procesarEntradaUsuario()
// saludar(nombre);

// procesarEntradaUsuario(saludar)


//--------------REPASO GIT-----------------
//primera y unica vez (Cuando nos bajamos el repo)
// git clone https://github.com/lucianosignorellibueedu/comision22536.git


// //git pull para actualizar los cambios - Todos los dias - Para los branchs

// //Si hicimos cambios
// git add .
// git commit -m "Comentario"
// git push