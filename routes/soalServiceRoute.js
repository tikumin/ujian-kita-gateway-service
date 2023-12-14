const express = require('express');
const soalServiceController = require('../controllers/SoalServiceController');
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router();
router.post('/create', verifyToken, soalServiceController.createSoal);
router.get('/list', verifyToken, soalServiceController.listSoal);
router.get('/:id', verifyToken, soalServiceController.getSoal);
router.put('/:id', verifyToken, soalServiceController.editSoal);
router.delete('/:id', verifyToken, soalServiceController.deleteSoal);

module.exports = router;