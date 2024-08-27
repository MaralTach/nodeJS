"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

//Authentication Control Middleware

const Token = require ('../models/token.model')

module.exports = async (req, res, next) =>{
    // req.user = null 

// Authorization: Token ...tokenKey...
// Authorization: ApiKey ... tokenKey...
// Authorization: Bearer ...tokenKey...
// Authorization: Auth ...tokenKey...
// Authorization: X-API-KEY ...tokenKey...
// Authorization: x-auth-token...tokenKey...

// Get Token from Headers:

const auth = req.headers?.authorization || null  // Token ...tokenKey...
const tokenKey = auth ? auth.split(' ') : null // ['Token' ,'...tokenKey...' ]

if (tokenKey && tokenKey[0] == 'Token') {
    

    const tokenDate = await Token.findOne({ token: tokenKey[1]}).populate('userId')
    console.log(tokenDate)

    if(tokenDate) req,user = tokenDate.userId

} 
next()

}
/*----------------------------------------------------- */
