"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
    
------------------------------------------------------- */
//! Nodejs -de SQL veritabanlarini kullanmak icin, data islemlerini yapmak icin SEQUELIZE isimli modulu kullaniyoruz

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//* Async hatayyi yakalamak icin 
require('express-async-errors')

// Accept json data:
//gonderilecek json datayi kabul et ve objeye cevir
app.use(express.json())


// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
//! SEQUELIZE
// $ npm i sequelize sqlite3
//hangi veri tabanini kullanicaksak onun modulunu install ediyoruz
//sonra require yapacagiz  1.njisi Sequelize, 2.njsi Datatypes destr. ediyoruz

//Sequelize indirdikten sonra require yapiyoruz ve sonra 2 tane objeyi requiredan destr olarak aliyoruz
const {Sequelize, DataTypes} = require('sequelize')

//Connection
//Sequelize(parantezin icin kullanacagimiz veri tab. ismi ve sonra onun nerede oldugunu yaziyoruz)
//sequelize instance dir
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize('sqlite:' + process.env.SQLITE)
//.env de bulamazsa || ./db.sqlite3  bu kodu yazacagiz 

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))


//* Sequelize MODEL olusturma:
// model komutu icin: sequelize.define('tableName',{...columns})
//Herbir model, veritabaninda bir tabloya karsilik gelir
//model genelde Pascal case dir
//sutun ozelliklerini {} icinde table name dan sonra yaziyoruz
// mongodbde _id kullanilir
//sutunlere obje kullanirken Datatypes kullaniyoruz

const Todo = sequelize.define('todos', {
  //id belirtmegimize gerek yok. sequelize id sutununu otomatik olusturar 
    // id:{
    //     type:DataTypes.INTEGER, //DataType sutun veri tipi  //kesin kullanicagiz
    //     allowNull:false,    //default:true // sutun verisi bos olabilirmi //duruma gore kullanicagiz
    //     unique:true,        //default: false //  benzersiz kayitmi?
    //     defaultValue:'', //kayit eklendiginde default olarak ne yazilsin
    //     comment:"yorum icin",  
    //     primaryKey: true,       //default:false //tablonun her bir kaydini ifade edenbenzersiz numara
    //     autoIncrement:true,
    //     field:'custom_field_name'

    // },

    //cretedAt ve updateAt tanimlamaya gerek yok. sequelize otomatik tanimlar
    title:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },

    description:DataTypes.TEXT, //ShortHand

    priority:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue: 0 
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
    },
})

//sync veritabani 0 sa tablo yoksa olusturur. var tabloyu olusturmaz degisikligi algylamaz
//!  sequelize.sync() // CREATE TABLE 

// degisikligi eklemek icin // !force:true  kullaniyoruz
// sequelize.sync({force:true})

//datalarin ucmamasi icin silinmemesi icin //! alter:true
//her kaydetdigimizde ekliyor ve siliyor. onun icin bir kere calistiktan sonra yoruma alinmasi gerekiyor.cok ciddi hatalara yol acabilir 
// sequelize.sync({ alter:true })



//* Connet to DB: veritabanina baglanmak then catch ()=>
sequelize.authenticate()
    .then(()=> console.log('* DB connect *'))
    .catch(()=> console.log('* DB not connect *'))

/* ------------------------------------------------------- */

//! Routes:

const router = express.Router()

//* LIST TODOS
//butun datalari almanin komutu findAll()
//listlemeke icin status kodu 200

router.get('/', async (req,res)=>{
    //    const data = await Todo.findAll()

    //datalarin kayit sayisinida verir findAndCountAll()
       const data = await Todo.findAndCountAll()

       res.status(200).send({
        error: false,
        result: data
    }) 
})



//CREATE TODOyeni todo ekleme
//* TODO metodlari async dir bunun icin await yapiyoruz ve routari async yapyoruz 
//create veritabaninda kayit eder

router.post('/', async (req,res)=>{

    // const receivedData = req.body
    // console.log(receivedData)

   
    // const data = await Todo.create({
    //     title:receivedData.title,
    //     description:receivedData.description,
    //     priority:receivedData.priority,
    //     isDone:false
    // })
    const data = await Todo.create(req.body)
    // console.log(data)

    //create status code 201
    res.status(201).send({
        error: false,
        result: data.dataValues
    })

})

app.use(router)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */




const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));