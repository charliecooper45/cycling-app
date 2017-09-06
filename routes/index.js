const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers');
const homeController = require('../controllers/homeController');
const segmentController = require('../controllers/segmentController');
const authController = require('../controllers/authController');
const yearController = require('../controllers/yearController');
const fitnessController = require('../controllers/fitnessController');

router.get('/', authController.isLoggedIn, catchErrors(homeController.getHome));
router.get('/segments', authController.isLoggedIn, catchErrors(segmentController.getSegments));
router.get('/fitness', authController.isLoggedIn, catchErrors(fitnessController.getFitness));
router.get('/login', authController.loginForm);
router.get('/logout', authController.isLoggedIn, authController.logout);

router.post('/login', authController.login);
router.post('/year', catchErrors(yearController.createYear));
router.post('/year/delete', catchErrors(yearController.deleteYear));
router.post('/fitness/ftp', catchErrors(fitnessController.createFtp));
router.post('/fitness/ftp/delete', catchErrors(fitnessController.deleteFtp));

module.exports = router;
