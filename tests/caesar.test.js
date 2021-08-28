const caesar = require('../scripts/caesar');

test('1: Default test', () => {
    expect(caesar('attack at dawn',5)).toBe('fyyfhp fy ifbs');
});

test('2: Punctuation test', () => {
    expect(caesar('!?$',5)).toBe('!?$');
});

test('3: One word test', () => {
    expect(caesar('execute',7)).toBe('leljbal');
});

test('4: Letters and punctuation', () => {
    expect(caesar('depart now!',18)).toBe('vwhsjl fgo!');
});

test('5: Shift larger than 26', () => {
    expect(caesar('test this',61)).toBe('cnbc cqrb');
});

test('6: Wrap test', () => {
    expect(caesar('xyz',3)).toBe('abc')
});

test('7: All caps test', () => {
    expect(caesar('ALL CAPS',31)).toBe('FQQ HFUX');
});

test('8: Mixed case', () => {
    expect(caesar('Come On You Spurs!',22)).toBe('Ykia Kj Ukq Olqno!');
});