"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')


// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')   //2 nokta ustuste install yapmaya gerek yok 

// Parameters:
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı.
const loopCount = 10_000 // Döngü sayısı
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Şifreleme algoritması.

// Return encrypted password:
const passwordEncrypt = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')

}

/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email is required.'],
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password)=>{
            return 'maral'
        }    //veri kaydederken return edilen data kaydi
    },

    firstName: String,

    lastName: String,

}, {

    collection: 'users',
    timestamps: true

})

/* ------------------------------------------------------- */

// module.exports = mongoose.model('User', UserSchema) // Direct
module.exports.User = mongoose.model('User', UserSchema) // In Object