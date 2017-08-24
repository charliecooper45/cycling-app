const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const yearController = require('../controllers/yearController');
const authController = require('../controllers/authController');

router.get('/', authController.isLoggedIn, catchErrors(yearController.getYears));
router.get('/login', authController.loginForm);
router.get('/logout', authController.isLoggedIn, authController.logout);

router.post('/login', authController.login);

module.exports = router;
