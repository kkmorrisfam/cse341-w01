const express = require("express");
const router = express.Router();

// need to import controller to use in routes
const professionalController  = require('../controllers/professional');

router.get('/professional', professionalController.getData);

module.exports = router;