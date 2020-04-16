var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if (err) throw err;
    var dbo = db.db("Jesuseme");
    dbo.collection("myMovies").findOne({}, function(err, result){   //first collection document
        if (err) throw err;
        console.log('------------------------------------------------------');
        console.log('First object in the myMovies collection');
        console.log( result);
        console.log('------------------------------------------------------');
        db.close();
    });
    
    var query = {rating: 7};
    dbo.collection("myMovies").find(query).toArray(function(err, result){ //movies rated a 7
        if (err) throw err;
        console.log('-------------------------------------------------------');
        console.log('These are the movies that are Rated 7');
        console.log(result);
        console.log('--------------------------------------------------------');
        db.close();
    });

    dbo.collection("myMovies").find({}, {projection: {_id : 0, movie : 1} } ).toArray(function(err, result){
        if (err) throw err;
        console.log('--------------------------------------------------------');
        console.log('Full Movie list with only the names');
        console.log(result);
        console.log('--------------------------------------------------------');
        db.close();
    });

});