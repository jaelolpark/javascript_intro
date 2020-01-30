let one_min = parseInt(prompt("1분 몇개?"));
let five_min = parseInt(prompt("5분 몇개?")) * 5;
let ten_min = parseInt(prompt("10분 몇개?")) * 10;
let fifteen_min = parseInt(prompt("15분 몇개?")) * 15;
let thirty_min = parseInt(prompt("30분 몇개?")) * 30;
let one_hr = parseInt(prompt("1시간 몇개?")) * 60;
let three_hr = parseInt(prompt("3시간 몇개?")) * 180;
let eight_hr = parseInt(prompt("8시간 몇개?")) * 480;
let fifteen_hr = parseInt(prompt("15시간 몇개?")) * 900;


let min = one_min + five_min + ten_min + fifteen_min + thirty_min + one_hr + three_hr + eight_hr + fifteen_hr
let hrs = min/60
hrs = Math.ceil( hrs * 100 ) / 100
let days = hrs/24
days = Math.ceil( days * 100 ) / 100


console.log("1분은 " + one_min +"개")
console.log("5분은 " + five_min +"개")
console.log("10분은 " + ten_min +"개")
console.log("15분은 " + fifteen_min +"개")
console.log("30분은 " + thirty_min +"개")
console.log("1시간은 " + one_hr +"개")
console.log("3시간은 " + three_hr +"개")
console.log("8시간은 " + eight_hr +"개")
console.log("15시간은 " + fifteen_hr +"개")



console.log("분으로는 " + min + "분" );
console.log("시간으로는 " + hrs + "시간" );
console.log("일수로는 " + days + "일" );


alert(min +"분, " + "약 " + hrs +"시간, " + "약 " + days + "일")
