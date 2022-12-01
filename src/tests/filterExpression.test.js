const filterExpression = require('./filterExpression');

test('filterExpression 3 + 4 - 2 x 4 / 2', () => {
    expect(filterExpression('3+4-2x4/2')).toEqual(['3', '+', '4', '-', '2', 'x', '4', '/', '2']);
});

test('filterExpression 5 x - 5', () => {
    expect(filterExpression('5x-5')).toEqual(['5', 'x', '-5']);
});

test('filterExpression 5 x - + 5', () => {
    expect(filterExpression('5x-+5')).toEqual(['5', '+', '5']);
});
