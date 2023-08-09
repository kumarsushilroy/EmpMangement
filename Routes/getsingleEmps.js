
const express = require('express');

const router = express.Router();

const getsigle = require('../Controllers/getsingleEmp');

router.route('/get/single/emp/:id').get(getsigle);

module.exports = router;