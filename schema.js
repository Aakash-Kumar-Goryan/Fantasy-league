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

let matchDataSchema = new Schema({
    unique_id: Number,
    data: Object
});

let currentMatch = mongoose.model('currentMatches',currentMatchSchema);
let nextMatch = mongoose.model('nextMatches',nextMatchSchema);
let matchData = mongoose.model('matchDatas',matchDataSchema);

module.exports = {
    currentMatch,
    nextMatch,
    matchData
};
