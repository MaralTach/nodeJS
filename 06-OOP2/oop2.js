"use strict"
/* -------------------------------------------------------
    OOP: CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
//* Class declaration:

//? Class tanımlamaları PascalCase ile yapılır.

// class Car {
//     constructor(brand, model, year = 2000) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
// }

//* Class Expression:

const PascalNameCase = class {
    propertyName = 'value'

   
  //* Methods: method tanimlarken basina function yazilmaz:  
}

//* Constructor Method:
class Car {

    isRunning = false

    constructor(brand, model, year = 2000) {
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }
}
const Ford = new Car("Ford", "Mustang", 1967)
console.log(Ford)

/* ------------------------------------------------------- */

//* INHERITANCE:
//* SUPER = PARENT CLASS, THIS = CHILD (CURRENT) CLASS

class Vehicle {
    vehicleIsActive = false
    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year = 2000) {
        this.brand = brand
        this.model = model
        this.year = year

    }

    runEngine() {
        this.isRunning = true
        console.log('Engine started')
        return this.isRunning
    }
}

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

