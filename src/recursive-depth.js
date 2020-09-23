const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
  }

  calculateDepth(arr) {
    let depthMax=1;
    arr.forEach((item)=>{
      let depth = 1;
        if(Array.isArray(item)) {
            depth+= this.calculateDepth(item);
            depthMax = Math.max(depthMax, depth)
        }
        depth = 0;
    }) 
    return depthMax
}
};