const express = require('express');
const router = express.Router();
const {
  getLogs,
  createLog,
  updateLog,
  deleteLog
} = require('../controllers/logController');

router.get('/', getLogs);
router.post('/', createLog);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;
