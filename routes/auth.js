const express= require('express');
const router= express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const passport = require('passport'); 
const Team = require('../models/Team');
const db = require('../db');
/*router.post('/register', (req,res) => {
    User.findOne({email: req.body.email})
    .then(user =>{
        if(user){//if user found then email already exists
            return res.send({msg:'Email Already Exists'});
        }
        else{
            const newTeam= new Team({
                teamname:req.body.teamname,
                captainname:req.body.captainname,
                college:req.body.college,
                city:req.body.city,
                state:req.body.state,
                category:req.body.category,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password,
            });
        newTeam
		.save()
		.then(res.send({msg:'Registered'}))
		.catch(err =>console.log(err))
        }
})
});
*/
/*router.get('/qw', async (req,res) =>{
    try{
        let results = await db.check();
        //console.log(results.length);
        res.json(results);
    }catch(e){
        console.log(e);
    }
});*/
router.post('/reglogin', async (req,res) =>{
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
module.exports =router;