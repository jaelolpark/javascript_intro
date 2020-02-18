// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && "yeah") {
//   var answer = prompt("Are we there yet?");
// }

// alert("YaY, we made it");


var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("YaY, we made it");