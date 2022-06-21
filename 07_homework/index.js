let hiddenMessage = document.getElementById("message");
hiddenMessage.style.display = "none";
let emptFn = document.form1.firstName;
let emptLn = document.form1.lastName;
let emptMes = document.form1.textMessage;

let classesFn = document.getElementById("firstName").classList;
let classesLn = document.getElementById("lastName").classList;
let classesTm = document.getElementById("textMessage").classList;

let radioChecked = document.querySelector('input[name="gender"]:checked');
document.getElementById("send").addEventListener("click", required);
function required() {
  fnField();
  lnField();
  messageField();
  thankYou();

  var close = document.getElementById("closeBtn");
  close.addEventListener("click", function () {
    hiddenMessage.style.display = "none";
  });
}
// first name function
function fnField() {
  if (emptFn.value == "") {
    document.getElementById("fnErrorMessage").innerText =
      "Please fill first name!";
    firstName.classList;
    classesFn.add("borderRed");
  } else if (emptFn.value != "") {
    console.log("FN border changed");
    document.getElementById("fnErrorMessage").innerText = "";
    classesFn.remove("borderRed");
  }
}
// last name function
function lnField() {
  if (emptLn.value == "") {
    document.getElementById("lnErrorMessage").innerText =
      "Please fill last name!";
    lastName.classList;
    classesLn.add("borderRed");
  } else if (emptLn.value != "") {
    console.log("LN border changed");
    document.getElementById("lnErrorMessage").innerText = "";
    classesLn.remove("borderRed");
  }
}
// text mesage function

function messageField() {
  if (emptMes.value == "") {
    document.getElementById("tmErrorMessage").innerText =
      "Please write a mesage!";
    textMessage.classList;
    classesTm.add("borderRed");
  } else if (emptMes.value != "") {
    console.log("TM border changed");
    document.getElementById("tmErrorMessage").innerText = "";
    classesTm.remove("borderRed");
  }
}

// theank you message
function thankYou() {
  if (emptFn.value != "" && emptLn.value != "" && emptMes.value != "") {
    document.getElementById("msg").innerText =
      "Thank you for contacting us, " +
      document.getElementById("firstName").value;
    hiddenMessage.style.display = "inherit";
    document.getElementById("form").reset();
    return true;
  }
}
