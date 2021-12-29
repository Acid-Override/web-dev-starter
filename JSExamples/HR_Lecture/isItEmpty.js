// Time limit 45 minutes
// Write a function isItEmpty that takes in an object or an array and returns true if it is empty, false if not.
// HINT: look up the Object.keys function

function isItEmpty(obj){

    if(Array.isArray(obj) === true) {
      if(obj.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if(Object.keys(obj).length === 0) {
        return true;
      } else {
        return false;
      }
    }
  
  }
  
  
  
  var emptyObj = {};
  var emptyArr = [];
  var obj = {example : true};
  var arr = [1,2,3];
  
  console.log(isItEmpty(emptyObj));  //true
  console.log(isItEmpty(emptyArr));  //true
  console.log(isItEmpty(obj));  //false
  console.log(isItEmpty(arr));  //false
  