"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//! THROW ERROR 


app.get('/user/:id', (req, res)=>{
    //* Hata gonder ve kodlar devap edmesin. Throw bir block koddur
    throw new Error('Error mesaji')
    res.send({
        message: 'User Page',
        id: req.params.id
    })

   if (isNaN(req.params.id)){
    throw new Error('id sayi olmali')
   }else{
    res.send('ID dogru')
   }

})

/* ------------------------------------------------------- *
//! TRY_CATCH
app.get ('user/:id', (res,req)=>{
    try{
        if (isNaN(req.params.id)){
            throw new Error ("Id parametresi sayi olmak zorunda")
        }else{
            res.status(200).send({
                error:false,
                message:"ID dogru hersey yolunda"
            })
        }
    }catch (err){
        res.status(400).send({
            error:true,
            message: err.message
        })
      
    }
}) 


/* ------------------------------------------------------- */
const errorHandler=(error,res,req,next)=>{
    res.status(500).send({
        error:true,
        message:error.message
    })
}

app.use(errorHandler)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));