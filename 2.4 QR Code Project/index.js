/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 1. Use the inquirer npm package to get user input.

import inquirer from "inquirer";

import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "url",
      message: "Enter your URL:",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("User input:", answers.url);

    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.

    var qr_svg = qr.image(answers.url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("qr.txt", answers.url, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file', err);
      } else {
        console.log('File has been written');
      }
    });

    // var svg_string = qr.imageSync(answers.url, { type: "png" });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// var qr = require('qr-image');
