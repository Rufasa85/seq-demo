const express = require('express');
const router = express.Router();
const kittenRoutes = require("./kittenController")
const userRoutes = require("./userController")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/kittens",kittenRoutes)
router.use("/api/users",userRoutes)

module.exports = router;