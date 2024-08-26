"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Porsonnel = require('../models/personnel.model')
const Token = require('../models/token.model')

const passwordEncrypt = require('../helpers/passwordEncrypt')
/*----------------------------------------------------- */


module.exports ={
    login:async (req,res) =>{

        const {username, password} = req.body

        if (username & password){

            const user = await Personnel.findOne({ username })

            if (user && user.password == passwordEncrypt(password)){

                if (user.isActive) {
                    
                    

                } else {
                    
                    res.errorStatusCode = 401
                    throw new Error('User is not active')
                }

            }else {
                res.errorStatusCode = 401
            throw new Error('Wrong username or password')
            }

        }else{

            res.errorStatusCode = 401
            throw new Error('Please enter username and password')
        }
    },
    
    logout:async (req,res) =>{


    },
}
/*----------------------------------------------------- */
