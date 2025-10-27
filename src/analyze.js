function analyze (arr) {
  const len = arr.length;
  let minimum = 10;
  for (let element of arr) {
    if (element < minimum) {
      minimum = element;
    }
  };
  let maximum = 0;
  for (let element of arr) {
    if (element > maximum) {
      maximum = element;
    };
  };
  let count = 0;
  let total = 0;
  for (let element of arr) {
    total += element;
    count++;
  };
  let ave = total / count;
  return {
    min: minimum,
    max: maximum,
    length: len,
    average: ave
  };
};

module.exports = analyze;