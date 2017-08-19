const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const yearController = require('../controllers/yearController');
const authController = require('../controllers/authController');

router.get('/', authController.isLoggedIn, catchErrors(yearController.getYears));
router.get('/login', authController.loginForm);

router.post('/login', authController.login);

module.exports = router;
