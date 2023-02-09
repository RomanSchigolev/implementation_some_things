const myFilter = (func, array) => {
  const res = [];
  for (const item of array) {
    if (func(item)) {
      res.push(item);
    }
  }
  return res;
};

const myFilterOnReduce = (func, array) => {
  return array.reduce((acc, item, ind, arr) => {
    if (func(item, ind, arr)) {
      acc.push(item);
    }
    return acc;
  }, []);
};
