const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let turns = Number((2 ** diskNumber - 1)),
    seconds = Math.floor(turns / (turnsSpeed / 3600));
  return {
    turns,
    seconds
  };

};