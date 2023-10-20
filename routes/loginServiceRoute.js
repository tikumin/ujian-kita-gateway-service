const express = require('express');
const authServiceController = require('../controllers/authServiceController')

const router = express.Router();
router.post('/register', authServiceController.register);
router.post('/login', authServiceController.login);
router.get('/verify', authServiceController.verify);
router.post('/change-password-request', authServiceController.forgotPasswordSend);
router.post('/change-password', authServiceController.changePassword);

module.exports = router;
