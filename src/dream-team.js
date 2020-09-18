const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length == 0 ) {
    return null;
}
let membersCrypt = [];
if (Array.isArray(members)) {
   members.forEach((item)=>{
    if (typeof item=='string' ) {
        membersCrypt.push(item.trim().charAt(0).toUpperCase());
    }
   })
}
else {
    return false;
} 

return  membersCrypt.sort().join('');
}
