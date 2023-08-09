class Shapes {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {
        let svg = '';
        if (this.shape === 'Triangle') {
            svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        } else if (this.shape === 'Circle') {
            svg = `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
        } else if (this.shape === 'Square') {
            svg = `<rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />`;
        }
        return svg;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor) {
        super('Triangle', text, textColor);
    }
}

class Circle extends Shapes {
    constructor(text, textColor) {
        super('Circle', text, textColor);
    }
}

class Square extends Shapes {
    constructor(text, textColor) {
        super('Square', text, textColor);
    }
}

module.exports = { Shapes, Triangle, Circle, Square };