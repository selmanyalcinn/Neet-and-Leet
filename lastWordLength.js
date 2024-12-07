var lengthOfLastWord = function (s) {
  return s.trimEnd().split(" ")[s.trimEnd().split(" ").length - 1].length;
};
