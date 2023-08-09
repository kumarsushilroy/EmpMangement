
const express = require('express');

const router = express.Router();

const updateEmploy = require('../Controllers/updateEmp');

router.route('/update/emp/:id').put(updateEmploy);

module.exports = router;