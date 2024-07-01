"use strict"
/* -------------------------------------------- */
// DOTENV
/* -------------------------------------------- */

console.log('index çalıştı')

//* $ npm i dotenv

// dotenv start:
require('dotenv').config()

// console.log(process.env)
console.log(process.env.HOST)
console.log(process.env.PORT)
console.log(process.env.EXTRA)
