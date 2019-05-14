const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/api/orderController');

router.get('/', orderController.fetchOrderList);
router.post('/', orderController.createOrder);

module.exports = router;