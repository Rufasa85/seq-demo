const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get("/",(req,res)=>{
    User.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"oh noes! error!",err})
    })
})

router.post("/",(req,res)=>{
    User.create(req.body).then(newUser=>{
        res.json(newUser)
    }).catch(err=>{
        res.status(500).json({msg:"oh noes! error!",err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({
                msg:"invalid login credentials"
            })
        }
        if(foundUser.password!==req.body.password){
            return res.status(401).json({
                msg:"invalid login credentials"
            })
        }
        res.json(foundUser)
    })
})

module.exports = router;