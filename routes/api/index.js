const express = require('express');

// include sub-routers
const testRouter = require('./test.js');
const userRouter = require('./user.js');
const utilityRouter = require('./utility.js');
const categoryRouter = require('./category.js')

const router = express.Router();

// set up routing
router.use('/test', testRouter);
router.use('/user', userRouter);
router.use('/utility', utilityRouter);
router.use('/category', categoryRouter);

module.exports = router;