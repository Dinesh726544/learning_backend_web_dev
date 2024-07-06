const fs = require('fs');
const path = require('path');

// Define the path to the file
const filePath = path.join(__dirname, 'example.txt');

// Read the file asynchronously
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File content:', data);
  }
});

console.log("Reading file...");
