function myFunction() {
  let x = document.querySelector(".links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.gap = "10%";
  }
}
