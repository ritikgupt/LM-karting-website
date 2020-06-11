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
            let a= await db.add(req.body);
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
router.post('/update',async(req,res)=>{
    try{
       let b= await db.change(req)
        res.redirect('admin');
    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})

router.post('/clear',async(req,res)=>{
    try{
        let a= await db.delete(req)
        res.redirect('admin');
    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})
module.exports =router;