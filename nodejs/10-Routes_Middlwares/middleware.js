"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

//? Middleware:
app.get("/", (req, res, next) => {
    console.log("middleware calisti");
    
    //next() islemi bir sonraki route'a havale eder
    next();
    
   // next bir sonraki route'a gidecegi icin nextdan sonra kod yazmanin anlami yoktur
   
        if(req.query.courseName == 'nodeJS'){
       next();
        }else{
       res.send({ message: "kurs ismi yanlis girildi" });
        }
   
})

//Route-Path: 
// app.get("/", (req, res, next) => {
//     console.log("route-path calisti");
//     res.send({ message: "Middleware" });
// });
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));