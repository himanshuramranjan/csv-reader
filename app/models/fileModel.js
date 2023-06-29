// app/models/fileModel.js
const fs = require('fs');
const path = require('path');

const fileModel = {};

fileModel.getUploadedFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir('./uploads', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

module.exports = fileModel;
