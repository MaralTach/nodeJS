"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//Mongoose
const mongoose = require('mongoose')

// mongo modelde direk model degil shcema olusturuyoruz. Schema 2 parametre alir  1.njisinde sutunler 2.njisinde ayarlarlar. asil modellerimizi tanidigmiz yer filds ler
// const ModelName = new mongoose.Schema({...fields},{...settings })

// const ModelScehma = new mongoose.Schema({
//     PrimaryKey (_id) tanimlamaya gerek yok
//     mongoosun  sequelize dan farki javascriptin kendi datatipini kullanabiliyoruz
//     fieldName: {
//         type:String,
//         default: null,
//         trim:true,
//         unique:true,  //benzersiz kayit
//         index:true,  // aramalarda hizli erisim istiyorsak index true. bazi veri tabanlari index'i ram'a kaydeder. herseye index true verilmez. veritabani siser (sql tabanlarinda ve Nosql veritabanlarinda istenir)
//         // required:true,  //veri gonderimi zorunlumu? 
//         required:[true, 'data girilmezse gosterilecek hata mesajini gonderebilirsin'],  //veri gonderimi zorunlumu? 
//         enum:[[1,2,3], 'bu degerlerden biri olmalidir'],
//         validate:(data)=>true   validate bir fonksiyondur. gelen datanin istegimiz formatta geldimi gelmedi onu kontrol eder

            // validate:[
            //     (data)=>{ return true},
            //     'gonderilen data formati yanlistir'
            // ]


            // get:(data) => data  //bu veriye erisilmek istendiginde otomatik calisacak fonksiyondur
            // set: (data) =>  //bu fieldda veri kaydedilmek isteginde otomatik calisan fonksiyon
            //min:
            //max:
   //     }, {

   //! tablonun mongoDB-de karsiligi COLLECTION 'dyr
   collection:'TableName'  //tabloya vermek istegimiz isim
   timestamps: true   //true dedigimiz zaman creatAt ve updatedAt otomatik olusturuyor


// }


// })
// const ModelName = mongoose.model('ModelName' , 'ModelSchema') //modele cevirmek 1nji parametre mongoose kendi icinde bir isim vermesi 2njisi yukarida tanidigimiz Schema


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

// const BlogCategory = mongoose.model('BlogCategory',BlogCategorySchema )

/*------------------------------------------------------- */
//BlogPost Schema:

const BlogPostSchema = new mongoose.Schema({

    categoryId:{
        type:mongoose.Schema.Types.ObjectId,  //Hesadecimal Format: fedcba9876543210
        ref:'BlogCategory',    //ID hangi modele ait (mongoose.model('ModelName'. Schema)) ref iliski kurar .ManyToOne default olan iliskidir.  
        required:true,
        // unique:true   Convert to OneToOne   //buradaki category id foering key ve bunu unique yaparsak 1:1 iliskiye donuser 
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    },

},{

 collection:'blogPosts',
 timestamps:true
    

})

// const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

// module.exports={
//     BlogCategory:BlogCategory,
//     BlogPost:BlogPost
// }



// const BlogPost = mongoose.model('BlogPost', BlogPostSchema)  modele boyle ceviriyorduk. altdaki gibi hem modele cevireriz ayni andada export edebiliriz

module.exports={
    BlogCategory:mongoose.model('BlogCategory',BlogCategorySchema ),
    BlogPost:mongoose.model('BlogPost', BlogPostSchema)
}

