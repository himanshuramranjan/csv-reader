const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// Import routes
const uploadRoutes = require('./app/routes/uploadRoutes');
const fileRoutes = require('./app/routes/fileRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Set up routes
app.use('/', uploadRoutes);
app.use('/files', fileRoutes);

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
