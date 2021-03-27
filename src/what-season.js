//const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof(date) !== "undefined") {
    if (date instanceof Date) {
      if (!date.getTime()) {
        throw new Error();
      } else {
        let checkDate = new Date(date);
        checkDate = checkDate.getMonth();
        let season;
        switch (checkDate) {
          case 11: 
            season = "winter";
            break;
          case 0: 
            season = "winter";
            break;
          case 1: 
            season = "winter";
            break;
          case 2: 
            season = "spring";
            break;
          case 3: 
            season = "spring";
            break;
          case 4: 
            season = "spring";
            break;
          case 5: 
            season = "summer";
            break;
          case 6: 
            season = "summer";
            break;
          case 7: 
            season = "summer";
            break;
          case 8: 
            season = "autumn";
            break;
          case 9: 
            season = "autumn";
            break;
          case 10: 
            season = "autumn";
            break;
        }
        return season;
      }
    } else {
      throw new Error();
    }
  } else {
    return "Unable to determine the time of year!";
  }
}
