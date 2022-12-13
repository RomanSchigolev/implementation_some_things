const debounce = (callback, delay = 300) => {
  let timeout = null;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};
