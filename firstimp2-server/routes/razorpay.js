const express = require('express')
const router = express.Router();

const {authCheck} = require("../middlewares/auth")

const {createPaymentsIntegs} = require("../controllers/razorpay")

router.post("/create-payment-integrations", authCheck, createPaymentsIntegs)


module.exports = router