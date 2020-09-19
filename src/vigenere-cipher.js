const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    if(mode===false || mode==='false') {
      this.modification = 'reverse'
    }
    else {
      this.modification = 'direct';
    }
  }
  encrypt(msg, key) {
    let answer=[];
    let finalStr=''
   let cleanWord = msg.toLowerCase().split('').filter(item=>item.charCodeAt()>=97 && item.charCodeAt()<=122)
    let rightKey = (key.toLowerCase().repeat(Math.ceil(cleanWord.length/key.length))).slice(0, cleanWord.length)
    cleanWord.map((item,index)=>{
        (item.charCodeAt()-97) + (rightKey[index].charCodeAt()-97) >= 26 ? answer.push((item.charCodeAt()-97) + (rightKey[index].charCodeAt()-97) - 26 + 97):  answer.push((item.charCodeAt()-97) + (rightKey[index].charCodeAt()-97) + 97)
    })
    msg.split('').map((item,index)=>{((msg[index].charCodeAt()<65 && 31<msg[index].charCodeAt()) || msg[index].charCodeAt()===94 || msg[index].charCodeAt()===124) && answer.splice(index, 0, msg[index].charCodeAt())})
    answer.map(item=>{finalStr+=String.fromCharCode(item )
})
return this.modification==='reverse'? finalStr.split('').reverse().join('').toUpperCase():finalStr.toUpperCase()
  }    
  decrypt(msg, key) {
    let answer=[];
    let finalStr=''
   let cleanWord = msg.toLowerCase().split('').filter(item=>item.charCodeAt()>=97 && item.charCodeAt()<=122)
    let rightKey = (key.toLowerCase().repeat(Math.ceil(cleanWord.length/key.length))).slice(0, cleanWord.length)
    cleanWord.map((item,index)=>{
        (item.charCodeAt()-97) - (rightKey[index].charCodeAt()-97) <0 ? answer.push((item.charCodeAt()-97) - (rightKey[index].charCodeAt()-97) + 26 + 97):  answer.push((item.charCodeAt()-97) - (rightKey[index].charCodeAt()-97) + 97)
    })
    msg.split('').map((item,index)=>{((msg[index].charCodeAt()<65 && 31<msg[index].charCodeAt()) || msg[index].charCodeAt()===94 || msg[index].charCodeAt()===124) && answer.splice(index, 0, msg[index].charCodeAt())})
    answer.map(item=>{
  
      finalStr+=String.fromCharCode(item )
})
return this.modification==='reverse'? finalStr.split('').reverse().join('').toUpperCase():finalStr.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;