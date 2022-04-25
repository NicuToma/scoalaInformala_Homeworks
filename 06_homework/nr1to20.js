// // display in the console the numbers from 1 to 20

var x = 1;
var y = 20;
var arr = [];
function nr1to20() {
  for (var i = x; i <= y; i++) {
    arr.push(i);
  }
  document.querySelector(".oneTotw").innerHTML =
    "Numebers from 1 to 20: " + arr;
  console.log("Numebers from 1 to 20: " + arr);
}
