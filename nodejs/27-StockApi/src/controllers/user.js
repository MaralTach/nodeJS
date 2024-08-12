"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

//USER CONTROLLERS:
const User = require ('../models/user')

module.exports = {
    list: async ( req,res) => {

               /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */
        
            const data = await res.getModelList (User)

            res.status(200).send({
                error:false,
                details:await res.getModelListDatails(User),
                data
            })

    },

    create: async ( req,res) => {

    },

    read: async ( req,res) => {

    },

    update: async ( req,res) => {

    },

    delete: async ( req,res) => {

    }


}