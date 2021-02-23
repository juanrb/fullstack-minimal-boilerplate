const express = require('express');
const router = express.Router();

router.use('/', express.static('public'));

/**
 * Add API routes here
 * @example router.use('/api/sample', require('./api/sample/routes'));
 */


module.exports = router;
