var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const fileName = 'index.html';
  const options = {
    root: path.join(__dirname, '..', 'public'),
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    }
    else {
      console.log('sent file: ', fileName);
    }
  });
});

module.exports = router;
