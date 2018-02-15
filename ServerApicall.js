const express = require('express');
const app = express();
const request = require('request');
const cors = require("cors");
const database = require('./database.js');

let Schema = require('./schema.js');

//const NextMatchesAPI = `http://cricapi.com/api/matches?apikey=NjAKUN2AH4TaHx5xqSVNScLAkk02`;
const FantasyAPISummary = `http://cricapi.com/api/fantasySummary?apikey=NjAKUN2AH4TaHx5xqSVNScLAkk02&unique_id=`;

app.use(cors());
/*
request({url: NextMatchesAPI, type:"get"}, function(err,httpResponse,body)
{
    database.matches(JSON.parse(body));
});
*/
app.use('/currMatch',function (req,res) {
    Schema.currentMatch.find({},function (err,data) {
        if(err) throw  err;
        res.send(JSON.stringify(data));
    })
});

app.use('/nextMatch',function (req,res) {
    Schema.nextMatch.find({},function (err,data) {
        if(err) throw err;
        res.send(JSON.stringify(data));
    })
});

app.use('/unique_id/:id',function (req,res) {
    Schema.matchData.findOne({unique_id: req.params.id},function (err,docs) {
        if(docs == null)
        {
            request({url: FantasyAPISummary+req.params.id,type: 'get'},function (err,httpResponse,body) {
                if(JSON.parse(body)['data']['winner_team']!=="")
                {
                    console.log('ji');
                    database.storeScorecard(JSON.parse(body),req.params.id);
                }
                console.log('bye');
                res.send(JSON.parse(body));
            });
        }
        else
        {
            res.send(docs['data']);
        }
    });
});

app.listen(8080,function () {
    console.log('Server is running on 8080');
    database.connect();
});