const express = require('express');
const app = express();
const mongoose =require('mongoose');
const router = express.Router()
const bodyParser = require('body-parser');
const passport=require('passport');
const registerRoute = require ('./routes/auth');
const path = require('path');
//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// //DB Config
// const db = require('./config/keys').mongoURI;

// //Connect to MongoDB
// mongoose
// 	.connect(db)
// 	.then( () => console.log('MongoDB Connected'))
//     .catch(err => console.log(err)); 

	app.use('/',registerRoute);

	app.use(express.static('client/build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    });

app.listen(process.env.PORT || 5000,()=>{
    console.log('server has started');
})