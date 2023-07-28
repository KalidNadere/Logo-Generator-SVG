const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square, shapes
} = require('./lib/shapes');
const { error } = require('console');

// Using inquirer to prompt user for input and validate response
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter upto three characters for the logo:',
      validate: function (input) {
        if (!input || input.lenght > 3) {
        return 'Please enter up to three characters.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):',
    validate: function (input) {
      if (!input.match(/^#[0-9A-Fa-f]{6}$|^[A-Za-z]+$/)) {
        return 'Please enter a valid color keyword or hexadecimal number.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: shapes,
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):',
    validate: function (input) {
      if (!input.match(/^#[0-9A-Fa-f]{6}$|^[A-Za-z]+$/)) {
        return 'Please enter a valid color keyword or hexadecimal number.';
      }
      return true;
    },
  },
  ])

  // Using .then to generate logo, in conjunction with Promises
  .then(generateLogo)

  // Using .catch to handle any errors, in conjunction with Promises
  .catch((error) => console.error (error));

  // Function to generate logo based on user's answers
  function generateLogo(answers) {
    const {text,  textColor, shape, shapeColor} = answers;
    let svgContent;

    switch (shape) {
      case 'circle':
        svgContent = new Circle(text, textColor, shapeColor).getSVG();
      break;
    case 'triangle':
      svgContent = new Triangle(text, textColor, shapeColor).getSVG();
      break;
    case 'square':
      svgContent - new Square(text, textColor, shapeColor).getSVG();
      break;
  }

  // Code to write & save SVG content for the logo generated, & handle errors
  const fileName = 'logo.svg';
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, svgContent, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
      return;
    }
    console.log(`Generated ${fileName}`);
  });
}