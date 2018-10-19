// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
const getElementsByClassName = (className, node) => {
  // Store matching results in a list 
  let listOfMatches = []; 

  // Track the node we are currently on 
  node = node || document.body; 

  let classList = node.className.split(' '); 

  // Base case: Check if the classList includes the current className push to list if true 
  if (classList.includes(className)) { 
    listOfMatches.push(node); 
  } 

  // Iterate over the child nodes 
  for (let i = 0; i < node.children.length; i++) { 
    // Recursive call 
    let childNode = getElementsByClassName(className, node.children[i]); 
    // console.log(childNode); 

    listOfMatches = listOfMatches.concat(childNode); 
  }
  // Return matching list 
  return listOfMatches; 
};
