const promiseAll1 = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const results = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(
        promise.then((result) => {
          results[index] = result;
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        })
      ).catch((error) => reject(error));
    });
  });
};

const promiseAll2 = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const results = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          results[i] = data;
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    }
  });
};

const promiseAll3 = (promises) => {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  const results = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (data) => {
          results[i] = data;
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

const sleep = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const fetch1 = () => sleep(800).then(() => 1);
const fetch2 = () => sleep(500).then(() => 2);
const fetch3 = () => sleep(1500).then(() => 3);

const runInParallel = (fetch1, fetch2, fetch3) =>
  promiseAll1([fetch1(), fetch2(), fetch3()]);

runInParallel(fetch1, fetch2, fetch3).then(console.log); // [1, 2, 3]
