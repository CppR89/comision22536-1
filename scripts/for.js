
const simpson = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < simpson.length; i++ ) {
    console.log( simpson[i] );
}


console.warn('For in');
for( let i in simpson ) {
    console.log( simpson[i] );
}

console.warn('For of');
for( let personaje of simpson ){
    console.log( personaje );
}



