const Log = require('../models/Log');

exports.getLogs = async (req, res) => {
    const logs = await Log.find();
    res.json(logs);
}