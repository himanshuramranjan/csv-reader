
# csv-reader

csv-reader is a Node.js application that allows you to upload and read CSV files. It provides a user-friendly interface for uploading CSV files, listing the uploaded files, and displaying the data from each file in a structured format.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node index.js
   ```

2. Open your web browser and navigate to `http://localhost:8080`.

## Routes

The project has the following routes:

- `/upload` - Renders the upload page.
- `/files` - Lists the uploaded files.
- `/files/:filename` - Renders the data from a specific file.
- `/files/:filename` (DELETE) - Deletes a specific file.

## Project Structure

The project follows a specific file structure:

- `index.js` - The main entry point of the application.
- `app/controllers/fileController.js` - Controller for handling file-related operations.
  - `listFiles`: Lists the uploaded files.
  - `renderFileData`: Renders the data from a specific file.
  - `deleteFile`: Deletes a specific file.
- `app/controllers/uploadController.js` - Controller for handling upload-related operations.
  - `renderUpload`: Renders the upload page.
- `app/routes/fileRoutes.js` - Defines the routes related to file operations.
- `app/routes/uploadRoutes.js` - Defines the routes related to upload operations.
- `app/utils/csvUtils.js` - Utility functions for parsing CSV data.
- `app/utils/upload.js` - Configuration for file uploads using Multer.
- `public/` - Static files (CSS, images, etc.).
- `uploads/` - Directory for storing uploaded files.

## Contributing

Contributions are welcome! Here's how you can contribute to the project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add your commit message'`.
4. Push your changes to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.
