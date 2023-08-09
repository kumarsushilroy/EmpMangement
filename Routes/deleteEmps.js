
const express = require('express');

const router = express.Router();

const delteEmp = require('../Controllers/deleteEmp');

router.route('/delete/emp/:id').delete(delteEmp);

module.exports = router;