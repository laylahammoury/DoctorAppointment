const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Doctordb';

// Create a new MongoClient
const client = new MongoClient(url);

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertMany([
    {name : "Alia", role:"doctor"}, {name: "Ali", role:"doctor"}, {name : "Rana", role:"admin"}
  ], function(err, result) {
   
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Doctordb';

// Create a new MongoClient
const client = new MongoClient(url);

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertMany([
    {name : "Alia", role:"doctor"}, {name: "Ali", role:"doctor"}, {name : "Rana", role:"admin"}
  ], function(err, result) {
   
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
