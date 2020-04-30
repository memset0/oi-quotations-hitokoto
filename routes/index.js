const path = require('path')
const express = require('express')
const router = express.Router()

const api = require('../modules/api')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.json({
		success: true,
		url: api.query()
	})
});

module.exports = router;