const express= require('express');
const router= express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const passport = require('passport'); 
const Team = require('../models/Team');
const db = require('../db');

/*router.get('/qw', async (req,res) =>{
    try{
        let results = await db.check();
        //console.log(results.length);
        res.json(results);
    }catch(e){
        console.log(e);
    }
});*/
router.post('/register', async (req,res) =>{
    try{
        let results = await db.check(req.body.email);
        if(results.length ===0){
            console.log('he');
            let a= await db.add(req.body);
            res.json({'data':req.body})
        }
        else{return res.send({msg:'Email Already Exists'});}
    }catch(e){
        console.log('error is:')
        console.log(e);
    }
});
module.exports =router;