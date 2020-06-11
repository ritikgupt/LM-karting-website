const express= require('express');
const router= express.Router();
const db = require('../db');


router.post('/register', async (req,res) =>{
    try{
        let results = await db.check(req.body.email);
        if(results.length ===0){
            console.log('he');
            let a= await db.add(req.body);
        }
        else{return res.send({msg:'Email Already Exists'});}
    }catch(e){
        console.log(e);
    }
});

module.exports =router;