const allSettled1 = (promises) => {
  return Promise.all(
    promises.map((promise) =>
      promise
        .then((value) => ({ state: "fulfilled", value }))
        .catch((reason) => ({ state: "rejected", reason }))
    )
  );
};

const allSettled2 = (promises) => {
  let wrappedPromises = promises.map((promise) =>
    Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err })
    )
  );
  return Promise.all(wrappedPromises);
};

const promises = [
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((_, reject) => setTimeout(() => reject("error"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
];

console.log(
  allSettled2(promises).then(([response1, response2, response3]) => {
    console.log(response1);
    // { status: 'fulfilled', value: 3 }
    console.log(response2);
    // { status: 'rejected', reason: 'error' }
    console.log(response3);
    // { status: 'fulfilled', value: 1 }
  })
);
