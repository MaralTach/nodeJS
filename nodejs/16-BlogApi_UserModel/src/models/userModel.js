"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')


// Password Encrypt (PBKDF2 Method):
// https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto')   //2 nokta ustuste install yapmaya gerek yok 

// Parameters:  pbkdf2Sync bu metod altdaki parametreleri alir
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı.
const loopCount = 10_000 // Döngü sayısı
const charCount = 32 // write 32 for 64  cikti kac karakter olucak
const encType = 'sha512' // Şifreleme algoritması.

// Return encrypted password:
const passwordEncrypt = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
    //pbkdf2Sync sifreleme parametresi 
}

/* ------------------------------------------------------- */

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email is required.'],
         // validate: ()=>{   //eger return =true ise kayderer. eger email formati dogru ise kaydeder

        //! validate kontrol etme 1-nji yontem
        //     if (email.includes('@') && email.includes ('.')){   
        //         return true
        //     }else{
        //         return false
        //     }
        // }
        
        //! validate kontrol etme 2-nji yontem
         // validate: (email) => (email.includes('@') && email.includes('.'))

         //! validate kontrol etme 3-nji yontem
         validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]

        //! validate kontrol etme 4-nji yontem
        // validate: (email) => {
        //     if (email.includes('@') && email.includes('.')){
        //         return true
        //     }else{
        //         throw new Error ('Email type is incorrect: ' + email) //+ email kullanicinin yanlis girdigi emaili'de ekrana yazdirir 
        //     }
        // }
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: (password)=> passwordEncrypt(password)   //veri kaydederken return edilen data kaydi.gelen sifre ne olursa olsun onu sifreleme fonk.ile kaydet
        // set:(password)=>{
        //     if (password.length>=8){
        //         return passwordEncrypt(password)
        //     }else{
        //         return "wrong"
        //     }
        //    },   //veri kaydederken return edilen data kaydi.gelen sifre ne olursa olsun onu sifreleme fonk.ile kaydet. Set methodu validate'dan once calisir 
    //    validate:(password)=>{
    //     if (password =='wrong') {
    //         return false

    //     } else {
    //         return true
    //     }
    //    }

    set: (password) => (password.length >= 8 ?  passwordEncrypt(password) : 'wrong'),
    validate: (password) => (password != 'wrong') // Güncelleme yaparken default olarak validate çalışmaz. // { runValidators: true }

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