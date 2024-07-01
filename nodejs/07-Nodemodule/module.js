"use strict";
/* -------------------------------------------- */
// MODULES
/* -------------------------------------------- */
// Dosyayı içe aktarma:

// require('./modules/index.js')
// require('./modules/index')
// require('./modules/') // default file name: index

/* -------------------------------------------- */
// Import from Export

// const test = require('./modules/')
// test()

// require('./modules/')()

/* -------------------------------------------- */

//! birden fazla fonksiyonu import edebilir.
// const arrFunc = require('./modules/')
// // console.log(arrFunc)
// arrFunc[0]()
// arrFunc[1]()
// arrFunc[2]()

// Array Destructuring:
// const [test1, test2, test3] = require("./modules/");
// test1();
// test2();
// test3();


//! Object import edebilir.
// const objFunc = require("./modules/");
// objFunc.test1();
// objFunc.test2();
// objFunc.test3();

//!Object Destructuring:
const {test1, test2, test3} = require('./modules/');
test1();
test2();
test3();

/* -------------------------------------------- */ 
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
