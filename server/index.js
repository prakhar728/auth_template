//IMPORTING EXPRESS AND CREATING APP INSTANCE
const express = require('express');
const app = express();
const cors= require('cors');
//TELLING EXPRESS TO USE BODY PARSER
app.use(express.json());
app.use(cors());

//DOTENV TO USE ENV FILES
const dotenv = require('dotenv');
dotenv.config();

//IMPORTING MONGOOSE AND CONNECTING TO THE DATABASE
const mong = require('mongoose');
mong.connect(process.env.MONGO_URI,()=>{
    console.log('Connected to DB!');
})

//IMPORTING ALL THE ROUTES
const authRoute = require('./routes/auth');

//USING THE ROUTES IN EXPRESS
app.use('/api/user',authRoute);


//SETTING THE PORT TO LISTEN
app.listen(5000,()=>{
    console.log('App live on 5000')
})