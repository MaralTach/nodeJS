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

              /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

            const data = await User.create(req.body)

            res.status(201).send({
                error:false,
                data
            })

    },

    read: async ( req,res) => {

             /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */
       const data = await User.findOne({_id: req.params.id})

          res.status(200).send({
                error:false,
                data
            })

    },

    update: async ( req,res) => {

               /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */

            const data = await User.updateOne({_id: req.params.id}, req.body,{runValidators: true})
            
            res.status(202).send({
                error:false,
                data,
                new: await User.findOne({_id: req.params.id})
            })
            
    },

    delete: async ( req,res) => {
                /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

            const data = await User.deleteOne({_id: req.params.id})

            res.status(data.deletedCount ? 204 : 404).send({
                error: !data.deletedCount,
                data
            })


    }


}