"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//MONGOOSE ODM
// $ npm i mongoose

//ODM (mongoose authenticate icin connect)
const mongoose = require('mongoose')
 
const dbConnection = () =>{

    // mongoose.connect('mongodb://localhost:27017/')
    // mongoose.connect(process.env?.MONGODB)
    mongoose.connect(process.env?.MONGODB || 'mongodb://localhost:27017/blogApi')
  
        .then(()=> console.log('*DB Connected *'))
        .catch(()=> console.log('*DB NOT Connected *'))

    }
module.exports = dbConnection    