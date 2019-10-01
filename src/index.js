module.exports = function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();
  second = second.map((elem, index) => {
    return multiplication(first, elem, index);
  })
    .reduce((accum, current) => {
      return summation(accum, current);
    })
    .reverse()
    .reduce((accum, curent) => { return '' + accum + curent })
  return second;
}

const multiplication = (array, number, shift) => {
  let buffer = 0;
  array = array.map(elem => {
    elem = '' + (+elem * +number + +buffer);
    const { groups: { inMind = '0', ending } } = /^(?<inMind>\d*)(?<ending>\d)$/.exec(elem);
    buffer = inMind;
    return ending;
  });
  + buffer > 0 ? array.push(buffer) : '';
  return Array(shift).fill('0').concat(array);
}

const summation = (first, second) => {
  const length = first.length > second.length ? first.length : second.length;
  first = first.concat(Array(length - first.length).fill('0'));
  second = second.concat(Array(length - second.length).fill('0'));
  let buffer = 0;
  first = first.map((elem, ind) => {
    elem = '' + (+elem + +second[ind] + +buffer);
    const { groups: { inMind = '0', ending } } = /^(?<inMind>\d*)(?<ending>\d)$/.exec(elem);
    buffer = inMind;
    return ending;
  });
  + buffer > 0 ? first.push(buffer) : '';
  return first;
}