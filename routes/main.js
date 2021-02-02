const express=require('express')
var path = require("path");

const router=express.Router();

router.get('/firstpage',(req,res)=>{
    res.render("index",{layout: false})
})

router.get('/loginpsge.html',(req,res)=>{
    res.sendFile(path.resolve('./html/loginpsge.html'))
})

router.get('/userRegister.html',(req,res)=>{
    res.sendFile(path.resolve('./html/userRegister.html'))
})

module.exports=router;