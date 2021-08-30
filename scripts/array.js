const NumArray = (inputArray) => {
  let _total = 0;
  let min = inputArray[0];
  let max = inputArray[0];
  let length = inputArray.length;

  for (let i = 0; i < length; i++) {
    _total = _total + inputArray[i];

    if (inputArray[i] < min) {
      min = inputArray[i];
    }

    if (inputArray[i] > max) {
      max = inputArray[i];
    }
  }

  let average = _total / length;

  return { average, min, max, length };
};

module.exports = NumArray;
