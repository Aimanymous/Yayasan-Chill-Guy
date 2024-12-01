const { add, subtract, multiply } = require('./script');
const { generateMetrics } = require('./metricsCollector.cjs');

beforeAll(() => {
  global.document.querySelector = jest.fn().mockReturnValue({
    addEventListener: jest.fn(),
  });
});

afterAll(() => {
  // Collect and write metrics to file after all tests are completed
  const results = {
    numPassedTests: expect.getState().passed,
    numFailedTests: expect.getState().failed,
    numTotalTests: expect.getState().total,
  };
  generateMetrics(results); // This writes metrics to a file
});

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
  console.log('Test 1 is successful!');
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
  console.log('Test 2 is successful!');
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
  console.log('Test 3 is successful!');
});
