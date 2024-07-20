"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

//Call Controllers:
const {blogCategory, blogPost} = require('../controllers/blogController')

/*------------------------------------------------------- */
//URL: /blog=> dan sonra  /categoryye post yapilinca onunla blogcategory icinde create ilgilenecek. blogcategory controllerda create islemi tanimladik

 //BlogCategory
router.route('/category')
    .post(blogCategory.create)


/*------------------------------------------------------- */
/*------------------------------------------------------- */
module.exports = router