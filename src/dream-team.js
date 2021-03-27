//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof createDreamTeam !== undefined) {
    if (!Array.isArray(members)) {
      return false;
    } else {
      let secretName = [];
      //if typeof
      members.forEach(element => {
        if (typeof(element) === "string") {
          if (element.indexOf(" ") >= 0) {//check if there is whitespaces
            element = element.replace(/^\s+/g, "");
            secretName.push(element.charAt(0).toUpperCase());
          } else {
            secretName.push(element.charAt(0).toUpperCase());
          }        
        }
      });
      secretName = secretName.sort();
      secretName = secretName.join("");
      return secretName;
    }
  } else {
    return false;
  }

  
  
    

}
/*

members = [
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1,2,3,4,5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
];*/
//createDreamTeam(3);

//console.log('true: ABDEFGJLMMR');
