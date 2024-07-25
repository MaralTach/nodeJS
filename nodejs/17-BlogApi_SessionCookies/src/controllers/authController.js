"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Model:
// const User = require('../models/userModel') // Direct
const { User } = require('../models/userModel') // In Object

const passwordEncrypt =require('../helpers/passwordEncrypt')


/* ----------------------------------------------------*/

//! Auth Controller:

module.exports.auth = {
    login:async (req,res)=>{

        //eger req.body'da email ve password varsa
        const { email,password } = req.body

        //eger req.body'da email ve password geldiyse 
        if (email && password){

            //userdane o email bu email'e esitmi 
            // const user = await User.findOne({ email:email})
            const user = await User.findOne({ email})

            if(user) {

            }

        }else{

            res.errorStatusCode = 401
            throw new Error('Email and password are required. ')

        }
    },

    logout:async (req,res)=>{
        
    }
}
/* ----------------------------------------------------*/
/* ----------------------------------------------------*/
/* ----------------------------------------------------*/
