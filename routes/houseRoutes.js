var express = require('express');
var houseController = require('../controller/houseController');
var router = express.Router();

// GET /houses
router.get('/', houseController.getAllHouses);

// GET /houses/:name
router.get('/:name', houseController.getHouseByName);

module.exports = router;