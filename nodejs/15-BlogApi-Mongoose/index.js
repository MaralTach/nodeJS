"use strict";

//1.npm init -y
//2.npm i express dotenv express-async-errors
//.env dosya (echo PORT=800 > .env terminalde)
// DOSYALAR 1.models 2. contoller 3. routes 4.errorHandler sonra enson routeri index'a baglayacagiz
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
const dbConnection = require('./src/dbConnection')
dbConnection()

//Alternative
// require()



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