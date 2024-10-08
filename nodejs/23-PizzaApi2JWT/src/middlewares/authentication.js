"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token");
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {

  const auth = req.headers?.authorization; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']

  if (tokenKey) {
    if (tokenKey[0] == "Token") {
      const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
        "userId",
      );
      req.user = tokenData ? tokenData.userId : false;

    } else if (tokenKey[0]== "Bearer") {

      jwt.verify(tokenKey[1], process.env.ACCESS_KEY, function(error,accsessData){

        // console.log(accessData)

        req.user = accessData ? accessData : null

      })

    }
  }
  next();
};

