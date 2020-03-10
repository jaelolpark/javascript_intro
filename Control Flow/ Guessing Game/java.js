let secret_num = 4;

let num = Number(prompt("Guess a Number!"));
// alert(num);

if(num === secret_num) {
  alert("That's correct");
}

else if(num > secret_num) {
  alert("That's too high");
}

else {
  alert("That's too low");
}
