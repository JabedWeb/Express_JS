//npm init
//Description
//Author
//CommonJS

//====Express is the developer Package not building package=====//
// npm install express nodemon dotenv

//File Structure
//controllers,models,routes,middleware,data()
const dotenv=require('dotenv').config()
const express =require('express');
const app=express();  
 
//Environment Variables init
const PORT =process.env.SERVER_PORT;

//server body init
app.use(express.json())
app.use(express.urlencoded({extended :false}))

// app.delete('/api/students/:id',(req,res)=>{
//     res.send(`Delete Route Done with id : ${req.params.id} `)
// });
//students route Use
app.use('/api/students',require('./routes/students'))

//add express express listener with port
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})