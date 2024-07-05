"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

NodeJS motordur ExpressJS NodeJS'in frameworkudur.
express JS mikro-framworkdur 
bu demek oluyor ki normal frameworkler hazir paket ile gelir Express frameworku bos gelir 
express hizlidir ve stabildir.  
Ham Nodejs ile web uygulamasini yazmak zahmetli. express'in amaci aradaki zahmeti kaldirmak ve isi kolaylastirmaktir

Express datayi otomatik JSON'a donusturuyor.
JSON stringfy ve parse metotlarini kullanmaya gerek kalmiyor
Express'in temel amaci developeri hizlandirmaktir
/* ----------------------------------------------- */

// ! MVC: Model, View, Controller 

//* Modeller: isin Data tarafina bakiyor
//* View: isin goruntuleme tarafini yapicak.Kullanicilara goruntuleme FE
//* Controller: Kordinotor.
//* Mesela bir kullanici butona basicak View onu => Controllere gonderecek Controllerde => Modele gonderecek data almasi icin


/* ----------------------------------------------- */

// NodeJS express nasil calisir?

//* 1.Web servisi URL ile gelir 
//* 2. Url'yi Route-ler karsilar (routlar burada DANISMAN Ve YONLENDIRICI goreveni yapar)
//* 3.Router'lar ilgili Controllere gonderer mesela /login dediginde Logine gideceksin /user geldigi zaman usera gidecek

//* 4. Ornegin user Logina gondermesi icin CONTROLLER kontol yapar login password geldimi? 
//* 5. paswordlardan model sorumludur ve modeldeki bilgileri kontrol eder. ve boyle bir pasword varsa  modelden controllera true gelir ve VIEW'a  gecebilir kullanici veya gecmeye bilir
//* 6. Model tek basina hareket etmez Controllerden aldigi emiri yerine getir ve cevabi yine kontrollere gonderir


/* ----------------------------------------------- */
/* ----------------------------------------------- */


// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')  // express import edildi
const app = express()   // expressi app degiskenine atadik  ve artik bu app express frameworku oldu 

/* ----------------------------------------------- */
// dotenv calistirmak icin  (proses .envden data alabilmek icin config metodunu calistirdik)
require ('dotenv').config()

const PORT = process.env.PORT || 8000  
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT)) //Port kacsa onu yazdiracak +Port


/* ----------------------------------------------- */
/* ----------------------------------------------- */

//* eger express kullanmazsak herseyi bu kodun icinde yazmamiz gerekiyor . eger express kullanmasaydik her metedu if'lerle sorgulamamiz gerekiyor
// http.createServer((req, res) => {
//     if (req.url = '/') {   //url kontrolu 
//         if (req.method == 'GET') {   //get metedunu sorgulamak 
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })


//express kullanirsak 
//app.get yazdik if get'e gerek kalmadi  
app.get('/', (req, res) => {  //1.parametresi url 2. parametresi callback
    res.end('app.get çalisti')

    //bir nodejs'de  objeyi tanimlamak icin obje olustururuz
    //  const obj = {
    //    error: false,
    //    message: 'Welcome'
    // }
    //obje ciktisini almak icin
    // res.end(JSON.stringify(obj))

    //  SEND METHOD:
    //experess'de obje tanimlamak icin send metodu kullanilir
    
    //*  res.send('Welcome to World')
     
     //send metodu obje'yi JSON'a donusturur[stringfy yazmaya gerek kalmaz]
     //2tane send metdnunu ust uste yazamayiz send metodu kendinde end metodunuda barindirir ve en son olmasi gereken olarak tavsiye edilir send metodu
 
     res.send({
       error: false,
         message: 'Welcome'
     })
    res.send([0, 1, 2])

    //  STATUS METHOD:


// express'de default kod olarak degistirebiliyoruz
     res.status(404)
     res.send({
        error: false,
        message: 'Page Not Found'
     })

    
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
//tek url'ye 4farkli yontemle metodu karsiliyoruz

/* ----------------------------------------------- */

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})

// ALL METHOD:
// ALL yazdigimiz zaman butun metodlara izin verir.ama pek kullanilan bir sey degil
// app.all('/', (req, res) => { res.end('app.all çalıştı')})

// ROUTE METHOD:
// url'ye tek bir defa tanimlayarak o url'ye ayit metodlar bunlardir diyebiliriz 
// app.route('/')
//     .get((req, res) => { res.end('app.get çalıştı')})
//     .post((req, res) => { res.end('app.post çalıştı')})
//     .put((req, res) => { res.end('app.put çalıştı')})
//     .delete((req, res) => { res.end('app.delete çalıştı')})

/* ----------------------------------------------- */
// URL (path) Options:

//
// app.get('/', (req, res) => { res.send('burası anasayfa')}) // / == Anasayfa (home path)

//anasayfada baska bir path'e gitmek istersek.
// app.get('/path', (req, res) => { res.send('burası "path" sayfası')}) // "/path" == "/path/"  sonundaki slash olsada olmasada fark etmez



// Express Joker karakterleri destekler: (RexExp kuralları ile aynı)
// app.get('/abc(x?)123', (req, res) => { res.send('now in here: /abc(x?)123')}) // abc123 == abcx123
//abc(x?)burada x olabilir olmayadabilir  

// app.get('/abc(x+)123', (req, res) => { res.send('now in here: /abc(x+)123')}) // abcx..x123
// abc x+ burada x istedigi kadar olabilir ama en az bir tane olmak zorunda 

// ve joker karakterler arada olmak zorunda degildir

// app.get('/abc123(x+)', (req, res) => { res.send('now in here: /abc123(x+)')}) // abcx..x123

// * yildiz isareti herhangi birsey gelebilir yada  gelmeyebilir
// app.get('/abc*123', (req, res) => { res.send('now in here: /abc*123')}) // abc123 == abc(ANY)123

// Express RegularExpression destekler:(bazi ozel karakterlerle string icinde string yakalayabilmek icin) url path 'tirnak icinde degilde slash ile verilir  regexr.com
// app.get(/xyz/, (req, res) => { res.send('now in here: /xyz/')}) // içinde xyz geçen url'yi kabul et.
// app.get(/xyz$/, (req, res) => { res.send('now in here: /xyz$/')}) // xyz ile biten url'yi kabul et.satir sonu isareti $ isaretidir
// app.get(/^\/xyz/, (req, res) => { res.send('now in here: /^\/xyz/')}) // xyz ile biten url'yi kabul et.sapka isaretinin ters slash koymamiz gerekiyor

/* ----------------------------------------------- *
URL Parameters:

app.get('/*', (req, res) => {

    res.send({
        url: {
            protocol: req.protocol, // url http'mi degilmi onu yakalamak icin
            secure: req.secure,   //http se guvenligi true veya false verir http'ye s verebilmek icin onu serverine sertifika kurmaniz lazim 
            hostname: req.hostname,  //domain veya ip adresi verir
            // baseUrl: req.baseUrl, // artık req.url geçerli
            params: req.params,    //URL parametrelerini almak için kullanılır,URL'de belirli bir desene sahip olan dinamik değerleri yakalar ve bu değerlere erişim sağlar

            query: req.query, // Sadece query verir. (path vermez.)  Query string kismi temsil ediyor, URL'nin sonuna eklenen ve genellikle bir ? karakteri ile başlayan key-value çiftlerinden oluşan bir yapidir

            path: req.path, // Sadece subfolder (/name/name1/name2) verir. (query vermez)
            originalUrl: req.originalUrl, // URL'yi tümüyle verir.
            url: req.url // Router URL'sini verir.
        }
    })

})



/* ----------------------------------------------- */
// kullanicinin gonderdigi id yakalamak icin id veriyoruz
// 2nokta ust uste koymazsak bu bir degisken degil sabit olur ve userid'yi yazi olarak yazmak zorunda kaliriz
//buradaki config ve user sabit, userid ve process parametredir
// parametre oldugu icin req.params ile YAKALAYABILIR
//req.params nesnesi, URL'de tanımlanmış olan parametrelerin isimlerini key olarak, bu parametrelerin değerlerini ise value olarak tutar.

// app.get('/user/:userId/config/:process', (req, res) => {

//     res.send({
//         userId: req.params.userId,
//         process: req.params.process,
//         url: {
//             params: req.params,
//         }
//     })

// })


//user id bir numara olmak zorunda demek istersek bu sekilde yazabiliriz, + yazarsak en az bir tane rakam olmak zorunda 
// app.get('/user/:userId([0-9]+)', (req, res) => {
 
// kisa yoluda ters slash digit/sayisal karakter manasinda     
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
//200ler basarili islemlerdir ve 200lerinde ozel anlami vardir 
// app.get('/', (req, res) => { res.status(200).send({ message: 'OK' }) }) //200 heryerde kullanilabilir ama genelde get islemi icin kullanilir
// app.post('/', (req, res) => { res.status(201).send({ message: 'Created' }) })
// app.put('/', (req, res) => { res.status(202).send({ message: 'Updated' }) })
// app.patch('/', (req, res) => { res.status(202).send({ message: 'Updated' }) }) //kismi guncelleme yapar

//* icerigi silindigi icin 204 icerigi basmiyor
// app.delete('/', (req, res) => { res.status(204).send({ message: 'Deleted' }) })

//* bir objeyi json olarak disariya aktarmak icin
// json() (send() methodunu kullanabiliriz) 
// app.get('/', (req, res) => { res.json({ message: 'OK' }) })

//* bir dosya indirmek icin download() methodunu kullanabiliriz.indirme islemi icin apidan yapmiyoruz. tarayicidan test edebiliriz (/download)dedigimizde readme dosyasini indirdi 
// download():
// app.get('/download', (req, res) => { res.download('./readme.md') })
//* readme indirsin ama farkli isimle indirmesini istersek
// app.get('/download', (req, res) => { res.download('./readme.md', 'newName.txt') })

//* dosyanin icerigini oldugu gibi ekrana yazdirmak icin sendfile() methodunu kullanabiliriz. sendFile metodunu kullanmak icin absolute path/gercek yol olmalidir 
// sendFile():
// console.log(__dirname) 2alt - dirname metodu dosyanin bulundugu klosorunun gercek yolunu gosterir
// app.get('/package', (req, res) => { res.sendFile(__dirname + '/package.json') }) // dosya yolu TAM (gerçek) olmalı


//* redirect() methodunu kullanarak yonlendirme yapabiliriz. en cok kullanilan 2 yonlendirme var:
//*301/302
// redirect()
// app.get('/clarusway', (req, res) => { res.redirect('https://clarusway.com') }) // Varsayılan 302'dir, gecici yonlendirme. 
// app.get('/301', (req, res) => { res.redirect(301, 'https://clarusway.com') }) // Kalıcı yönlendirme yapar. yonlendirmeyi hafizasinda turar. mecbur kalmayinca yapmayiniz
// app.get('/302', (req, res) => { res.redirect(302, 'https://google.com') }) // Geçici yönlendirme yapar.



/* ----------------------------------------------- */
