// display in the console the odd numbers from 1 to 20
var x = 1;
var y = 20;
var arrOdd = [];
function odd1To20() {
  for (var i = x; i <= y; i++) {
    if (i % 2 != 0) {
      arrOdd.push(i);
    }
  }
  document.querySelector(".odeOnetoTw").innerHTML =
    "Odd numbers from 1 to 20: " + arrOdd;
  console.log("Odd numbers from 1 to 20: " + arrOdd);
}
