// app/routes/uploadRoutes.js
const express = require('express');
const uploadController = require('../controllers/uploadController');
const fileController = require('../controllers/fileController');
const upload = require('../utils/upload');

const router = express.Router();

router.get('/', uploadController.renderUpload);
router.post('/', upload.array('csvFiles'), fileController.uploadFiles);



module.exports = router;
