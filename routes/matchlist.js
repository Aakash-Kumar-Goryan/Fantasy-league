let express = require('express');
let request = require('request');
let router = express.Router();

const NextMatchesAPI = `http://cricapi.com/api/matches?apikey=NjAKUN2AH4TaHx5xqSVNScLAkk02`;
/* Send Match list page. */
router.get('/', function(req, res, next) {
    request({url: NextMatchesAPI, type:"get"}, function(err,httpResponse,body)
    {
        res.send(JSON.parse(body));
    });
});

module.exports = router;