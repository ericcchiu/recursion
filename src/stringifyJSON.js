// this is what you would do if you liked things to be easy:
// let stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = function(obj) {
  const stringedArr = [];

  // Check for primitive types and stringify
  if (typeof obj === 'string') {
    return '"' + obj + '"';  
  } else if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') { 
    return '' + obj;
  }

  // Check if object is an array  
  if (Array.isArray(obj)) { 
    if (obj.length === 0) { 
      return '[]'; 
    } else { 
      obj.forEach( function (elem) { 
        stringedArr.push(stringifyJSON(elem));  
      }); 
        return '[' + stringedArr + ']'; 
    }
  }
  
  /***Check if obj is an Object***/ 
  if (typeof obj === 'object' && !Array.isArray(obj)) { 

    let listOfKeys = Object.keys(obj);
    let output = [];

    listOfKeys.forEach(function (key) {
      let keys = '"' + key + '":'; 
      // Recursive case
      let val = stringifyJSON(obj[key]);
      
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        output.push(keys + val);
      }
    });

    return "{" + output.join(",") + "}";
  }
};
