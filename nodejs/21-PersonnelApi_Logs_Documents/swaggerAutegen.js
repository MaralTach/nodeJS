"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

//SWAGGER Autogen
//https://swagger-autegen.github.io/docs/

//DOCUMENTAION
// $ npm i swagger-autogen # JSON creator
// $ npm i swagger-ui-express # JSON UI
// $ npm i redoc-express 

require('dotenv').config()
const HOST = process.env?.PORT || 'http://127.0.0.1'
const PORT = process.env?.PORT || 8000;


/* ------------------------------------------------------- *

const options = {
	openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
	language:         <string>,     // Change response language.                      By default is 'en-US'
	disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
	autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
	autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
	autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
	writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
};
/* ------------------------------------------------------- */

const swaggerAutogen = require('swagger-autogen')()