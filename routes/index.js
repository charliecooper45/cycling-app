const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers');
const homeController = require('../controllers/homeController');
const segmentController = require('../controllers/segmentController');
const authController = require('../controllers/authController');
const yearController = require('../controllers/yearController');
const fitnessController = require('../controllers/fitnessController');
const targetController = require('../controllers/targetController');

router.get('/', authController.isLoggedIn, catchErrors(homeController.getHome));
router.get('/segments', authController.isLoggedIn, catchErrors(segmentController.getSegments));
router.get('/fitness', authController.isLoggedIn, catchErrors(fitnessController.getFitness));
router.get('/login', authController.loginForm);
router.get('/logout', authController.isLoggedIn, authController.logout);
router.get('/target/refresh', authController.isLoggedIn, targetController.refreshTargetValues);

router.post('/login', authController.login);
router.post('/year', authController.isLoggedIn, catchErrors(yearController.createYear));
router.post('/year/delete', authController.isLoggedIn, catchErrors(yearController.deleteYear));
router.post('/target', authController.isLoggedIn, catchErrors(targetController.createTarget));
router.post('/target/delete', authController.isLoggedIn, catchErrors(targetController.deleteTarget));
router.post('/fitness/ftp', authController.isLoggedIn, catchErrors(fitnessController.createFtp));
router.post('/fitness/ftp/delete', authController.isLoggedIn, catchErrors(fitnessController.deleteFtp));
router.post('/fitness/weight', authController.isLoggedIn, catchErrors(fitnessController.createWeight));
router.post('/fitness/weight/delete', authController.isLoggedIn, catchErrors(fitnessController.deleteWeight));

module.exports = router;
