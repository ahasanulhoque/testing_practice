const NumArray = require("../scripts/array");

test("1: Basic array", () => {
  expect(NumArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("2: Odin Project array", () => {
  expect(NumArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("3: All 0", () => {
  expect(NumArray([0, 0, 0, 0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 7,
  });
});

test("4: Large numbers", () => {
  expect(NumArray([18381, 3857, 183717, 25748, 9318])).toEqual({
    average: 48204.2,
    min: 3857,
    max: 183717,
    length: 5,
  });
});

test("5: Negative numbers", () => {
  expect(NumArray([-5, -2, -7, -11, -20, -5, -9, -7])).toEqual({
    average: -8.25,
    min: -20,
    max: -2,
    length: 8,
  });
});

test("6: Positive and negative numbers", () => {
  expect(NumArray([-9, -4, 3, 8])).toEqual({
    average: -0.5,
    min: -9,
    max: 8,
    length: 4,
  });
});
