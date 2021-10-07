const checkLocalStoradge = (key, cb) => {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    cb(storedValue);
  } else {
    cb('');
  }
};

export default checkLocalStoradge;
