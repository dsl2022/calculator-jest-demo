// calculator.test.js

const calculator = require("./calculator");

// Unit Tests
describe("Calculator - Unit Tests", () => {
  test("Addition", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("Subtraction", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test("Multiplication", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test("Division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("Division by Zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});

// Integration Tests
describe("Calculator - Integration Tests", () => {
  test("Addition and Multiplication", () => {
    expect(calculator.multiply(calculator.add(2, 3), 4)).toBe(20);
  });

  test("Subtraction and Division", () => {
    expect(calculator.divide(calculator.subtract(10, 4), 2)).toBe(3);
  });
});

// Acceptance Tests
describe("Calculator - Acceptance Tests", () => {
  test("Addition Acceptance Test", () => {
    expect(calculator.add(5, 7)).toBe(12);
  });

  test("Multiplication Acceptance Test", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
});

// Functional Tests
describe("Calculator - Functional Tests", () => {
  test("Division Functional Test", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});
