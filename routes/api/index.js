const express = require('express');

// include sub-routers
const testRouter = require('./test.js');
const userRouter = require('./user.js');

const router = express.Router();

// set up routing
router.use('/test', testRouter);
router.use('/user', userRouter);

module.exports = router;