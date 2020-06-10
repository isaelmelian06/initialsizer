/*******************************************************************************
 * Your code here!
 ******************************************************************************/

// a variable  that takes in the users input and converts them into out parameters for our function


// this variable takes the users first name which is the getInput function and index 0
const fnInput  = getInput(0);

// this variable takes the users last name which is the getInput function and index 1
const lnInput = getInput(1);


/* we need a function that takes in two strings examples : "isael" "melian" and returns
the initials of those to string. "isael""melian" --> IM.*/

function getInitials(fnInput,lnInput){
  const nameInitials = fnInput[0] + "." + lnInput[0] + ".";
  return nameInitials;
}
/* this function takes in the two string first and last name and return the string length*/
// You should be able to pass in two strings add them together and then return the length of that new string.
function nameLength(fnInput,lnInput){
  const sizeOfName = fnInput.length  + lnInput.length;
  return "Hey, " + getInitials(fnInput,lnInput) + " Mind if I call you that? Your full name is " + sizeOfName + " letters long!";
}


// print out our program
console.log(nameLength(fnInput,lnInput));



/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
