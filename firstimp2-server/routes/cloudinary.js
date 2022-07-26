const express = require('express');
const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {upload, remove , sliderUpload, sliderRemove} = require("../controllers/cloudinary");

router.post('/uploadimages', authCheck, adminCheck, upload)
router.post('/removeimages', authCheck, adminCheck, remove)

router.post('/uploadsliderimages', authCheck, adminCheck, sliderUpload)
router.post('/removesliderimages', authCheck, adminCheck, sliderRemove)

module.exports = router;