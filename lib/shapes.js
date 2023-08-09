class Shapes {
    constructor(shape) {
        this.shape = shape;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        let svg = '';
        if (this.shape === 'Triangle') {
            svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /> <text x="154" y="135" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text> </svg>`;
        } else if (this.shape === 'Circle') {
            svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text> </svg>`;
        } else if (this.shape === 'Square') {
            svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}" /> <text x="100" y="100" fill="${this.textColor}" font-size="60" text-anchor="middle" dominant-baseline="central">${this.text}</text> </svg>`;
        }
        return svg;
    }
}

class Triangle extends Shapes {
    constructor() {
        super('Triangle');
    }
}

class Circle extends Shapes {
    constructor() {
        super('Circle');
    }
}

class Square extends Shapes {
    constructor() {
        super('Square');
    }
}

module.exports = { Shapes, Triangle, Circle, Square };