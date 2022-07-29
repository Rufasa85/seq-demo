const express = require('express');
const router = express.Router();
const {Kitten,Toy} = require('../models');

router.get("/",async (req,res)=>{
    try {
        const toys = await Toy.findAll()
        res.status(200).json(toys)
    } catch (err) {
        res.status(500).json({
            msg:"internal server error",
            err
        })
    }
})

router.post("/",async (req,res)=>{
    try{
        const newToy = await Toy.create({
            name:req.body.name,
            description:req.body.description,
            KittenId:req.body.KittenId
        })
        res.status(201).json(newToy)
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg:"internal server error",
            err
        })
    }
})

module.exports = router