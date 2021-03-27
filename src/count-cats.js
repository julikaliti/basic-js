const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
	if (typeof backyard !== "undefined") {
    for (let i = 0; i < backyard.length; i++) {
      for (let j = 0; j < backyard[i].length; j++) {
        if (backyard[i][j] === '^^'){
          cats +=1;
        }
      }
    }
  }
	return cats;
};
