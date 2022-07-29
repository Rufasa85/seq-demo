const express = require('express');
const router = express.Router();
const kittenRoutes = require("./kittenController")
const userRoutes = require("./userController")
const toyRoutes = require("./toyController")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/kittens",kittenRoutes)
router.use("/api/users",userRoutes)
router.use("/api/toys",toyRoutes)

module.exports = router;