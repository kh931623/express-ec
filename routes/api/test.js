const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        msg: 'Hell yeah, bitches!'
    });
});

module.exports = router;