const notNull = () => {
  return true;
};

const objectFunc = () => {
  myObject = { age: 20, colour: "yellow" };
};

const arrayFunc = (arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length >= 6) {
      newArr.push(arr[i]);
  return newArr;
    }
  }
};

const toStr = (str) => {
  return toString(str)
}

module.exports = { notNull, objectFunc, arrayFunc, toStr };
