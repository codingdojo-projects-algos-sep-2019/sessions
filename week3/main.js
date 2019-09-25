const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArray(array, index = 0) {
  // console.log(array)

  // for (let index = 0; index < array.length; index++) {
  //   console.log(array[index]);
  // }

  // base case
  if (index >= array.length) {
    console.log('length exceeded');

    return;
  }



  // forward progress 

  // index += 1;
  // recursion

  printArray(array, index + 1);
  console.log('value at ', array[index]), index;
}

printArray(array);


/** 
 * Recursive Sigma
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
 * 
 * 
*/

let count = 0;

function rSigma(num) {
  if (num <= 0) {
    return 0;
  }
  return rSigma(num - 1) + Math.floor(num);
}

console.log(rSigma(2.5));


/**
 * Recursive Factorial
Given num, return the product of ints from 1 up to num.
If less than zero, treat as zero. If not an integer, truncate.
Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
*/

function rFact(num) {
  if (num <= 1) {
    return 1;
  }

  return rFact(num - 1) * num;
}

console.log('rfact', rFact(3));


/**  
 * Flood Fill
Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an 
image with a certain color. We change the image as if we painted a canvas: 
a two-dimensional array of integers, where each integer represents a color for that pixel. 
The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is
 a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas 
 (2-dimensional array of integers), starting coordinate (2-element array), and the color to
  flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color 
  value only if it is the same color as the origin coordinate and is directly adjacent via 
  X or Y to another pixel you will change. 

Note: diagonally related pixels are not considered adjacent.
*/

const canvas = [
  [3, 2, 3, 4, 3], // 0
  [2, 3, 3, 4, 3, 3], // 1
  [7, 3, 3, 5, 3], // 2
  [6, 5, 3, 4, 3],
  [1, 2, 3, 3, 3]
];
// 0  1 2   3  4 
function floodFill(matrix, startXY, newColor, colorToChange) {
  const x = startXY[1];
  const y = startXY[0];
  const currentColor = matrix[y][x];

  console.log('xy', x, y, matrix);

  if (x == 4 && y === 1) {
    matrix[y][x] = 999999;
  }

  if (colorToChange === undefined) {
    colorToChange = currentColor
  }

  if (currentColor !== colorToChange) {
    console.log('colr not the same', currentColor, colorToChange);
    return matrix;
  }

  matrix[y][x] = newColor;

  if (x + 1 < matrix.length) {
    floodFill(matrix, [x + 1, y], newColor, colorToChange);
  }

  if (x - 1 >= 0) {
    floodFill(matrix, [x - 1, y], newColor, colorToChange);
  }

  if (y - 1 >= 0) {
    floodFill(matrix, [x, y - 1], newColor, colorToChange);
  }

  if (y + 1 < matrix[x].length) {
    floodFill(matrix, [x, y + 1], newColor, colorToChange);
  }
  return matrix;
}


console.log(floodFill(canvas, [2, 2], 9));
