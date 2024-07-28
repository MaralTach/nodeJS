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

//? localstrogada saklamanin bir omru yok tarayici bellegi manuel olarak silinene kadar saklanir

//? cookiler-> browserda saklanir.  bir omur var ve biz onu belirleyebiliriz 1 gun 3 saat gibi
/* ------------------------------------------------------- */

//? session -> hem browserda hemde serverde saklanir
//hepsi data saklamak icindir. sess.cookiesler surelidir omru tarayici oturum kapanana kadar. Sessionlar aslinda cookilerdir. data her zaman cookilerde saklanir. Cookie'ye bir omur vermezsek aslinda o SESSION oluyor

//! isin icine REST api yada API girdigi zaman session veya cookies kullanilmaz TOKEN kullanir.
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require('cookie-session') //session middlware

//middleware kullanmak icin app.use icinde kullaniyoruz
app.use(session({  //General Settings 
    secret:process.env.SECRET_KEY,  //cookie datasi sifrelenerek saklanir
    // maxAge:1000 * 60 * 60 * 24 * 3   //milliseconds // 3 gun oldu 

}))


//! 1. middleware routelerden once cagirilir
//! 2. sessionda bir user varsa onu kontrol edecegin bir middleware
app.use(require('./src/middlewares/userControl'))


app.all('/', (req, res) => {
    res.send({
        message:"Welcome To Blo Api",
        session: req.session,   //datanin saklandigi yer.
        user: req.user
    })


})

/* ------------------------------------------------------- */
// Routes:

app.use('/auth', require('./src/routes/authRouter')) // User Model-login logout
app.use('/user', require('./src/routes/userRouter')) // User Model
app.use('/blog', require('./src/routes/blogRouter')) // BlogCategory & BlogPost

/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))