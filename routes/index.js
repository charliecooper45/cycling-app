const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const homeController = require('../controllers/homeController');
const segmentController = require('../controllers/segmentController');
const authController = require('../controllers/authController');

router.get('/', authController.isLoggedIn, catchErrors(homeController.getHome));
router.get('/segments', authController.isLoggedIn, catchErrors(segmentController.getSegments));
router.get('/login', authController.loginForm);
router.get('/logout', authController.isLoggedIn, authController.logout);

router.post('/login', authController.login);

module.exports = router;
