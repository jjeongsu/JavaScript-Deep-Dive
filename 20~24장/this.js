const evenNumbers = Array.prototype.filter.call(arguments, function (num) {
  return num % 2 === 0;
});
