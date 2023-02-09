const myMap = (func, array) => {
  const res = [];
  for (const item of array) {
    res.push(func(item));
  }
  return res;
};

const myMapOnReduce = (func, array) => {
  return array.reduce((acc, item, ind, arr) => {
    acc.push(func(item, ind, arr));
    return acc;
  }, []);
};
