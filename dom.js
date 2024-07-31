let firstNumber = "";
let secondNumber = "";

const firstNumberInput = document.getElementById("first-number");
firstNumberInput.addEventListener("input", function () {
  firstNumber = event.target.value;
});

const secondNumberInput = document.getElementById("second-number");
secondNumberInput.addEventListener("input", function () {
  secondNumber = event.target.value;
});

const submitButton2 = document.getElementById("submitButton2");
submitButton2.addEventListener("click", function () {
  if (firstNumber === "" || secondNumber === "") {
    alert("Please fill in all the fields");
  } else if (firstNumber > secondNumber) {
    text2.innerHTML = firstNumber + " is the bigger number";
  } else if (secondNumber > firstNumber) {
    text2.innerHTML = secondNumber + " is the bigger number";
  } else {
    text2.innerHTML = "They are both equal in size";
  }
});
