const dotenv=require('dotenv').config()
const express =require('express');
const app=express();

//Environment Variables init

const PORT =process.env.SERVER_PORT;

//server body init
app.use(express.json())
app.use(express.urlencoded({extended :false}))
//students route Use
app.use('/api/students',require('./routes/students'))

//add express express listener with port
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})