const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((a, b) => {
    return a + b.reduce((acc, item) => item === '^^' ? ++acc : acc, 0)
  }, 0)
};