const express = require('express');
const identifyController = require('../controllers/identify.controller');
const router = express.Router();

router.post('', identifyController.placeOrder);

module.exports = router