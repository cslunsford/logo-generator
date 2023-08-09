const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
    describe('Circle', () => {
        it('should return a blue circle', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
        })
    })
    describe('Square', () => {
        it('should return a blue square', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<rect x="0" y="0" width="300" height="200" fill="blue" />')
        })
    })
})
