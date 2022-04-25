// compute the maximum of the elements of an array and display it in the console
// varianta 1
// var array2 = [2, 88, 15, 25, 10];
// function maxArray() {
//   for (i = 0; i <= array2.length - 1; i++) {
//     console.log(Math.max(...array2));
//   }
// }

// varianta2
var array2 = [2, 88, 15, 25, 10];
var max = array2[0];
function maxArray() {
  for (var i = 0; i <= array2.length - 1; i++) {
    if (array2[i] > max) {
      max = array2[i];
    }
  }
  document.querySelector(".maxOfArray").innerHTML = "Max is: " + max;
  console.log("Max is: " + max);
}
