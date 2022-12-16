const myMap = (func, array) => {
  const res = [];
  for (const item of array) {
    res.push(func(item));
  }
  return res;
};

const myMapOnReduce = (func, array) => {
  return array.reduce((acc, item) => {
    acc.push(func(item));
    return acc;
  }, []);
};
