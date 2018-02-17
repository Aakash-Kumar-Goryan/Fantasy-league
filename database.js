const mongoose = require('mongoose');
const dbname = 'betdata';
const url = 'mongodb://localhost/'+dbname;
const Schema = require('./schema.js');

function connect() {
    mongoose.connect(url);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to database')
    });
}

function check(x) {
    if(x > 9){
        return x;
    }else{
        return "0" + x;
    }
}

function matches(json) {
    let date = new Date();
    let currDate = date.getFullYear() + "-" + check(date.getMonth() + 1) + "-" + check(date.getDate());
    for(let i = 0; i < json['matches'].length; i++){
        if(json['matches'][i]['date'].startsWith(currDate)){
            if(json['matches'][i]['matchStarted']){
                let currMatch = Schema.currentMatch({
                    unique_id: json['matches'][i]['unique_id'],
                    team_2: json['matches'][i]['team-2'],
                    team_1: json['matches'][i]['team-1'],
                    type: json['matches'][i]['type']
                });
                currMatch.save(function (err) {
                    if(err) throw err;
                })
            }else{
                let nextMatch = Schema.nextMatch({
                    unique_id: json['matches'][i]['unique_id'],
                    team_2: json['matches'][i]['team-2'],
                    team_1: json['matches'][i]['team-1'],
                    type: json['matches'][i]['type']
                });
                nextMatch.save(function (err) {
                    if(err) throw err;
                })
            }
        }
    }
}

function storeScorecard(data,id) {
    let scorecard = Schema.matchData({
        unique_id: id,
        data: data
    });
    scorecard.save(function (err,data) {
        if(err) throw err;
    })
}

module.exports = {
    connect,
    matches,
    storeScorecard,
};