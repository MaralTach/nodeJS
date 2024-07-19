"use strict";

//1.npm init -y
//2.npm i express dotenv express-async-errors
//3.npm i mongoose
//.env dosya (echo PORT=8000 > .env terminalde)
// DOSYALAR 1.models 2. contoller 3. routes 4.errorHandler sonra enson routeri index'a baglayacagiz

//ODM - Nosql veritabaninda ORM degil ODM deniliyor Mongoose mongoDB nin ORM moduludur
//Nosql (iliskisel degil veri tabanimiz MONGOOSE)
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//Accept JSON
app.use(express.json())


//DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()

//Alternative dbConnection'a baglanmak icin kisaca yazabiliriz ()parantezi unutmuyoruz
require('./src/dbConnection')()



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */



app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})




// Catch Errors:
app.use(require('./src/errorHandler'))


/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))