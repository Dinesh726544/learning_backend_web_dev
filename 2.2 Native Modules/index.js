const fs = require('fs');

// The content you want to write to the file
const content = 'Hello, World!';

// An invalid path (trying to write to a directory instead of a file)
const filePath = 'message.txt';

// Writing to the file asynchronously
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File has been written');
  }
});

console.log("King of Mirzapur");
