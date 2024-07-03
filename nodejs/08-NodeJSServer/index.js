"use strict"
/* -------------------------------------- *

        NODEJS

/* -------------------------------------- */
// HTTPSERVER:

const http = require('node:http') //? BuiltIn Module.
//? 2nokta ust uste (:) global demek npm i yapmaya gerek yok
//? bunun amaci http istek servere cevap verir

/* -------------------------------------- */

// http.createServer( (request, response) => { ... } )

// const app = http.createServer((request, response) => {

//     response.end('Hello World')
//     console.log('Console Print')

// })

// Default server domain (local domain) = localhost
// Default server IP (local IP) = 127.0.0.1
// app.listen(8000, () => console.log('Server started: http://127.0.0.1:8000'))

// /* -------------------------------------- *

const app = http.createServer((req, res) => {

    // console.log(req)
    // console.log(res)
    // console.log(req.url)

if (req.url== '/'){
        

        res.end("main page")
    
} else if (req.url == "/second"){
        res.end("second page")

}else {
        res.end("404")
}

})

app.listen(8000, () => console.log('http://127.0.0.1:8000'))

/* -------------------------------------- */

// const app = http.createServer((req, res) => {

//     if (req.url == '/api') {

        // res.end('API') // res.end işlemi blocklar. devam eden kodlar çalışmaz.

        // res.write('Yazı-1')
        // res.write('Yazı-2')
        // res.write('Yazı-3')
        // res.write('Yazı-4')
        // res.end()
        
        // if (req.method == 'GET') {

            // setHeader (single headers)
        //     res.setHeader('title', 'value')
            // writeHead(statusCode, {  multi headers })
            // Sonda yeralması gereken methodlardandır.
            // res.writeHead(400, {
            //     'content-encoding': 'utf-8',
            //     'multi-headers': 'test',
            // })
            // writeHead'de 2. parametre olarak statusMessage gönderebiliriz:
        //     res.writeHead(400, 'Hatali Islem', {
        //         'content-encoding': 'utf-8',
        //         'multi-headers': 'test',
        //     })

        //     const obj = {
        //         result: true,
        //         message: 'Hello World'
        //     }
        //     res.write(JSON.stringify(obj))
            
            // En sonda yer almalıdır:
//             res.end()

//         } else {

//             res.end('Wrong Method')
//         }

//     } else {

//         res.end('HTML')
//     }

// }).listen(8000, () => console.log('http://127.0.0.1:8000'))

/* -------------------------------------- */
/* -------------------------------------- */
/* -------------------------------------- */