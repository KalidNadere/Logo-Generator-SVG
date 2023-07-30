const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');
const path = require('path');

// Using inquirer to prompt user for input and validate response
const promptUser = () => {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter upto three characters for the logo:',
      validate: function (input) {
        if (!input || input.length > 3) {
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
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Triangle', 'Circle', 'Square'],
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

  // Generate appropriate answers based on user's choice
  .then ((answers) => {
    let shape;

    switch (answers.shape) {
      case 'Triangle':
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'Circle':
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'Square':
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
        break;
      default:
        console.error('invalid shape choice');
        return;
  }

  // Code to write SVG content for selected shape
  const svgContent = shape.getSVG();
  
  // Save SVG content for the logo generated & handle errors
  const fileName = 'logo.svg';
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, svgContent, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
      return;
    }
    console.log(`Generated ${fileName}`);
  });
})
.catch((error) => console.error(error));
};

// Call promptUser function to start application
promptUser();