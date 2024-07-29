"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


const { User } = require('../models/userModel')

/* ------------------------------------------------------- */


//Authentication Middleware
//Session icindeki user id ve passwordu kontrol eden middeware


//! Middlewareler index.js de cagirildiginda  mumkin oldukca route'lerden once cagirilmalidir

module.exports = async (req,res,next) =>{

    // console.log(req.session)

    req.user = null
    console.log(req.session)
    
    if (req?.session?._id) {
        //calismamisti. nedeni-de usermodel deki set metodu.
        // const user = await User.findOne({_id: req.session._id, password: req.session.password }) password ekleyince calismadi
        const user = await User.findOne({_id: req.session._id})
        // console.log(user)

    
        if (user && user.password == req.session.password) {

            req.user = user 

        }else{

            req.session = null 
        }
    }

    next()
}

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */




