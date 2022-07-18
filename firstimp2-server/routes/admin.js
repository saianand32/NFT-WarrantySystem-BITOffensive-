const express = require("express");

const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controllers
const { orders, orderStatus , uploadSliderImage} = require("../controllers/admin");

//routes
router.get("/admin/orders", authCheck, adminCheck, orders);

router.put("/admin/order-status", authCheck, adminCheck, orderStatus);

router.put("/admin/uploadSliderImage", uploadSliderImage);


module.exports = router;
