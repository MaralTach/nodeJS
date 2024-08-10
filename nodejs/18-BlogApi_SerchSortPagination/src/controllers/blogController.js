"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require('../models/blogModel')

/* ------------------------------------------------------- */
// BlogCategory Controller:

module.exports.blogCategory = {

    list: async (req, res) => {

        // const data = await BlogCategory.find()
        const data = await res.getModelList (BlogCategory)

        res.status(200).send({
            error: false,
            result: data
        })

    },

    // CRUD ->

    create: async (req, res) => {

        const data = await BlogCategory.create(req.body)
        // console.log(data)

        res.status(201).send({
            error: false,
            result: data
        })

    },

    read: async (req, res) => {

        // const categoryId = req.params.categoryId
        // const data = await BlogCategory.findOne({ _id: categoryId })

        // const data = await BlogCategory.findOne({ ...filter })
        const data = await BlogCategory.findOne({ _id: req.params.categoryId })
        // const data = await BlogCategory.findById( req.params.categoryId )

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        // const data = await BlogCategory.updateOne({ ...filter }, { ...data })
        const data = await BlogCategory.updateOne({ _id: req.params.categoryId }, req.body)
        // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body)

        res.status(202).send({
            error: false,
            result: data, // Güncelleme işleminin sayısal değerleri.
            new: await BlogCategory.findOne({ _id: req.params.categoryId }) // Güncellenmiş datayı göster.
        })

    },

    delete: async (req, res) => {

        // const data = await BlogCategory.deleteOne({ ...filter })
        const data = await BlogCategory.deleteOne({ _id: req.params.categoryId })
        // console.log(data)

        // res.status(204).send({
        //     error: false,
        //     result: data
        // })

        if (data.deletedCount >= 1) {

            res.sendStatus(204)
            // error: false

        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')
            // error: true

        }
    }
}

/* ------------------------------------------------------- */

// BlogPost Controller:

module.exports.blogPost = {

    list: async (req, res) => {
        // console.log(req.query)

        // //? SERACHING & SORTING & PAGINATION

        // //? FILTERING
        // //? mumkin oldukca filter yapin performans olarak daha hizli ve daha etkilidir
        // // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
        
        // const filter =req.query?.filter || {}
        // // console.log(filter)

        // // const data = await BlogPost.find(filter)  // sonra bunu kestik searchinge yapistirdik

        // //? SERACHING:  //kismi arama //filter-> tam arama
        // // URL?search[fieldName1]=value1&search[fieldName2]=value2
        // //http://127.0.0.1:8000/blog/post?filter[published]=1&search[title]=test&search[content]=5&sort[title]=asc

        // const search =req.query?.search || {}
        // console.log(search)
        

        // //regex'i kullanabilmek icin for dongusu yapiyoruz
        // for (let key in search)
        //     search[key] = { $regex: search[key] }

    
        // // console.log(search)

    

        // // const data = await BlogPost.find(filter)
        // // const data = await BlogPost.find({...filter, ...search})   //search'i ve filter'i parametre olarak gonderiyoruz //sonra kestik sortun altina yerlestirdik

        // //? SORTING  //siralama
        // // URL?sort[fieldName1]=1&sort[fieldName2]=-1   asc ve desc icin kullanilar ama Mongoose 8.0 icin> iptal edildi
        // // URL?sort[fieldName1]=value1&sort[fieldName2]=value2
        // // URL?sort[fieldName1]=asc&sort[fieldName2]=desc
        // //
        // const sort =req.query?.sort || {}
        // // console.log(sort)


        // // const data = await BlogPost.find({...filter, ...search}).sort(sort)

        // //? PAGINATION: (SAYFALAMA)
        // //? LIMIT
        // //URL?page=3&limits=15

        // let limit = Number(req.query?.limit || (process.env?.PAGE_SIZE || 20) )   //limitden bir sayfa gelebilir gelmezse sayfabasi .... olsun
        // console.log(limit, typeof limit)

        // //? PAGE ->  sayfanumarasi 
        // let page = Number(req.query?.page)
        // page = page > 0 ? page : 0   //page sifirdan buyukse page olarak kabul et, sifirdan kucukse 0 kabul et

        // //? SKIP => atlama
        
        // let skip = Number(req.query?.skip)   //request query'den gelen Numbere cevir
        // skip = skip > 0 ? skip : ((page-1) * limit )    //atlama degerini belirlemek icin page kac ise -1 yap ve onu limitle carp
        // //skip genelde limitin oncesine yazilir
        // // http://127.0.0.1:8000/blog/post?skip=5&limit=2    5tanesi atla ve ondan sonraki 2 kayidi getir



        // const data = await BlogPost.find({...filter, ...search}).sort(sort).skip(skip).limit(limit).populate('categoryId')  //query ile gelen sort'u parametre olarak gonderiyoruz
        // //populate yazdigimizda daha detayli geliyor

        // const data = await BlogPost.find({ ...filter }, { ...select })
        // const data = await BlogPost.find({}, { _id: 0, categoryId: 1, title: 1, content: 1 })
        // const data = await BlogPost.find({}, { categoryId: true, title: true, content: true }).populate('categoryId')
        // const data = await BlogPost.find().populate('categoryId')
        
        const data = await res.getModelList (BlogPost, 'categoryId')

        res.status(200).send({
            error: false,
            result: data
        })

    },

    // CRUD ->

    create: async (req, res) => {

        req.body.userId = req.user?._id
        req.body.content += ` Author: ${req.user?.firstName} ${req.user?.lastName}`

        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })

    },

    read: async (req, res) => {

        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('categoryId')
        // const data = await BlogPost.findOne({ _id: req.params.postId }, { categoryId: true, title: true, content: true })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body)

        res.status(202).send({
            error: false,
            result: data, // Güncelleme işleminin sayısal değerleri.
            new: await BlogPost.findOne({ _id: req.params.postId }) // Güncellenmiş datayı göster.
        })

    },

    delete: async (req, res) => {

        const data = await BlogPost.deleteOne({ _id: req.params.postId })

        if (data.deletedCount >= 1) {

            res.sendStatus(204)

        } else {

            res.errorStatusCode = 404
            throw new Error('Not Found.')

        }
    }
}

/* ------------------------------------------------------- */