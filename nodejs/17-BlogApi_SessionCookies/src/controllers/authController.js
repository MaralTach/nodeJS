"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Model:
// const User = require('../models/userModel') // Direct
const { User } = require('../models/userModel') // In Object

const passwordEncrypt = require('../helpers/passwordEncrypt')


/* ----------------------------------------------------*/

//! Auth Controller:

module.exports.auth = {
    login:async (req,res)=>{

        //eger req.body'da email ve password varsa. (destructiring)
        const { email,password } = req.body

        //eger req.body'da email ve password geldiyse 
        if (email && password){

            //userdane o email bu email'e esitmi 
            // const user = await User.findOne({ email:email})
            const user = await User.findOne({ email})

            //user varmi?
            if(user) {

                if (user.password == passwordEncrypt(password)){
                    //PSSWORD OK

                    // res.send({
                    //     message:'Login is successfull'
                    // })

                    //* SESSION *
                    // req.session = {
                    //     data: 'session-data'
                    // }
                    // console.log(req.session) bende calismadi 
                    // res.send('OK')

                    // req.session = {   //1nji yontem
                    //         email: user.email,
                    //         password: user.password
                    //      }

                    // req.session.email = user.email
                    req.session._id = user._id
                    req.session.password = user.password

                    res.status(200).send({
                        error:false,
                        message: 'Login: OK',
                        user
                    })

                }else{
                    res.errorStatusCode = 401
                    throw new Error('Login parametres are not true')
                }

            }else{

                res.errorStatusCode = 401
                throw new Error('User Not Found. ')
            }

        }else{

            res.errorStatusCode = 401
            throw new Error('Email and password are required. ')

        }
    },

    logout:async (req,res)=>{

        // Session / Cookie datasini silmek icin  null yeterli
        req.session = null 

        res.status(200).send({
            error:false,
            message:'Logout: OK'
        })
        
    }
}
/* ----------------------------------------------------*/
/* ----------------------------------------------------*/
/* ----------------------------------------------------*/
