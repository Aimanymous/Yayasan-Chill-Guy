/**
 * @jest-environment jsdom
 */

// entahlaa.test.js
const {
    add,
    subtract,
    multiply
} = require('./script');

beforeAll(() => {
    global.document.querySelector = jest.fn().mockReturnValue({
        addEventListener: jest.fn(),
    });
});

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});