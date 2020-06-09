const express= require('express');
const router= express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const passport = require('passport'); 
const Team = require('../models/Team');
const db = require('../db');


router.post('/register', async (req,res) =>{
    try{
        let results = await db.check(req.body.email);
        if(results.length ===0){
            console.log('he');
            let res= await db.add(req.body);
            res.send({msg:'Registered'})
        }
        else{return res.send({msg:'Email Already Exists'});}
    }catch(e){
        console.log(e);
    }
});

router.post('/admin',async(req,res)=>{
    try{
        let a= await db.show(req)
        res.json(a)

    }catch(e)
    {
        res.json({'message':'error'})
        console.log('error')
    }
})
module.exports =router;