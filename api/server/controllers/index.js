'use strict';
const express = require('express'),
    router = express.Router();

router.use('/ingredients', require('./ingredients'));

module.exports = router;
