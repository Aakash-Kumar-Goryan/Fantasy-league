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

function scorecard(data) {
    console.log(data['data']['batting'][0]['scores'][0]['dismissal-by']['name']);
    let fieldingArray = [];
    let bowlingArray = [];
    let battingArray = [];
    let playerArray = [];
    for(let i=0;i<data['data']['fielding'].length;i++)
    {
        let fieldingScoreArray = [];
        for(let j=0;j<data['data']['fielding'][i]['scores'].length;j++)
        {
            let fieldingScore = {
                name: data['data']['fielding'][i]['scores'][j]['name'],
                runout: data['data']['fielding'][i]['scores'][j]['runout'],
                stumped: data['data']['fielding'][i]['scores'][j]['stumped'],
                bowled: data['data']['fielding'][i]['scores'][j]['bowled'],
                lbw: data['data']['fielding'][i]['scores'][j]['lbw'],
                catch: data['data']['fielding'][i]['scores'][j]['catch'],
                pid: data['data']['fielding'][i]['scores'][j]['pid']
            };
            fieldingScoreArray.push(fieldingScore);
        }
        fieldingArray.push({
            scores: fieldingScoreArray,
            title: data['data']['fielding'][i]['title']
        });
    }
    for(let i=0;i<data['data']['bowling'].length;i++)
    {
        let bowlingScoreArray = [];
        for(let j=0;j<data['data']['bowling'][i]['scores'].length;j++)
        {
            let bowlingScore = {
                sixes: data['data']['bowling'][i]['scores'][j]['6s'],
                fours: data['data']['bowling'][i]['scores'][j]['4s'],
                zeroes: data['data']['bowling'][i]['scores'][j]['0s'],
                Econ: data['data']['bowling'][i]['scores'][j]['Econ'],
                W: data['data']['bowling'][i]['scores'][j]['W'],
                R: data['data']['bowling'][i]['scores'][j]['R'],
                M: data['data']['bowling'][i]['scores'][j]['M'],
                O: data['data']['bowling'][i]['scores'][j]['O'],
                bowler: data['data']['bowling'][i]['scores'][j]['bowler'],
                pid: data['data']['bowling'][i]['scores'][j]['pid'],
            };
            bowlingScoreArray.push(bowlingScore);
        }
        bowlingArray.push({
            scores: bowlingScoreArray,
            title: data['data']['bowling'][i]['title']
        })
    }
    for(let i=0;i<data['data']['batting'].length;i++)
    {
        let battingScoreArray = [];
        for(let j=0;j<data['data']['batting'][i]['scores'].length;j++)
        {
            console.log(data['data']['batting'][i]['scores'][j]['dismissal-by']['name']);
            let battingScore = {
                dismissalBy:  {

                    name: data['data']['batting'][i]['scores'][j]['dismissal-by']['name'],
                    pid: data['data']['batting'][i]['scores'][j]['dismissal-by']['pid']
                },
                dismissal: data['data']['batting'][i]['scores'][j]['dismissal'],
                SR: data['data']['batting'][i]['scores'][j]['SR'],
                sixes: data['data']['batting'][i]['scores'][j]['6s'],
                fours: data['data']['batting'][i]['scores'][j]['4s'],
                B: data['data']['batting'][i]['scores'][j]['B'],
                R: data['data']['batting'][i]['scores'][j]['R'],
                dismissalInfo: data['data']['batting'][i]['scores'][j]['dismissal-info'],
                batsman: data['data']['batting'][i]['scores'][j]['batsman'],
                pid: data['data']['batting'][i]['scores'][j]['pid']
            };
            battingScoreArray.push(battingScore);
        }
        battingArray.push({
            scores: battingScoreArray,
            title: data['data']['batting'][i]['title']
        });
    }
    for(let i=0;i<data['data']['team'].length;i++)
    {
        let matchPlayerArray = [];
        for(let j=0;j<data['data']['team'][i]['players'].length;j++)
        {
            let matchPlayers = {
                name: data['data']['team'][i]['players'][j]['name'],
                pid: data['data']['team'][i]['players'][j]['pid']
            };
            matchPlayerArray.push(matchPlayers);
        }
        playerArray.push({
            players: matchPlayerArray,
            name: data['data']['team'][i]['name']
        });
    }
    let scoreDetails = {
        fielding: fieldingArray,
        bowling: bowlingArray,
        batting: battingArray,
        team: playerArray,
        man_of_the_match: data['data']['man-of-the-match'],
        toss_winner_team: data['data']['toss_winner_team'],
        winner_team: data['data']['winner_team'],
        matchStarted: data['data']['matchStarted']
    };
    let scoredata = Schema.matchData({
        data: [scoreDetails],
        type: data['type'],
        dateTimeGMT: data['dateTimeGMT'],
        pubDate: data['provider']['pubDate']
    });
    scoredata.save(function (err) {
        if(err) throw err;
    })
}

module.exports = {
    connect,
    matches,
    scorecard
};