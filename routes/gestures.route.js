const express = require('express');
const {getGestures, getGesture, createGesture, updateGesture, deleteGesture} = require("../controllers/gestures.controller");
let router = express.Router();

router.get('/', getGestures);

router.get('/:id', getGesture);

router.post('/', createGesture);

router.put('/:id', updateGesture);

router.delete('/:id', deleteGesture);

module.exports = router;