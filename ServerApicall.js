const express = require('express');
const app = express();
const request = require('request');
const mongo = require('./database');

let url = `http://cricapi.com/api/matches?apikey=CwtRTgGvnsWuMcmrUU6uchP4xT83`;
//let apikey = 'CwtRTgGvnsWuMcmrUU6uchP4xT83';

request.get({url: url}, function(err,httpResponse,body)
{
    //console.log(body);
    mongo.connect(body);
});
app.listen(8080,function () {
    console.log("Server is running on 8080");
});