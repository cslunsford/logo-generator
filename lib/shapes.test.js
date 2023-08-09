const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a blue triangle with white text reading SVG', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="125" fill="white" font-size="60" text-anchor="middle">SVG</text> </svg>`);
        })
    })
    describe('Circle', () => {
        it('should return a blue circle with white text reading SVG', () => {
            const shape = new Circle();
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <circle cx="150" cy="100" r="80" fill="blue" /> <text x="150" y="125" fill="white" font-size="60" text-anchor="middle">SVG</text> </svg>`);
        })
    })
    describe('Square', () => {
        it('should return a blue square with white text reading SVG', () => {
            const shape = new Square();
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setTextColor('white');
            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <rect x="0" y="0" width="200" height="200" fill="blue" /> <text x="100" y="100" fill="white" font-size="60" text-anchor="middle" dominant-baseline="central">SVG</text> </svg>`);
        })
    })
})
