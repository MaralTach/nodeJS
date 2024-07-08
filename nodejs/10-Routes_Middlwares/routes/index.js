"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const router = require ('express').Router();
//Router() bir applicationdir. tek farki url duzenleme amacli bir applicationdir

router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })

//ortak urlede farkli metod kullanacaksak 
// router.route('/')
//     .get((req,res) => {res.send ("get")})
//     .post((req,res) => {res.send ("post")})

router.get('/user')


module.exports = router