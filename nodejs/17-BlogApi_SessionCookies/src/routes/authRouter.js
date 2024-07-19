"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

// Call Controller:
const { auth } = require('../controllers/authController')

/* ------------------------------------------------------- */

// URL: /auth ->

router.post('/login', auth.login)
router.post('/login', auth.login)


router.route('/')
    .get(user.list)
    .post(user.create)

router.route('/:userId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)

/* ------------------------------------------------------- */
module.exports = router