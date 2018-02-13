const express = require('express');
const app = express();
const request = require('request');
const mongo = require('./database');
const cors = require("cors");

let url = `http://cricapi.com/api/matches?apikey=CwtRTgGvnsWuMcmrUU6uchP4xT83`;

app.use(cors());
app.use('/',function (req,res) {
    console.log("hi");
    mongo.matchList(function (data) {
        res.send(data);
    });
});
request({url: url, type:"post"}, function(err,httpResponse,body)
{
    mongo.connect(JSON.parse(body));
});


app.listen(8080,function () {
    console.log("Server is running on 8080");
});