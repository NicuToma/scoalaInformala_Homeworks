// compute the sum of the elements of an array and display it in the console
var array1 = [2, 8, 15, 25, 10];

function sumOfArrayEl() {
  var sum = 0;
  for (var i = 0; i <= array1.length - 1; i++) {
    sum = sum + array1[i];
  }
  document.querySelector(".sumOfArray").innerHTML =
    "Sum of array ellements is: " + sum;
  console.log("Sum of array ellements is: " + sum);
}
