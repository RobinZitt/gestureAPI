const express = require('express')
const {getAllAnalysis, getAnalysis, createAnalysis, deleteAnalysis} = require("../controllers/analysis.controller");
let router = express.Router();

router.get('/', getAllAnalysis);

router.get('/:id', getAnalysis);

router.post('/', createAnalysis);

router.delete('/:id', deleteAnalysis);

module.exports = router;