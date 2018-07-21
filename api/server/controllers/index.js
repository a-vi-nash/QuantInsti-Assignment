'use strict';
const express = require('express'),
    router = express.Router();

router.use('/ingredients', require('./ingredients'));
router.use('/coupons', require('./coupons'));
router.use('/order', require('./order'));

module.exports = router;
