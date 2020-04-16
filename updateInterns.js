var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){

    if (err) throw err;
    var dbo = db.db("Jesuseme");
    var myQuery = {movie: "The Banker"}
    var newValues = {$set: {movie:"John Wick", year:"2019", rating: 10 } };
    dbo.collection("myMovies").updateOne(myQuery, newValues, function(err, res){

        if (err) throw err;
        console.log('--------------------------------------------------------');
        console.log('New updated Movie'); 
        console.log('--------------------------------------------------------');
        db.close();

    });

    dbo.collection("myMovies").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    
    });



});