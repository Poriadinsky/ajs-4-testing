import luhnAlgorithm from '../getLuhnAlgorithm';

test('should be false if the card is not valid', () => {
  const result = luhnAlgorithm('123');

  expect(result).toBe(false);
});

test('should be true if the card is valid for American Express', () => {
  const result = luhnAlgorithm('371449635398431');

  expect(result).toBe(true);
});

test('should be true if the card is valid for Diners Club', () => {
  const result = luhnAlgorithm('30569309025904');

  expect(result).toBe(true);
});

test('should be true if the card is valid for Discover', () => {
  const result = luhnAlgorithm('6011111111111117');

  expect(result).toBe(true);
});

test('should be true if the card is valid for JCB', () => {
  const result = luhnAlgorithm('3530111333300000');

  expect(result).toBe(true);
});

test('should be true if the card is valid for MasterCard', () => {
  const result = luhnAlgorithm('5555555555554444');

  expect(result).toBe(true);
});

test('should be true if the card is valid for Visa', () => {
  const result = luhnAlgorithm('4111111111111111');

  expect(result).toBe(true);
});
