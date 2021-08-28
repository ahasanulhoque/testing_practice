const reverseString = require('../scripts/reverseString');

test('1: Reverse this', () => {
    expect(reverseString('word')).toBe('drow');
});

test('2: And reverse this', () => {
    expect(reverseString('this needs to be reversed')).toBe('desrever eb ot sdeen siht');
});

test('3: Palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
});