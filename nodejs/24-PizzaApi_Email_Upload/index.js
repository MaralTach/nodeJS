"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

const nodemailer = require('nodemailer')

//Create Test Account:
// nodemailer.createTestAccount().then((data) => console.log(data))

/* 
{
  user: 'kesuv6rxbb7gquox@ethereal.email',
  pass: 'Zng2FA3YwrzjhDj2r5',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false }, //mail gondermek icin kullanilir
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true }, 
  web: 'https://ethereal.email',
  mxEnabled: false
}

*/

//Const to MailServer/SMTP
// const transporter = nodemailer.createTransport({

//   //SMTP:
//   host: 'smtp.ethereal.email',
//   port: '587',
//   secure: 'false',
//   auth: {
//     user:'kesuv6rxbb7gquox@ethereal.email',
//     pass: 'Zng2FA3YwrzjhDj2r5'
//   }


// })
// // console.log(transporter)

// //SendMail:
// transporter.sendMail({

//   from: 'kesuv6rxbb7gquox@ethereal.email',
//   to: 'maral@gmail.com' ,  // , koyarak birden fazla email gonderebiliyorsun
//   subject: 'Hello',
//   text: 'Hello There. How are you?',
//   html: '<p> hello <b>there</b> </br> how do you do <p> ', 

// }, function (error,success){

//   success ? console.log('SUCCESS',success) : console.log('ERROR: ', error)

// })


//? GoogleMail (gmail)

//* 
const transporter = nodemailer.createTransport({

  service: 'gmail',
  auth: {
    user: 'qadir@clarusway.com'
  }

})

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.

