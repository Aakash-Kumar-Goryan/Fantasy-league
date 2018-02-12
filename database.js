const MongoClient = require('mongodb').MongoClient;
const dbname = 'betdata';
const url = "mongodb://localhost:27017";

function connect(data) {
    console.log("hi");
    MongoClient.connect(url, function(err, client) {
        console.log("Connected Successfully" );
        let db = client.db(dbname);
        db.createCollection("main",function (err,res) {
            console.log("bhag bhosdk")
        });
        db.collection("main").insertOne(data);
        db.collection("main").findOne({}, function(err, result) {
            if (err) throw err;
            console.log(result);
            // db.close();
        });
        client.close();
    })
}

module.exports = {
    connect
};