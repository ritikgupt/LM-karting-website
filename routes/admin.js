const express= require('express');
const router= express.Router();
const db = require('../db');

router.get('/adminamzracing',async(req,res)=>{
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
        res.redirect('/adminamzracing');
    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})

router.post('/clear',async(req,res)=>{
    try{
        let a= await db.delete(req)
        res.redirect('/adminamzracing');
    }catch(e)
    {
        res.json({'message':'error'})
        console.log(e)
    }
})
module.exports =router;