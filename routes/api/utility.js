const express = require('express');
const router = express.Router();
const utilityController = require('../../controllers/api/utilityController.js');

router.post('/login', utilityController.login);
router.get('/userInfo', utilityController.fetchUserInfo);
router.get('/logout', utilityController.logout);
router.post('/update-shopping-cart', utilityController.updateShoppingCart);
router.get('/fetch-shopping-cart', utilityController.fetchShoppingCart)
router.post('/increase-quantity', utilityController.increaseQuantity);
router.post('/decrease-quantity', utilityController.decreaseQuantity);

module.exports = router;