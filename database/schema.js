const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let matchDataSchema = new Schema({
    unique_id: Number,
    data: Object
});

let userSchema = new Schema({
    FirstName: String,
    LastName: String,
    DateOfBirth: Date,
    Country: String,
    MobileNumber: Number,
    Gender: String,
    Address: String,
    UserName: String,
    Email: String,
    Password: String
});

let matchData = mongoose.model('matchDatas',matchDataSchema);
let Users = mongoose.model('Users',userSchema);
module.exports = {
    matchData,
    Users
};