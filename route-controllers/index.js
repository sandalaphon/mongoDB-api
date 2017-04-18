var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/chessplayers', require('./chessplayers'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  
});

module.exports = router;