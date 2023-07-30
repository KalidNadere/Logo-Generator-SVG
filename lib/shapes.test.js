const { Shape, Triangle, Circle, Square } = require('./shapes');

// Test for Triangle class
test('Triangle getSVG() returns valid SVG content', () => {
  const triangle = new Triangle('LKN', 'white', 'blue');
  const svg = triangle.getSVG();
});

// Test for Circle class
test('Circle getSVG() returns valid SVG content', () => {
  const circle = new Circle('LKN', 'white', 'red');
  const svg = circle.getSVG();
});

// Test for Square class
test('Square getSVG() returns valid SVG content', () => {
  const square = new Square('LKN', 'white', 'black');
  const svg = square.getSVG();
});