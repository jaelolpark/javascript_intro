
// ==================================================
// ==============     for loop    ===================
// ==================================================

// for(var i=1; i<6; i++) {
//   console.log(i)
// }


// var i = 1;
// while(i < 6) {
//   console.log(i)
//   i++;
// }

// ================================================

// var str = 'hello';
// for(i = 0; i < str.length; i++ ) {
//   console.log(str[i]);
// }


// var str = 'bottle';
// var i = 0;

// while(i < str.length) {
//   console.log(str[i]);
//   i++;
// }

// ================================================

// for(var i = 0; i < 16; i+=8) {
//   console.log(i);
// }


// var i = 0;
// while( i < 16 ) {
//   console.log(i);
//   i+=8;
// }

// =================================================

// var str = "ahceclwlxo"

// for(var i = 1; i < str.length; i+=2) {
//   console.log(str[i]);
// }

// var str = "ahceclwlxo";
// var i = 1;

// while(i < str.length) {
//   console.log(str[i]);
//   i+=2;
// }

// ==================================================
console.log("Print all numbers betwwen -10 and 19")
for(let i = -10; i <= 19; i++) {
  console.log(i);
}

// let i = -10;
// while(i <= 19) {
//   console.log(i);
//   i++;
// }



// ==================================================
console.log("Print all even numbers between 10 and 40")
// for(let i = 10; i <= 40; i+=2) {
//   console.log(i)
// }
for(let i = 10; i <= 40; i+=2) {
  if(i % 2 === 0) {
    console.log(i)
  }
}

// let i = 10;
// while(i <= 40) {
//   if (i % 2 === 0 ) {
//     console.log(i);
//     i+=1;
//   }
// }


// ==================================================
console.log("Print all odd numbers between 300 and 333")
for(i = 300; i <= 333; i++ ) {
  if(i % 2 !== 0) {
    console.log(i);
  }
}

// let i = 300;
// while(i <= 333) {
//   if (i % 2 !== 0 ) {
//     console.log(i);
//   }
//   i+=1;
// }



// ==================================================
console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
for(i=5; i<=50; i++) {
  if(i % 5 === 0 && i % 3 === 0 ) {
    console.log(i);
  }
}


// let i = 5;
// while(i <= 50) {
//   if(i % 5 === 0 && i % 3 === 0 ) {
//     console.log(i) 
//   }
//   i++;
// }
