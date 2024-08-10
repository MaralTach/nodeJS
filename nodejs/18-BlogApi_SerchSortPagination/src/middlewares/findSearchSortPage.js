"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//* QUERYHANDLER MIDDLWARE


module.exports = async (req, res, next) => {

       //? FILTERING & SERACHING & SORTING & PAGINATION

        //? FILTERING
        //? mumkin oldukca filter yapin performans olarak daha hizli ve daha etkilidir
        // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
        
        const filter =req.query?.filter || {}
        // console.log(filter)

        // const data = await BlogPost.find(filter)  // sonra bunu kestik searchinge yapistirdik

        //? SERACHING:  //kismi arama //filter-> tam arama
        // URL?search[fieldName1]=value1&search[fieldName2]=value2
        //http://127.0.0.1:8000/blog/post?filter[published]=1&search[title]=test&search[content]=5&sort[title]=asc

        const search =req.query?.search || {}
        // console.log(search)
        

        //regex'i kullanabilmek icin for dongusu yapiyoruz
        for (let key in search)
            search[key] = { $regex: search[key] }

    
        // console.log(search)

    

        // const data = await BlogPost.find(filter)
        // const data = await BlogPost.find({...filter, ...search})   //search'i ve filter'i parametre olarak gonderiyoruz //sonra kestik sortun altina yerlestirdik

        //? SORTING  //siralama
        // URL?sort[fieldName1]=1&sort[fieldName2]=-1   asc ve desc icin kullanilar ama Mongoose 8.0 icin> iptal edildi
        // URL?sort[fieldName1]=value1&sort[fieldName2]=value2
        // URL?sort[fieldName1]=asc&sort[fieldName2]=desc
        //
        const sort = req.query?.sort || {}
        // console.log(sort)


        // const data = await BlogPost.find({...filter, ...search}).sort(sort)

        //? PAGINATION: (SAYFALAMA)
        //? LIMIT
        //URL?page=3&limits=15

        // let limit = Number(req.query?.limit || (process.env?.PAGE_SIZE || 20) )   //limitden bir sayfa gelebilir gelmezse sayfabasi .... olsun
        let limit = Number(req.query?.limit)
        limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
        // console.log(limit, typeof limit)

        //? PAGE ->  sayfanumarasi 
        let page = Number(req.query?.page)
        page = page > 0 ? page : 1   //page sifirdan buyukse page olarak kabul et, sifirdan kucukse 0 kabul et

        //? SKIP => atlama
        
        let skip = Number(req.query?.skip)   //request query'den gelen Numbere cevir
        skip = skip > 0 ? skip : ((page-1) * limit )    //atlama degerini belirlemek icin page kac ise -1 yap ve onu limitle carp
        //skip genelde limitin oncesine yazilir
        // http://127.0.0.1:8000/blog/post?skip=5&limit=2    5tanesi atla ve ondan sonraki 2 kayidi getir



        // const data = await BlogPost.find({...filter, ...search}).sort(sort).skip(skip).limit(limit).populate('categoryId')  //query ile gelen sort'u parametre olarak gonderiyoruz
        //populate yazdigimizda daha detayli geliyor


        // burada BlogPost modelini kullanabilmek icin bir fonksion olusturuyoruz. Modeli parametre olarak gonderecegiz 
        //GetModelList
    res.getModelList = async function (Model, populate = null){  //populate her zaman ihtiyac olmadigi icin deafault degerini null yapiyoruz

        return await Model.find({...filter, ...search}).sort(sort).skip(skip).limit(limit).populate(populate)
    }

    res.getModelListDetails = async function (Model){
        
        const data = await Model.find({...filter, ...search})

        let details = {
            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages:{
                previos:(page > 1 ? page -1 : false), 
                cmurrent: page,
                next: page + 1,
                total:Math.ceil(data.length / limit)
            },
            totalRecords: data.length
        }

        details.pages.next = (details.page.next > details.pages.total ? false : details.pages.next )
        if (details.totalRecords <= limit) details.pages = false
        
        return details
    }

    next()
}

/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
