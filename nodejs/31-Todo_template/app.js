"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;



/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */


//Templates EJS populer template motorudur
// kullanimi daha kolay ve anlisilirdir
// 1. npm i ejs


app.set('view engine', 'ejs')

//default templates folder: ./views

// app.set('views', './public')

//tarayicilarda yaptigimiz her islem get islemleridir. sadece form islemlemlerde put gonderebiliriz

app.all('/', (req, res)=>{

    res.render('index.ejs')

})

/* ------------------------------------------------------- */
// ROUTES:

// Model, controller'da kullanılacağı için orada require edilmelidir.
// const Todo = require('./app/models/todo.model')

app.use(require('./app/routes/todo.router'))

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require('./app/middlewares/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));