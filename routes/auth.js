const express= require('express');
const router= express.Router();
const SqlToJson = require('sql-to-json');
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

router.get('/admin',async(req,res)=>{
    try{
        let a= await db.show(req)
        a=(JSON.stringify(a))
        a=JSON.parse(a)
        res.render('admin',{a:a})

    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})

router.post('/clear',async(req,res)=>{
    try{
        let a= await db.delete(req)
        res.json({message:"deleted"})
    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})
module.exports =router;