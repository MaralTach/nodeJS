"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept JSON:
app.use(express.json())

// DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

// Catch error from async:
require('express-async-errors')

/* ------------------------------------------------------- */
//* npm i cookie-session
const session = require('cookie-session') //session middlware

app.use(session({
    secret:process.env.SECRET_KEY,
    // maxAge:1000 *60 * 60 * 24 *3   //milliseconds // 3 gun oldu 

}))

app.all('/', (req, res) => {
    res.send({
        session: req.session,
        message:"Welcome To Blog",
    })


})

/* ------------------------------------------------------- */
// Routes:

app.use('/user', require('./src/routes/userRouter')) // User Model
app.use('/blog', require('./src/routes/blogRouter')) // BlogCategory & BlogPost

/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))