const MongoClient = require('mongodb').MongoClient;
const dbname = 'betdata';
const url = "mongodb://localhost:27017";
let currMat = [];
let nextMat = [];

function connect(data) {
    console.log("hi");
    MongoClient.connect(url, function(err, client) {
        console.log("Connected Successfully" );
        let db = client.db(dbname);
        db.createCollection("main",function (err,res) {
            unique_id(data);
            db.collection("main").insertOne({Currmatch: currMat}, function(err, result) {
                if(err) throw err;
                console.log(result);
               /* db.collection("main").findOne({}, function(err, result) {
                    if (err) throw err;
                });*/
                client.close();
            });
        });
    })
}

function matchList(callback) {
    MongoClient.connect(url,function (err,client) {
        let db = client.db(dbname);
        db.collection("main").find({}).toArray(function (err,result) {
            console.log(result);
            let temp = JSON.stringify(result);
           callback(temp.substring(1, temp.length - 1));
            // callback(result);
        });
        client.close();
    });
}
function check(x) {
    if(x > 9){
        return x;
    }else{
        return "0" + x;
    }
}

function unique_id(json) {
    let date = new Date();
    let currDate = date.getFullYear() + "-" + check(date.getMonth() + 1) + "-" + check(date.getDate());
    for(let i = 0; i < json['matches'].length; i++){
        if(json['matches'][i]['date'].startsWith(currDate)){
            if(json['matches'][i]['matchStarted']){
                currMat.push(
                    {
                        unique_id: json['matches'][i]['unique_id'],
                        team_2: json['matches'][i]['team-2'],
                        team_1: json['matches'][i]['team-1'],
                        type: json['matches'][i]['type']
                    })
            }else{
                nextMat.push(
                    {
                        unique_id: json['matches'][i]['unique_id'],
                        team_2: json['matches'][i]['team-2'],
                        team_1: json['matches'][i]['team-1'],
                        type: json['matches'][i]['type']
                    })
            }
        }
    }
}
module.exports = {
    connect,
    matchList
};