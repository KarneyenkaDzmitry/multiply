There are some possible solutions of the task:
module.exports = function multiply(first, second) {
  const res = BigInt(first) * BigInt(second);
  return res.toLocaleString();
}

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

// time execution  = 84 ms



//https://medium.com/@kanby/%D1%83%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%BA%D0%B0%D0%BA-%D1%81%D1%82%D1%80%D0%BE%D0%BA-%D0%B2-js-914bb44a5fb7

function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];
// перемножаем каждый элемент и записываем в stack
  // если в stack есть запись - плюсуем, если нет, то перезаписываем
  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

/ обрабатываем stack
  // в ячейке стека должна остаться одна цифра,
  // а десятки и прочие порядки переносятся на позицию выше в stack

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;              // получаем цифру
    var move = Math.floor(stack[i] / 10); // что переносим вверх
    stack[i] = num;                       // оставляем цифру
    // переносим высшие порядки вверх
    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('');
}

// time execution  = 49 ms