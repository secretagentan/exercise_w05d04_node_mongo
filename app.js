//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/people';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    // Call the insertDocument function.
    insertDocument(db, function(){
      db.close();
    updateDocument(db, function(){
      db.close();
    });
    console.log('Connection established to', url);
    });
  }
});

// Defines a function insertDocument:
var insertDocument = function(db, callback) {
  db.collection('self').insert( {
    "name": "an",
    "age": 30
  }, function(err, result) {
    console.log("PERSON ADDED");
    callback();
  });
};

// db.collection.update(query, update, options)
var updateDocument = function(db, callback) {
  db.collection('self').updateOne(
  { "self_id": "58782ccf5d9b891a7b684549" },
    { $set: { "age": 31 } },
    function(err, result){
      console.log("AGE UPDATED");
      callback();
  });
};





