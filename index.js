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
            name: 'textInput',
            validate: function (input) {
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Text has a maximum of 3 characters. Please try again.';
                }
            }
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
            logo = new Triangle();
        } else if (data.shapeChoice === 'Circle') {
            logo = new Circle();
        } else if (data.shapeChoice === 'Square') {
            logo = new Square();
        }
        logo.setColor(data.shapeColorChoice).toLowerCase();
        logo.setText(data.textInput);
        logo.setTextColor(data.textColorChoice).toLowerCase();
        const renderedLogo = logo.render();
        const logoFilesPath = path.join(examples, 'logo.svg');
        writeToFile(logoFilesPath, renderedLogo);
    })
}

init();