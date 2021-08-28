const Calculator = require('../scripts/calculator');

// Addition tests
test('1: Add 1 + 1', () => {
    expect(Calculator(1,1).add()).toBe(2);
});

test('2: Add large numbers', () => {
    expect(Calculator(30103,8372).add()).toBe(38475);
});

test('3: Add negative numbers', () => {
    expect(Calculator(-10,-5).add()).toBe(-15);
});

test('4: Add positive and negative numbers', () => {
    expect(Calculator(-5,20).add()).toBe(15);
});

test('5: Add decimal', () => {
    expect(Calculator(0.007,1.382).add()).toBeCloseTo(1.389);
});

// Subtraction tests
test('6: Subtract 5 - 3', () => {
    expect(Calculator(5,3).subtract()).toBe(2);
});

test('7: Subract negative numbers', () => {
    expect(Calculator(-6,-11).subtract()).toBe(5);
});

test('8: Subtract postivie and negative numbers', () => {
    expect(Calculator(22,-14).subtract()).toBe(36);
});

test('9: Subtract decimal', () => {
    expect(Calculator(10.77, 5.22).subtract()).toBeCloseTo(5.55);
});

// Multiplication tests
test('10: Multiply basic', () => {
    expect(Calculator(7,3).multiply()).toBe(21);
});

test('11: Multiply by 1', () => {
    expect(Calculator(38387,1).multiply()).toBe(38387);
});

test('12: Multiply by 0', () => {
    expect(Calculator(173781830,0).multiply()).toBe(0);
});

test('13: Multiply negative numbers', () => {
    expect(Calculator(-5,-6).multiply()).toBe(30);
});

test('14: Multiply postiive and negative', () => {
    expect(Calculator(33,-3).multiply()).toBe(-99);
});

test('15: Multiply decimal', () => {
    expect(Calculator(0.25,7.89).multiply()).toBeCloseTo(1.9725);
});

// Division tests
test('16: Divide larger by smaller', () => {
    expect(Calculator(99,3).divide()).toBe(33);
});

test('17: Divide smaller by larger', () => {
    expect(Calculator(7,14).divide()).toBeCloseTo(0.5);
});

test('18: Divide negative numbers', () => {
    expect(Calculator(-27,-9).divide()).toBe(3);
});

test('19: Divide postive and negative', () => {
    expect(Calculator(-49,7).divide()).toBe(-7);
});

test('20: Divide 0', () => {
    expect(Calculator(0,100).divide()).toBe(0);
});