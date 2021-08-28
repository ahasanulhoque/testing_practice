const capitalize = require('../scripts/capitalize');

test('1: Already capitalized', () => {
    expect(capitalize('Word')).toBe('Word');
});

test('2: needs to be capitalized', () => {
    expect(capitalize('word')).toBe('Word');
})

test('3: another that needs to be capitalized', () => {
    expect(capitalize('tottenham hotspur')).toBe('Tottenham hotspur');
})

test('4: special character', () => {
    expect(capitalize('%assword')).toBe('%assword');
})