"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */
//* router temel olarak sistemdeki urle yapimini ayri bir dosyaya tasimak icin ayri bir dosyadaki url yapimi .Router ile olusturup aplication'da app dememiz yeterli
//* terminalden .env dosya olusturmak icin
//? $ echo PORT=8000 > .env 


const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.
// routerin kullanma amaci pathleri ayri bir dosyaya tasiyabilmek
//router da bir applicatin dir ama sadece routing yapmak icindir

//bu path routerdir
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

//router tanimlamasi. router ozel bir applicationdir
const router = express.Router();

// router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
// router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
// router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
// router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
// router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })

//ortak urlede farkli metod kullanacaksak 
// router.route('/')
//     .get((req,res) => {res.send ("get")})
//     .post((req,res) => {res.send ("post")})



//Router tanimladiktan sonra app.use() yapilmali
// app.use(router)

//index diye ayri file actik ve orada tanimladigimiz routery import ettik
// const router = require('./routes/')
// app.use(router)

//ana dosyaya /test diye bir path icine butun pathleri tanimla
app.use('test',require('./routes/'))
 //app use kullanirken /path kullanabiliriz

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));




