//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
	let check = '';
  if (Array.isArray(arr)) {
    //if ((arr.includes('--discard-next'))||(arr.includes('--discard-prev'))||(arr.includes('--double-prev'))||(arr.includes('--double-next'))) {
      transArr = arr.reduce((newArray, element, ind, arr) => {
          //if ((typeof arr[ind-1] !== 'undefined')&&(typeof arr[ind+1] !== 'undefined')) {
            newArray.push(element);

            if (element === "--discard-prev") {
              newArray.splice(newArray.length-1, 1);
              if (ind > 0 && check !== 'deleted'){
                newArray.splice(newArray.length-2, 1);
              }
            }
    
            if (arr[ind-1] === '--discard-next') {
              newArray.splice(newArray.length-2, 1);
              if (ind <= arr.length-1) {
                newArray.splice(newArray.length-1, 1);
                check = 'deleted';
              } 
            }
            
            if (element === '--discard-next' && ind === arr.length - 1) {
              newArray.splice(newArray.length-1, 1);
              
            }
            
           if (element === '--double-prev') {
              newArray.splice(newArray.length-1, 1);
              if (ind > 0 && check !== 'deleted') {
                newArray.splice(newArray.length-1, 0, arr[ind-1]);
              }
            } 
              
            if (element === '--double-next') {
              newArray.splice(newArray.length-1, 1);
              if (ind < arr.length-1)  {        
                newArray.splice(ind, 0, arr[ind+1]);
              }
              
            } 
    
            return newArray;
          //}
          
          //console.log('Output: ', transArr);
      }, []);
      console.log(transArr);
      return transArr;
   /* } else {
      console.log(arr);
      return arr;
    }*/

  } else {
    throw new Error();
  }
};
