const express = require('express');
const router = express.Router();
const { createLinkTokenHandler } = require('./plaidController');
const plaidController = require('./plaidController');


router.post('/create_link_token', createLinkTokenHandler);
router.post('/exchange_public_token', plaidController.exchangePublicToken);
router.post('/update_transactions', plaidController.updateTransactions)

module.exports = router;
