const express = require('express')
const router = express.Router()

router.get("/login",(res,req)=>{
    console.log("Require Router Star")
    res.sendFile(__dirname + "../views/loginScreen.html")
})

module.exports = router 