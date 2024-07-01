"use strict"
/* -------------------------------------------- */

// console.log('Module index started')

/* -------------------------------------------- *
// Export:

function test() {
    console.log('test fonksiyonu çalıştı')
}

module.exports = test

/* -------------------------------------------- *

module.exports = function test() {
    console.log('test fonksiyonu çalıştı')
}

/* -------------------------------------------- */

function test1() {
    console.log('test1 çalıştı.')
}

function test2() {
    console.log('test2 çalıştı.')
}

function test3() {
    console.log('test3 çalıştı.')
}


//! birden fazla fonksiyonu Array olarak export edebilir.
// module.exports = [
//     test1,
//     test2,
//     test3
// ]

//? birden fazla fonksiyonu obje olarak export edebilir.
module.exports={
    test1,
    test2,
    test3   
}
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */