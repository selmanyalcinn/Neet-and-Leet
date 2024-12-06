var isPalindrome = function (x) {
  return (
    x.toString().split("").join() == x.toString().split("").reverse().join()
  );
};
