const express = require("express")
const { loginFxn } = require("../controllers/authCtrl")

const router = express.Router()




router.post("/login", loginFxn)



module.exports = router