var express = require('express');
var router = express.Router();
const TestModel = require('../models/Test.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const testItems = await TestModel.find().exec();
  res.json({
    phrase: 'Hello World',
    items: testItems
  });
});

module.exports = router;
