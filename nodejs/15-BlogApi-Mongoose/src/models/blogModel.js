"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//Mongoose
const mongoose = require('mongoose')

// mongo modelde direk model degil shcema olusturuyoruz. Schema 2 parametre alir  1.njisinde sutunler 2.njisinde ayarlarlar
// const ModelName = new mongoose.Schema({...fields},{...settings })

// const ModelName = new mongoose.Schema({
//     //PrimaryKey (_id) tanimlamaya gerek yok
//     // sequelize dan farki javascriptin kendi datatipini kullanabiliyoruz
//     fieldName: {
//         type:String,
//         default: null,
//         trim:true,
//         unique:true,  //benzersiz kayit
//         index:true,  // aramalarda hizli erisim istiyorsak index true. bazi veri tabanlari index'i ram'a kaydeder. herseye index true verilmez 
//         // required:true,  //veri gonderimi zorunlumu? 
//         required:[true, 'data girilmezse gosterilecek hata mesajini gonderebilirsin'],  //veri gonderimi zorunlumu? 
//         enum:[[1,2,3], 'bu degerlerden biri olmalidir'],
//         validate:(data)=>true
//     }


// })



//! BlogCategory Model

const BlogCategorySchema = new mongoose.Schema({

    //_id
    name:{
        typr:String,
        trim:true,
        required:true
    }
    
}, {   
collection:'blogCategories',
timestamps:true

})


/*------------------------------------------------------- */
//BlogPost Schema:

const BlogPostSchema = new mongoose.Schema({

    categoryId:{

    },
    title:{
        type:String,
        trim:true,
        required:true
    },

    

})