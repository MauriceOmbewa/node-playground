const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    text: {type: String, required: true},
    user:{type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Log', LogSchema);