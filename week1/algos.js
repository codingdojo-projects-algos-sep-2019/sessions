/**
 * Push Front
Given an array and an additional value,
insert this value at the beginning of the array.
Do this without using any built-in array methods.
*/

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pushFront(array, value) {
  // console.log(array, value);

  // for (var index = array.length; index > 0; index--) {
  //   var currentValue = array[index - 1];

  //   // console.log('currentValue is ' + currentValue);
  //   array[index] = currentValue;
  // }

  // array[0] = value;

  // return array;

  return insertAt(array, 0, value);
}

testArray = pushFront(testArray, -9);

console.log('push front', testArray);


/**
 * Insert At
Given an array, index, and additional value, insert the value into array at given index.
Do this without using built-in array methods.
*/
// var testArray = [1, 2, 3, 4, X, 5, 6, 7, 8, 9, 10];

function insertAt(array, position, value) {

  for (var index = array.length; index > position; index--) {
    var currentValue = array[index - 1];
    array[index] = currentValue;
  }


  array[position] = value;

  console.log('insert aat ', array);

  return array;
}


insertAt(testArray, 5, 9999);

// sconsole.log(testArray);




/**  
 * Pop Front
Given an array, remove and return the value at the beginning of the array. 
Do this without using any built-in array methods except pop().
*/
// var testArray = [-9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 
function popFront(array) {
  // var value = array[0];


  // for (var index = 0; index < array.length - 1; index++) {
  //   var currentValue = array[index + 1];

  //   array[index] = currentValue;
  // }

  // array.length -= 1;
  // // console.log(array);
  // return value;

  return removeAt(array, 0);
}


console.log(popFront(testArray));

/**  
 * Remove At
Given an array and an index into array, remove and return the array value at that index. 
Do this without using built-in array methods except pop().
 * 
*/

// var testArray = [-9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeAt(array, position) {
  var value = array[position];

  for (var index = position; index < array.length - 1; index++) {
    var currentValue = array[index + 1];
    array[index] = currentValue;
  }

  array.length -= 1;
  console.log('removeAt', array, value);

  return value;
}


console.log(removeAt(testArray, 6));

/**  
 * Min to Front
Given an array of comparable values, move the lowest element to array’s front, 
shifting backward any elements previously ahead of it. 
Do not otherwise change the array’s order. Given [4,2,1,3,5], 
change it to [1,4,2,3,5] and return it. 
As always, do this without using built-in functions.
 * 
 * 
*/
// [4,2,1,3,5]
function min2Front(array) {
  // locate min val
  var minPosition = 0;
  // console.log('index', index);

  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[minPosition]) {
      minPosition = index;
    }
  }


  // var minValue = removeAt(array, minPosition);
  // // var minValue = array[minPosition];
  // console.log('min position', minPosition, minValue, array);

  // // for (let index = minPosition; index > 0; index--) {
  // //   var currentValue = array[index - 1];
  // //   array[index] = currentValue;
  // // }
  // // array[0] = minValue;
  // pushFront(array, minValue);
  // console.log('min array', array);


  return pushFront(array, removeAt(array, minPosition));
}

console.log('min 2 front', min2Front([4, 2, 1, 3, 5]));