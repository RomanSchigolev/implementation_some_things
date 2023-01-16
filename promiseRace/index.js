const race1 = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(
        (res) => resolve(res),
        (err) => reject(err)
      );
    }
  });
};

const race2 = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => promise.then(resolve).catch(reject));
  });
};

const slow = new Promise((resolve) => setTimeout(() => resolve(1), 6000));
const fast = new Promise((resolve) => setTimeout(() => resolve(2), 3000));
const theFastest = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

console.log(
  race1([slow, fast, theFastest]).then((value) => {
    console.log(value);
    // 3
  })
);
