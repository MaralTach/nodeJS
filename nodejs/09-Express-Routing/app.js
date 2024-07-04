"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

NodeJS motordur ExpressJS NodeJS'in frameworkudur.
express JS mikro-framworkdur 
bu demek oluyor ki normal frameworkler hazir paket ile gelir Express frameworku bos gelir 
express hizlidir ve stabildir.  
Ham Nodejs ile web uygulamasini yazmak zahmetli. express'in amaci aradaki zahmeti kaldirmak ve isi kolaylastiriyor

Express datayi otomatik JSON'a donusturuyor.
JSON stringfy ve parse metotlarini kullanmaya gerek kalmiyor
Express'in temel amaci developeri hizlandirmaktir
/* ----------------------------------------------- */

MVC: Model, View, Controller 

Modeller: isin Data tarafina bakicak 
View: isin goruntiuleme tarafini yapicak.Kullanicilara goruntuleme
Controller: Kordinotor.
Mesela bir kullanici butona basicak View onu => Controllere gonderecek Controllerde => Modele gonderecek data almasi icin


/* ----------------------------------------------- */

NodeJS express nasil calisir?

1.Web servisi URL ile gelir 
2. Url'yi Route-ler karsilar (routlar burada DANISMAN Ve YONLENDIRICI goreveni yapar)
3.Router'lar ilgili Controllere gonderer mesela /login dediginde Logine gideceksin /user geldigi zaman usera gidecek

4. Ornegin user Logina gondermesi icin CONTROLLER kontol yapar login password geldimi? 
5. paswordlardan model sorumludur ve modeldeki bilgileri kontrol eder. ve boyle bir pasword varsa  modelden true gelir ve VIEW'a gecebilir kullanici
6. Model'de tek basina hareket etmez Controllerden aldigi emiri yerine getir ve cevabi yine kontrollere gonderir


/* ----------------------------------------------- */
/* ----------------------------------------------- */





// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')
const app = express()

/* ----------------------------------------------- */
// http.createServer((req, res) => {
//     if (req.url = '/') {
//         if (req.method == 'GET') {
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })

app.get('/', (req, res) => {
    // res.end('app.get çalıştı')
    // const obj = {
    //     error: false,
    //     message: 'Welcome'
    // }
    // res.end(JSON.stringify(obj))

    // SEND METHOD:
    // res.send('Welcome to World')
    // res.send({
    //     error: false,
    //     message: 'Welcome'
    // })
    // res.send([0, 1, 2])

    // STATUS METHOD:
    // res.status(404)
    // res.send({
    //     error: false,
    //     message: 'Page Not Found'
    // })

    // Output:
    res.status(404).send({
        error: false,
        message: 'Page Not Found'
    })
    
})
app.post('/', (req, res) => {
    res.end('app.post çalıştı')  
})
app.put('/', (req, res) => {
    res.end('app.put çalıştı')  
})
app.delete('/', (req, res) => {
    res.end('app.delete çalıştı')  
})
/* ----------------------------------------------- */

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})

// ALL METHOD:
// app.all('/', (req, res) => { res.end('app.all çalıştı')})

// ROUTE METHOD:
// app.route('/')
//     .get((req, res) => { res.end('app.get çalıştı')})
//     .post((req, res) => { res.end('app.post çalıştı')})
//     .put((req, res) => { res.end('app.put çalıştı')})
//     .delete((req, res) => { res.end('app.delete çalıştı')})

/* ----------------------------------------------- */
// URL (path) Options:

// app.get('/', (req, res) => { res.send('burası anasayfa')}) // / == Anasayfa (home path)
// app.get('/path', (req, res) => { res.send('burası "path" sayfası')}) // "/path" == "/path/"

// Express Joker karakterleri destekler: (RexExp kuralları ile aynı)
// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')}) // abc123 == abcx123
// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')}) // abcx..x123
// app.get('/abc123(x+)', (req, res) => { res.send('now in here: /abc123(x+)')}) // abcx..x123
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')}) // abc123 == abc(ANY)123

// Express RegularExpression destekler:
// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')}) // içinde xyz geçen url'yi kabul et.
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')}) // xyz ile biten url'yi kabul et.
// app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz/')}) // xyz ile biten url'yi kabul et.

/* ----------------------------------------------- *
// URL Parameters:

app.get('/*', (req, res) => {

    res.send({
        url: {
            protocol: req.protocol,
            secure: req.secure,
            hostname: req.hostname,
            // baseUrl: req.baseUrl, // artık req.url geçerli
            params: req.params,
            query: req.query, // Sadece query verir. (path vermez.)
            path: req.path, // Sadece subfolder (/name/name1/name2) verir. (query vermez)
            originalUrl: req.originalUrl, // URL'yi tümüyle verir.
            url: req.url // Router URL'sini verir.
        }
    })

})



/* ----------------------------------------------- */

// app.get('/user/:userId/config/:process', (req, res) => {

//     res.send({
//         userId: req.params.userId,
//         process: req.params.process,
//         url: {
//             params: req.params,
//         }
//     })

// })

// app.get('/user/:userId([0-9]+)', (req, res) => {
// app.get('/user/:userId(\\d+)', (req, res) => {

//     res.send({
//         path: req.path,
//         userId: req.params.userId,
//         abc: req.query.abc,
//     })

// })

/* ----------------------------------------------- */
// Response.Methods:

// sendStatus():
// app.get('/', (req, res) => { res.sendStatus(404) })
// status():
// app.get('/', (req, res) => { res.status(200).send({ message: 'OK' }) })
// app.post('/', (req, res) => { res.status(201).send({ message: 'Created' }) })
// app.put('/', (req, res) => { res.status(202).send({ message: 'Updated' }) })
// app.patch('/', (req, res) => { res.status(202).send({ message: 'Updated' }) })
// app.delete('/', (req, res) => { res.status(204).send({ message: 'Deleted' }) })
// json() (send() methodunu kullanabiliriz)
// app.get('/', (req, res) => { res.json({ message: 'OK' }) })
// download():
// app.get('/download', (req, res) => { res.download('./readme.md') })
// app.get('/download', (req, res) => { res.download('./readme.md', 'newName.txt') })
// sendFile():
// console.log(__dirname)
// app.get('/package', (req, res) => { res.sendFile(__dirname + '/package.json') }) // dosya yolu TAM (gerçek) olmalı
// redirect()
app.get('/clarusway', (req, res) => { res.redirect('https://clarusway.com') }) // Varsayılan 302'dir
// app.get('/301', (req, res) => { res.redirect(301, 'https://clarusway.com') }) // Kalıcı yönlendirme yapar.
// app.get('/302', (req, res) => { res.redirect(302, 'https://google.com') }) // Geçici yönlendirme yapar.



/* ----------------------------------------------- */
// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))
