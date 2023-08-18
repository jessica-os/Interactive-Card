const cardName = document.querySelector(".card-name");
const inputName = document.querySelector("#name");
const nameError = document.querySelector(".name-error");

const cardNumber = document.querySelector(".card-number");
const inputNumber = document.querySelector("#number");
const numberError = document.querySelector(".number-error");

const cardCvc = document.querySelector(".card-cvc");
const inputCvc = document.querySelector("#cvc");
const cvcError = document.querySelector(".cvc-error");

const cardMonth = document.querySelector(".card-month");
const inputMonth = document.querySelector("#month");
const monthError = document.querySelector(".month-error");

const cardYear = document.querySelector(".card-year");
const inputYear = document.querySelector("#year");

const inputs = document.querySelectorAll("input");

const form = document.querySelector("#form");
const thank = document.querySelector(".thank");

const confirmButton = document.querySelector("#confirm-button ");
const continueButton = document.querySelector(".continue-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputName.addEventListener("input", () => {
  cardName.innerHTML = inputName.value;
});

inputNumber.addEventListener("input", () => {
  cardNumber.innerHTML = inputNumber.value.match(/.{1,4}/g).join(" ");
});

inputCvc.addEventListener("input", () => {
  cardCvc.innerHTML = inputCvc.value;
});
inputMonth.addEventListener("input", () => {
  cardMonth.innerHTML = inputMonth.value;
});
inputYear.addEventListener("input", () => {
  cardYear.innerHTML = inputYear.value;
});

confirmButton.addEventListener("click", () => {
  if (
    nameValidate() === true &&
    numberValidate() === true &&
    monthValidate() === true &&
    yearValidate() === true &&
    cvcValidate() === true
  ) {
    nameValidate();
    numberValidate();
    monthValidate();
    yearValidate();
    cvcValidate();
    form.style.display = "none";
    thank.style.display = "block";
  } else {
    nameValidate();
    numberValidate();
    monthValidate();
    yearValidate();
    cvcValidate();
  }
});

continueButton.addEventListener("click", () => {
  form.style.display = "block";
  thank.style.display = "none";
  inputName.value = "";
  inputNumber.value = "";
  inputMonth.value = "";
  inputYear.value = "";
  inputCvc.value = "";
  cardName.innerHTML = "JANE APPLESEED";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardCvc.innerHTML = "000";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
});

function nameValidate() {
  
  if (inputName.value.match(/^[A-Za-z]+$/)) {
    inputName.style.borderColor = "hsl(270, 3%, 87%)";
    nameError.style.visibility = "hidden";
    return true;
  } else {
    cardName.innerHTML;
    inputName.style.borderColor = "red";
    nameError.style.visibility = "visible";
    return false;
  }
}
function numberValidate() {
  if (inputNumber.value.match(/^\d+/) && inputNumber.value.length === 16) {
    cardNumber.innerHTML = inputNumber.value.match(/.{1,4}/g).join(" ");
    inputNumber.style.borderColor = "hsl(270, 3%, 87%)";
    numberError.style.visibility = "hidden";
    return true;
  } else {
    cardNumber.innerHTML;
    inputNumber.style.borderColor = "red";
    numberError.style.visibility = "visible";
    return false;
  }
}

function monthValidate() {
  if (
    inputMonth.value.match(/^\d+/) &&
    inputMonth.value.length === 2 &&
    inputMonth.value <= 12
  ) {
    cardMonth.innerHTML = inputMonth.value;
    inputMonth.style.borderColor = "hsl(270, 3%, 87%)";
    monthError.style.visibility = "hidden";
    return true;
  } else {
    cardMonth.innerHTML;
    inputMonth.style.borderColor = "red";
    monthError.style.visibility = "visible";
    return false;
  }
}
function yearValidate() {
  if (inputYear.value.match(/^\d+/) && inputYear.value.length === 2) {
    cardYear.innerHTML = inputYear.value;
    inputYear.style.borderColor = "hsl(270, 3%, 87%)";
    monthError.style.visibility = "hidden";
    return true;
  } else {
    cardYear.innerHTML;
    inputYear.style.borderColor = "red";
    monthError.style.visibility = "visible";
    return false;
  }
}
function cvcValidate() {
  if (inputCvc.value.match(/^\d+/) && inputCvc.value.length === 3) {
    cardCvc.innerHTML = inputCvc.value;
    inputCvc.style.borderColor = "hsl(270, 3%, 87%)";
    cvcError.style.visibility = "hidden";
    return true;
  } else {
    cardCvc.innerHTML;
    inputCvc.style.borderColor = "red";
    cvcError.style.visibility = "visible";
    return false;
  }
}
