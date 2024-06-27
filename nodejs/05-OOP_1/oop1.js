"use strict"
/* -------------------------------------------------------
    OOP-1: OBJECTS
------------------------------------------------------- */

// Direkt obje isimlendirmede PascalCase veya camelCase yapı kullanırız.:
// const exampleObject = {

//     propertyName: 'value', // property, attribute, field
//     propertyArray : [],
//     propertyObject: {},

//     // Obje içindeki fonsiyonlara Method denir:
//     methodName: function () {
//         return 'this is a method'
//     },
    
//     // Alternatif yazım:
//     methodAlternative () {
//         return 'method-2'
//     },

// }
// // Nokta notasyonu ile property çağırlabilir:
// console.log( exampleObject.propertyName )
// console.log( exampleObject.methodName() )

/* ------------------------------------------------------- *
//* Object Declaration:

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: [ 'red', 'white' ],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }

}

// console.log( Car.brand )
// console.log( Car.colors[1] )
// console.log( Car.details.engineSize )
// console.log( Car.startEngine() )
// console.log( Car.startEngine('2') )

// Alternatif:
console.log( Car['brand'] )
console.log( Car['colors'][1] )
console.log( Car['details']['engineSize'] )
console.log( Car['startEngine']() )

/* ------------------------------------------------------- *
//* "THIS" Keyword:

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: [ 'red', 'white' ],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    },
    getDetails: function() {
        console.log( this )
        // return this.details
        // return this.startEngine()
        return this.brand + ' ' + this.model + ' ' + this.year + ' ' + this.startEngine()
    },
    arrowMethod: () => {
        //* Arrow function is globalScope. (Not working this keyword in here)
        console.log( this )
    }

}

console.log( Car.getDetails() )
console.log( Car.arrowMethod() )

/* ------------------------------------------------------- *
//* ARRAY DESTRUCTURING:

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

// const test0 = testArray[0]
// const test1 = testArray[1]
// const test2 = testArray[2]
// // const test3 = testArray[3]
// // const test4 = testArray[4]
// const testPart = testArray.slice(3)
// console.log(test0, test1, test2, testPart)

// Sıralama Önemli:
// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)

// REST Operator (Toplayıcı) (Eşitir ifadesinin sol tarafındaki REST operatördür.)
const [var0, var1, ...varPart] = testArray
console.log(var0, var1, varPart)

// SPREAD Operator (Dağıtıcı/Serpiştirici) (Eşitir ifadesinin sağ tarafındaki SPREAD operatördür.)
const newArr = [ ...testArray, 'value5', 'value6' ]
console.log( newArr)

/* ------------------------------------------------------- *
//* OBJECT DESTRUCTURING:

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: [ 'red', 'white' ],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }

}
console.log(typeof Car, Car)

REST Operator (KEY isimleri önemli!)
const { brand, year, model, ...others } = Car
console.log(brand, year, model, others)

İsim değiştirme:
const { brand, year, model: newName, ...others } = Car
console.log(brand, year, newName, others)

SPREAD Operator:
const newObj = { ...Car, newKey: 'newValue' }
console.log(newObj)

/* ------------------------------------------------------- */

// // Object to JSON:
// console.log(typeof Car, Car)
// const json = JSON.stringify(Car)
// console.log(typeof json, json)

// // JSON to Object:
// const obj = JSON.parse(json)
// console.log(obj)

// Array to JSON:
// const arr = Object.keys(Car)
// // const arr = Object.values(Car)
// // const arr = Object.entries(Car) // enumarateType
// console.log(arr)
// const arrToJSON = JSON.stringify(arr)
// console.log(arrToJSON)

// const jsonToArr = JSON.parse(arrToJSON)
// console.log(typeof jsonToArr, jsonToArr)

// console.log(typeof true, true)
// console.log(typeof 1234, 1234)
// console.log(typeof 'string', 'string')
// console.log(typeof null, null)
// console.log(typeof undefined, undefined)
// console.log(typeof [], [])
// console.log(typeof {}, {})
// console.log(typeof function() {}, function() {})
// const test = String('new-value')
// console.log(typeof test, test)

/* ------------------------------------------------------- *
// CONTRUCTOR FUNCTIONS:

const contructorFunction = function () {
    this.property = 'value'
}

/* ------------------------------------------------------- */
// 'NEW' Keyword:

const carConstructor = function (brand, model, year = 2000) {

    this.brand = brand
    this.model = model
    this.year = year

    this.startEngine = function () {
        return 'Engine started.'
    }

}

/* ------------------------------------------------------- */