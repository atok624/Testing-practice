const Calculator = require('./task-1.js');

describe('Calculator', () => {
    describe('add', () => {
      test('adds two positive numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.add(2, 3)).toBe(5);
      });
  
      test('adds a positive and a negative number correctly', () => {
        const calc = new Calculator();
        expect(calc.add(2, -3)).toBe(-1);
      });
  
      test('adds two negative numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.add(-2, -3)).toBe(-5);
      });
    });
  
    describe('subtract', () => {
      test('subtracts a smaller positive number from a larger one correctly', () => {
        const calc = new Calculator();
        expect(calc.subtract(5, 3)).toBe(2);
      });
  
      test('subtracts a positive number from a negative one correctly', () => {
        const calc = new Calculator();
        expect(calc.subtract(-2, 3)).toBe(-5);
      });
  
      test('subtracts two negative numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.subtract(-2, -3)).toBe(1);
      });
    });
  
    describe('multiply', () => {
      test('multiplies two positive numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.multiply(2, 3)).toBe(6);
      });
  
      test('multiplies a positive and a negative number correctly', () => {
        const calc = new Calculator();
        expect(calc.multiply(2, -3)).toBe(-6);
      });
  
      test('multiplies two negative numbers correctly', () => {
        const calc = new Calculator();
        expect(calc.multiply(-2, -3)).toBe(6);
      });
    });
  
    describe('divide', () => {
      test('divides a larger positive number by a smaller one correctly', () => {
        const calc = new Calculator();
        expect(calc.divide(6, 2)).toBe(3);
      });
  
      test('divides a negative number by a positive one correctly', () => {
        const calc = new Calculator();
        expect(calc.divide(-6, 2)).toBe(-3);
      });
  
      test('throws an error when dividing by zero', () => {
        const calc = new Calculator();
        expect(() => calc.divide(2, 0)).toThrow('Cannot divide by zero');
      });
    });
  });
