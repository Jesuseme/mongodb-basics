var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Jesuseme");
  dbo.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log(" interns Collection created!");
    db.close();
  });
}); 