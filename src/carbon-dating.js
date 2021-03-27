const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
throw new CustomError('Not implemented');
  // remove line with error and write your code here
/*  const k = 0.693/HALF_LIFE_PERIOD;
	let patt = /['0-9']/g;
	let time = false;
	if (patt.test(sampleActivity)) {
		let n = parseInt(sampleActivity);
		time = Math.ceil(Math.log(MODERN_ACTIVITY/parseInt(sampleActivity))/k);
		
	} else {time=false;}
	return(time);*/
};
