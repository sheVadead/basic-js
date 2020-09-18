module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error()
    }
    let newArr =arr.concat();
    let i;
    let methods = {
        '--discard-next': function () {
            if ((i) <= newArr.length - 1) {
               newArr.splice(i + 1, 1,undefined)
            }
            return newArr;
        },
        '--discard-prev': function () {
            if (0 <= (i - 1)) {
                newArr.splice(i - 1, 1,undefined)
            }
            return newArr;
        },
        '--double-next': function () {
            if ((i) <= newArr.length -1 ) {
                newArr.splice(i + 1, 0, newArr[i + 1])
                
            }
            return newArr;
        },
        '--double-prev': function () {
            if (0 <= (i - 1 )) {
                newArr.splice((i - 1), 0, newArr[i - 1])
                i++;
            }
           
            return newArr;
        }
    }

    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] in methods) {
            methods[newArr[i]]();
        }
    }
    return newArr.filter(item => item !== undefined && item !== '--double-next' && item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev');
};