const CustomError = require("../extensions/custom-error");

const chainMaker= {
  result: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value){
      if (value===undefined) {
          value='( )';
          this.result.push( value )
      } else {
          this.result.push('('+ ' '+ value + ' '+ ')' )
      }
      
      return this;
  },
  removeLink(position) {
      if (position < 0 || position===undefined) {
        this.result = [];
          throw new Error
      }
      this.result.splice(position - 1,1);
      return this;
  },
 reverseChain () {
  this.result.reverse()
  return this
 },
  finishChain() {
    let chain  = this.result.join('~~');
     this.result=[];
     return  chain;
  }
};

module.exports = chainMaker;
