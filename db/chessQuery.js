var MongoClient = require('mongodb').MongoClient;

var ChessQuery = function(){
  this.url = "mongodb://localhost:27017/chess_site";
};

ChessQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('players')
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  },

  //POST REQUEST
  add: function(playerToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('players')
        collection.insert(playerToAdd)
        collection.find().toArray(function(err, docs){
          console.log(docs)
          onQueryFinished(docs)
        })
      }
    })
  }
}

module.exports = ChessQuery