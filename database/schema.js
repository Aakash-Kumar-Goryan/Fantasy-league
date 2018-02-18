const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let matchDataSchema = new Schema({
    unique_id: Number,
    data: Object
});

let matchData = mongoose.model('matchDatas',matchDataSchema);

module.exports = {
    matchData
};