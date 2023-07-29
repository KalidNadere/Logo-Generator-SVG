// The constructor function is called to assign value to the properties as arguments during the object creation.
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

// SVG method to generate images for Triangle, Circle & Square with specific image size and text
  getSVG() {
    return '';
  }
}
class Triangle extends Shape {
  getSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <polygon points="150,50 75,150 225,150" fill="${this.shapeColor}" />
  <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="38" fill="${this.textColor}">${this.text}</text>
</svg>`;
  }
}

class Circle extends Shape {
  getSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="70" fill="${this.shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="38" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Square extends Shape {
  getSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="38" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};