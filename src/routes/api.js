const express = require('express');
const { getData, filterData, sortData } = require('../controllers/dataController');

const router = express.Router();

router.get('/data', getData);
router.get('/data/filter', filterData);
router.get('/data/sort', sortData);

module.exports = router;
