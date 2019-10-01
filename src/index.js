module.exports = function multiply(first, second) {
  // const res = BigInt(first) * BigInt(second)
  // return res.toString();
  return customFunc(first, second);
  // your solution
}

const customFunc = (first, second) => {
  first = first.split('').reverse();
  second = second.split('').reverse();
  let buffer = 0;
  second = second.map((elem, index) => {
    return doer(first, elem, index);
  })
    .reduce((accum, current, currentIndex, array) => {
      // console.log(currentIndex)
      // console.log(current)
      return summation(accum, current);
    })
    // return second.reduce((accum, curent) => '' + accum + curent)
    .reverse()
    .reduce((accum, curent) => { return '' + accum + curent })
  // console.log(second);
  return second;

}

const doer = (array, number, shift) => {
  let buffer = 0;
  array = array.map(elem => {
    // console.log(elem)
    // console.log(number)
    // console.log('===================')
    // console.log(buffer);
    elem = '' + (+elem * +number + +buffer);
    // console.log(elem)

    // console.log('---------------------------')

    const { groups: { inMind = '0', ending } } = /^(?<inMind>\d*)(?<ending>\d)$/.exec(elem);

    // console.log(inMind);
    // console.log(ending);
    // console.log('---------------------------')
    // console.log('---------------------------')

    buffer = inMind;
    return ending;
    // return +elem * +number
  });
  + buffer > 0 ? array.push(buffer) : '';
  return Array(shift).fill('0').concat(array);
}

const summation = (first, second) => {
  // console.log(first)
  // console.log(second)
  const length = first.length > second.length ? first.length : second.length;
  first = first.concat(Array(length - first.length).fill('0'));
  second = second.concat(Array(length - second.length).fill('0'));
  // console.log(first)
  // console.log(second)


  let buffer = 0;
  first = first.map((elem, ind) => {
    // console.log(elem)
    // // console.log(number)
    // console.log('===================')
    // console.log(buffer);
    elem = '' + (+elem + +second[ind] + +buffer);
    // console.log(elem)

    // console.log('---------------------------')

    const { groups: { inMind = '0', ending } } = /^(?<inMind>\d*)(?<ending>\d)$/.exec(elem);
    // console.log(inMind);
    // console.log(ending);
    // console.log('---------------------------')
    // console.log('---------------------------')

    buffer = inMind;
    return ending;
    // return +elem * +number
  });
  + buffer > 0 ? first.push(buffer) : '';
  return first;
}