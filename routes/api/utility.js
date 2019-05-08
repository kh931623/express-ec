const express = require('express');
const router = express.Router();
const utilityController = require('../../controllers/api/utilityController.js');

router.post('/login', utilityController.login);
router.get('/userInfo', utilityController.fetchUserInfo);
router.get('/logout', utilityController.logout);

module.exports = router;