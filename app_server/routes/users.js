const express = require('express');
const router = express.Router();

const ctrlUsers = require('../controllers/users');

/* Login and Register Pages */
router.get('/login', ctrlUsers.login);
router.post('/login', ctrlUsers.login);
router.get('/register', ctrlUsers.register);
router.post('/register', ctrlUsers.register);

module.exports = router;
