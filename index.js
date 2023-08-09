const { Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const examples = './examples';

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('Successfully generated logo.svg!'))
}

function init() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select a shape for your logo.',
            choices: ['Trianlge', 'Circle', 'Square'],
            name: 'shapeChoice'
        },
        {
            type: 'input',
            message: 'What color shape would you like for your logo?',
            name: 'shapeColorChoice'
        },
        {
            type: 'input',
            message: 'Please enter text for your logo (maximum of 3 characters).',
            name: 'textInput'
        },
        {
            type: 'input',
            message: 'What color would you like your logo text to be?',
            name: 'textColorChoice'
        }
    ])
    .then((data) => {
        let logo = '';
        if (data.shapeChoice === 'Triangle') {
            logo = new Triangle(data.textInput, data.textColorChoice);
        } else if (data.shapeChoice === 'Circle') {
            logo = new Circle(data.textInput, data.textColorChoice);
        } else if (data.shapeChoice === 'Square') {
            logo = new Square(data.textInput, data.textColorChoice);
        }
        logo.setColor(data.shapeColorChoice);
        const renderedLogo = logo.render();
        const logoFilesPath = path.join(examples, 'logo.svg');
        writeToFile(logoFilesPath, renderedLogo);
    })
}

init();