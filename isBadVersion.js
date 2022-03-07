var solution = function (isBadVersion) {
  return function (n) {
    let res;
    for (let i = 1; i <= n + 1; i += 2) {
      if (isBadVersion(i) === true || i === undefined) {
        if (isBadVersion(i - 1) === true) {
          res = i - 1;
          break;
        } else {
          res = i;
          break;
        }
      }
    }
    return res;
  };
};
