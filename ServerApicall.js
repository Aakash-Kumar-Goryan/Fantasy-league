const express = require('express');
const app = express();
const request = require('request');
const cors = require("cors");
const database = require('./database.js');

let Schema = require('./schema.js');

//const NextMatchesAPI = `http://cricapi.com/api/matches?apikey=CwtRTgGvnsWuMcmrUU6uchP4xT83`;
const FantasyAPISummary = `http://cricapi.com/api/fantasySummary?apikey=CwtRTgGvnsWuMcmrUU6uchP4xT83&unique_id=1122283`;

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

app.use('/unique_id',function (req,res) {
    request({url: FantasyAPISummary,type: 'get'},function (err,httpResponse,body) {
        database.scorecard(JSON.parse(body));
    });
    res.send('responded');
});

app.listen(8080,function () {
    console.log('Server is running on 8080');
    database.connect();
});