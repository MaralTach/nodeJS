"use strict"
/* -------------------------------------- *

        NODEJS

/* -------------------------------------- */
// HTTPSERVER:

const http = require('node:http') // BuiltIn Module.

/* -------------------------------------- */

// http.createServer( (request, response) => { ... } )

// const app = http.createServer((request, response) => {

//     response.end('Hello World')
//     console.log('Console Print')

// })

//* Default server domain (local domain) = localhost
//* Default server IP (local IP) = 127.0.0.1
// app.listen(8000, () => console.log('Server started: http://127.0.0.1:8000'))

/* -------------------------------------- */

const app = http.createServer((request, response) => {
        // console.log(request)
        console.log(request.url)
})
app.listen(8000, () => console.log('http://127.0.0.1:8000'))


/* -------------------------------------- */
/* -------------------------------------- */
/* -------------------------------------- */
/* -------------------------------------- */