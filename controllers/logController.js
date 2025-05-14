const Log = require('../models/Log');

exports.getLogs = async (req, res) => {
    const logs = await Log.find();
    res.json(logs);
}

exports.createLog = async (req, res) => {
    const newLog = Log.create(req.body);
    res.status(201).json(newLog);
}