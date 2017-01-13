//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/people';

// Defines a function insertCollection:
function insertCollection(db, callback) {
  db.collection('self').insert(
  { "name": "an", "age": 30 },
  function(err, result) {
    console.dir("PERSON ADDED", result);
    callback();
  });
}

// db.collection.update(query, update, options)
function updateDocument(db, callback) {
  db.collection('self').update(
  { "name": "an" },
  { $set: { "age" : 31 } },
  function(err, result){
    console.dir("AGE UPDATED", result);
    callback();
  });
}

function findSelf(db, callback) {
  var cursor =db.collection('self').find( { "name": "an" } );
  cursor.each(function(err, doc){
    if (doc != null) {
      console.dir("FOUND MYSELF", doc);
    } else {
      callback();
    }
  });
};

function deleteDocument(db, callback) {
  db.collection('self').deleteMany(
    { "name": "an" },
    function(err, results) {
    console.dir("DROPPED SELF", results);
    callback();
    }
  );
};

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    // Call the insertCollection function.
    insertCollection(db, function() {
      db.close();
    });
    updateDocument(db, function() {
      db.close();
    });
    findSelf(db, function() {
      db.close();
    });
    deleteDocument(db, function() {
      db.close();
    });
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
  }
});







