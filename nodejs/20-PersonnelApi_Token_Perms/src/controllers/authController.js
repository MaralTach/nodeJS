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

        if (username && password){

            const user = await Personnel.findOne({ username })

            if (user && user.password == passwordEncrypt(password)){

                if (user.isActive) {
                    res.send()
                    //! TOKEN
                    // daha once bu kullaniciya ait token olusturmusmuyum ? Token varmi?
                    let tokenData = await Token.findOne( {userId: user._id})

                    // token yoksa olustur!

                    if (!tokenData) {
                        tokenData = await Token.create({
                            userId: user._id,
                            token: passwordEncrypt(user._id + Date.now())
                        })
                    }

                    res.status(200).send({

                        error: false,
                        token: tokenData.token,
                        user

                    })

                    //! TOKEN 

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
