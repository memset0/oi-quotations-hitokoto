const path = require('path')
const express = require('express')
const router = express.Router()

const api = require('../modules/api')
console.log(api)

/* GET home page. */
router.get('/', function (req, res, next) {
	res.json({
		success: true,
		url: encodeURI(path.join('https://raw.githubusercontent.com/iotang/oiQuotations/master/', api.query()))
	})
});

module.exports = router;