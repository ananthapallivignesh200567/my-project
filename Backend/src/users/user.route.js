const express=require('express');
const User=require("./user.model")
const router=express.Router();

//Register endpoint
router.post('/register',async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user=new User({email,username,password})
        await user.save()
        res.status(201).send({message:"user registration successful"})
    }catch(error){
        console.error("error registering user",error);
        res.status(500).send({message:"error registering user"})
    }
})

//login user endpoint
router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).send({message:"no users found"})
    }
    const isMatch=await user.comparePassword(password)
    if(!isMatch){
        return res.status(400).send({message:"invalid password"})
    }
    res.status(200).send({message:"login succesful",user})
})

module.exports=router;