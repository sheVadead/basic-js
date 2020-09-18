const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
    let defaultOptions = {
        additionSeparator: options.additionSeparator,
        separator: options.separator || '+',
        repeatTimes: options.repeatTimes,
        additionRepeatTimes: options.additionRepeatTimes,
        addition: options.addition,
    }
    str = String(str)
    let result = '';
    if (options.addition===false || options.addition===null) {
        defaultOptions.addition = String(options.addition)
        
    }
    let methods = {
        addition() {
            if (!!defaultOptions.addition && !!defaultOptions.repeatTimes) {
                if (defaultOptions.additionSeparator===undefined){
                    result = (defaultOptions.addition.toString()).repeat(defaultOptions.additionRepeatTimes)
                } else {
                    result = (defaultOptions.addition.toString() + defaultOptions.additionSeparator).repeat(defaultOptions.additionRepeatTimes).slice(0, -defaultOptions.additionSeparator.length)
                }
                
            } else if (!!defaultOptions.addition) (
                result = defaultOptions.addition.toString()
            )
        }
      
    }
   methods.addition();
    return !!defaultOptions.repeatTimes?((str.toString() + result + defaultOptions.separator).repeat(defaultOptions.repeatTimes)).slice(0, -defaultOptions.separator.length):str.toString() + result
}

  