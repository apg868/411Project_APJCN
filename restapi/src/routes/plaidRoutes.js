const express = require('express');
const router = express.Router();
const { createLinkTokenHandler } = require('../controllers/plaidController');

router.post('/create_link_token', createLinkTokenHandler);

module.exports = router;
