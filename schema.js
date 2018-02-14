const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let currentMatchSchema = new Schema({
    unique_id: Number,
    team_2: String,
    team_1: String,
    type: String,
});
let nextMatchSchema = new Schema({
    unique_id: Number,
    team_2: String,
    team_1: String,
    type: String,
});

let fieldingScore = new Schema({
    name: String,
    runout: Number,
    stumped: Number,
    bowled: Number,
    lbw: Number,
    catch: Number,
    pid: String
});
let bowlingScore = new Schema({
    sixes: Number,
    fours: Number,
    zeroes: Number,
    Econ: String,
    W: String,
    R: String,
    M: String,
    O: String,
    bowler: String,
    pid: String
});
let battingScore = new Schema({
    dismissalBy:  {
       name: String,
       pid: String
    },
    dismissal: String,
    SR: Number,
    sixes: Number,
    fours: Number,
    B: String,
    R: String,
    dismissalInfo: String,
    batsman: String,
    pid: String
});
let matchPlayers = new Schema({
    name: String,
    pid: String
});
let dataSchema = new Schema({
    fielding: [{
        scores: [fieldingScore],
        title: String,
    }],
    bowling: [{
        scores: [bowlingScore],
        title: String
    }],
    batting: [{
        scores: [battingScore],
        title: String
    }],
    team: [{
        players: [matchPlayers],
        name: String
    }],
    man_of_the_match: "",
    toss_winner_team: String,
    winner_team: String,
    matchStarted: Boolean
});
let matchDataSchema = new Schema({
    data: dataSchema,
    type: String,
    dateTimeGMT: String,
    pubDate: String
});

let currentMatch = mongoose.model('currentMatches',currentMatchSchema);
let nextMatch = mongoose.model('nextMatches',nextMatchSchema);
let matchData = mongoose.model('matchData',matchDataSchema);

module.exports = {
    currentMatch,
    nextMatch,
    dataSchema,
    fieldingScore,
    bowlingScore,
    battingScore,
    matchPlayers,
    matchData
};
