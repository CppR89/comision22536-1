

const autos = ['Chevrolet','Torino','Ferrari','Ford','Dodge'];

// let i = 0;

autos = [];

// console.warn('While')
// // undefined
// // null
// // false
// while( autos[i] ) {
//     if ( i === 1 ){
//         // break;
//         i++;
//         continue;
//     }
    
//     console.log( autos[i] );
//     i++;
// }


console.warn('Do While');
let j = 10;

do {
    console.log( autos[j]);
    j++;
} while( autos[j] );

console.warn('While');
let i = 10;

while( i < autos.length ) {
    if( autos[i]  == 'Chevrolet' ){
        console.log( autos[i] );
        i = i + 1;
        i++;
    }

}