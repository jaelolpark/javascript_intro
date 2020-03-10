let numbers = [1, 2, 3, 4, 5];
let alphas = ["A", "B", "C", "D"];

// // 1. reverse
// function printReverse(array) {
//   for(let i = array.length - 1; i >= 0; i --) {
//     console.log(array[i]);
//   }
// }
// printReverse(numbers);
// printReverse(alphas);

// // // 2. unify
// let sameNums = [1, 1, 1, 1];
// let sameAlps = ["A", "A", "A"]

// function isUniform(array) {
//   let first = array[0];
//   for(let i=1; i<array.length; i++) {
//     if(array[i] !== first) {
//       return console.log("false");
//     }
//   }
//   return console.log("true");
// }

// isUniform(sameNums);
// isUniform(alphas);

// // 3. sum
//   function sumArray(array) {
//     let total = 0;
//     array.forEach(function(element) {
//       total += element;
//     });
//     return console.log(total);
//   }
//   sumArray(numbers);  


// 4. max
function max(array) {
  let max = array[0];
  for(let i = 1; i<array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
}

function min(array) {
  let min = array[0];
  for(let i=1; i<array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  console.log(min);
}

max(numbers); 
min(numbers);
