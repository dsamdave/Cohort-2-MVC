const express = require("express")
const { handleExaple } = require("../controllers/testCtrl")

const router = express.Router()


router.get("/example", handleExaple)

module.exports = router