/******************
 * YOUR CODE HERE *
******************/


const doubleAll = function(arr) {
  results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2)
  }
  return results;
}

const yelledGreetings = function(arr) {
  results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] + "!")
  }
  return results;
}

const absoluteValues = function(arr) {
  results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(Math.abs(arr[i]));
  }
  return results;
}

const upperCaseFirstLetters = function(arr) {
  let results = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     results.push(arr[i][0].toUpperCase())

//     for (let j = 0; j < arr[i]; j++) {
//       results.push(arr[i][j].toLowerCase())
//     }
//   }

// return results;
// }

  for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i][0].toUpperCase();
    let restOfName = arr[i].toLowerCase().slice(1);
    
    results.push(firstLetter + restOfName);

  }
  return results;

}

const changeToInitials = function(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    // let fullName = arr[i];
    // let firstInitial = fullName[0];
    // let indexOfSecondInitial = fullName.indexOf(" ") + 1;
    // let secondInitial = fullName[indexOfSecondInitial];
    
    // results.push(firstInitial + secondInitial)
    results.push(arr[i][0].toUpperCase() + arr[i][arr[i].indexOf(" ") + 1]);
      
      // + arr[i].indexOf(" "));
  }
  return results;
}

console.log(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq']));

const doubleOdd = function(arr) {
  let results = []; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      results.push(arr[i] * 2);
    } else if (arr[i] % 2 === -1) {
      results.push(arr[i] * 2);
    } else {
      results.push(arr[i]);
    }
  }
  return results;
}

const add1ToLeft = function(arr) {
  results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    results.push(parseInt("1" + arr[i]));
  } else {
     ;
  }
}
return results;
}

console.log(add1ToLeft([1, 2, 30, 400, -2, -10]));
// f;
// const changeToInitials = function(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i++) {
//     results.push(arr[i])
//   }
//   return results;
// }






/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
