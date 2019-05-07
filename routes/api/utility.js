const express = require('express');
const router = express.Router();
const utilityController = require('../../controllers/api/utilityController.js');

router.post('/login', utilityController.login);

module.exports = router;