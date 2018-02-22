let express = require('express');
let request = require('request');
let router = express.Router();

let Schema = require('../database/schema');

const FantasyAPISummary = `http://cricapi.com/api/fantasySummary?apikey=NjAKUN2AH4TaHx5xqSVNScLAkk02&unique_id=`;
/* GET home page. */
router.get('/:id', function(req, res, next) {
    let x = req.session;
    if(x!==null)
        console.log("sd: " + JSON.stringify(x));
    Schema.matchData.findOne({unique_id: req.params.id},function (err,docs) {
        if(docs == null)
        {
            request({url: FantasyAPISummary+req.params.id,type: 'get'},function (err,httpResponse,body) {
                if('winner_team' in JSON.parse(body)['data']) {
                    if (JSON.parse(body)['data']['winner_team'] !== "") {
                        console.log('ji');
                        storeScorecard(JSON.parse(body), req.params.id);
                    }
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

function storeScorecard(data,id) {
    let scorecard = Schema.matchData({
        unique_id: id,
        data: data
    });
    scorecard.save(function (err,data) {
        if(err) throw err;
    })
}
module.exports = router;