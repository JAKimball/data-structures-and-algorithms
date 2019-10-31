'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('Testing the multiBracketValidation function.', () => {

  test('Test given examples', () => {
    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
  });

  test('Matching brackets are present but in wrong order', () => {
    expect(multiBracketValidation('{(})')).toEqual(false);
  });

  test('Unmatched opening { remaining.', () => {
    expect(multiBracketValidation('{')).toEqual(false);
  });

  test('Closing ) arrived without corresponding opening', () => {
    expect(multiBracketValidation(')')).toEqual(false);
  });

  test('Closing }. Doesn’t match opening (', () => {
    expect(multiBracketValidation('[}')).toEqual(false);
  });

  test('Closing ] does not match opening (', () => {
    expect(multiBracketValidation('[({}]')).toEqual(false);
  });

  test('Closing ] does not match opening (', () => {
    expect(multiBracketValidation('(](')).toEqual(false);
  });

});
