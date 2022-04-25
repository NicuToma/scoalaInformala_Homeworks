// compute how many times a certain element appears in an array

var ar = [21, 5, 2, 1, 9, 1, 1, 2];

function sameElementArray() {
  var count = 0;
  ar.forEach((i) => i === 1 && count++);
  console.log(count);
  document.querySelector(".sameElOfArray").innerHTML =
    "Element appears for: " + count + "times.";
}
