//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
//throw new CustomError('Not implemented');
  // remove line with error and write your code here
	if ((typeof sampleActivity === 'string')&&(typeof sampleActivity !== 'undefined')) {
		const k = 0.693/HALF_LIFE_PERIOD;
		let patt = /['0-9'\.]/g;
		let time;
		let check = sampleActivity.match(patt);
		if ((check !== null)&&(check.length === sampleActivity.length) && (check.length > 0) && (parseFloat(check.join('')) > 0)) {
			time = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
			if (time > 0) {
				return time;
			} else {return false;}
		} else {
			console.log(false);
			return false;
		}

	} else {
		console.log(false);
		return false;

	} 
}
