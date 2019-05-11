const express = require('express');

// include sub-routers
const testRouter = require('./test.js');
const userRouter = require('./user.js');
const utilityRouter = require('./utility.js');
const categoryRouter = require('./category.js');
const productRouter = require('./product.js');

const router = express.Router();

// set up routing
router.use('/test', testRouter);
router.use('/user', userRouter);
router.use('/utility', utilityRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;