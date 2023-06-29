// app/routes/fileRoutes.js
const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.get('/', fileController.listFiles);
router.get('/:filename', fileController.renderFileData);
router.delete('/:filename', fileController.deleteFile);

module.exports = router;
