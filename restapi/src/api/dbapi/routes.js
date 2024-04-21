const { Router } = require('express');

// Import controllers
const masterC = require('./controller/masterController');
const transactionC = require('./controller/transactionController');
const budgetC = require('./controller/budgetController');
const balanceC = require('./controller/balancesController');

const router = Router();

// MASTER
// Master: GET
router.get('/users', masterC.getUserWithEmail);  // Use get w/ param. ?email=[insert email]
router.get('/users/all', masterC.getUsers); // Use get w/o params.
// Master: PUT
router.put('/users/add', masterC.addUserWithEmail); // Use get w/ JSON { "user_id": _, "p_token": _, }


// TSXNS
// Transactions: GET
router.get('/txns/:id/all', transactionC.getAllTransactionsByUser); // Use get w/ user_id in URL; ex., /txns/4/all
router.get('/txns/all', transactionC.getAllTransactions) // Use get w/o params.
router.get('/txns/', transactionC.getUserTransactionByAuthdate); // Use get w/ param. ?id_&?date=_ (& necessary)
// Transactions: PUT
// Use put w/ JSON { "user_id": _, "amount": _, "datetime": _, "auth_datetime": _, "merchant_name": _, "transaction_name": _, "category", _, }
router.put('/users/txns/add', transactionC.addUserTransaction)

module.exports = router;