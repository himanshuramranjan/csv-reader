// app/controllers/fileController.js
const fs = require('fs');
const path = require('path');
const csvUtils = require('../../app/utils/csvUtils');
const upload = require('../utils/upload');

const fileController = {};

fileController.listFiles = (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading files.');
    } else {
      res.render('files', { files });
    }
  });
};

fileController.uploadFiles = (req, res) => {
  const files = req.files;
  if (!files || files.length === 0) {
    res.status(400).send('No files uploaded.');
  } else {
    res.redirect('/files');
  }
};


fileController.renderFileData = (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../../uploads', filename);
  const data = fs.readFileSync(filepath, 'utf-8');
  const parsedData = csvUtils.parseCSV(data);
  res.render('data', { filename, data: parsedData });
};

fileController.deleteFile = (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../../uploads', filename);

  fs.unlink(filepath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting file.');
    } else {
      console.log(`Deleted file: ${filename}`);
      res.redirect('/files');
    }
  });
};

module.exports = fileController;
