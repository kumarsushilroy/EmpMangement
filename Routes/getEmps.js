
const express = require('express');

const router = express.Router();

const getEmploy = require('../Controllers/getEmp');

router.route('/get/emp').get(getEmploy);

module.exports = router;