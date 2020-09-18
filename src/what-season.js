const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (isNaN(date)) {
  return 'Unable to determine the time of year!';
}
  let month = date.getMonth();
  if (month < 5 && month >1) {
      return 'spring'
  } else if (month < 8 && month > 4) {
      return 'summer'
  } else if (month >7 && month < 11) {
      return 'autumn'
  } else {
      return 'winter'
  }
}
