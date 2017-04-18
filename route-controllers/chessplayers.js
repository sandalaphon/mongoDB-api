var express = require('express');
var app = express();
var chessRouter = express.Router();
var ChessQuery = require('../db/chessQuery')
var chessQuery = new ChessQuery();

//chess index
chessRouter.get('/', function(req, res) {
  
  chessQuery.all(function(docs){
    console.log(docs)
    res.json(docs)
  });
});

chessRouter.post('/', function(req, res){
  var newPlayer = {
    name: req.body.name,
    rating: req.body.rating
  }

  chessQuery.add(newPlayer, function(results){
    res.json(results)
  })
});

module.exports = chessRouter;