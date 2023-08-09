
const express = require('express');

const router = express.Router();

const createEmploy = require('../Controllers/createEmp');

router.route('/post/emp').post(createEmploy);

module.exports = router;