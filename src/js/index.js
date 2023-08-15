const cardName = document.querySelector(".card-name");
const inputName = document.querySelector("#name");

const cardNumber = document.querySelector(".card-number");
const inputNumber = document.querySelector("#number");

const cardCvc = document.querySelector(".card-cvc");
const inputCvc = document.querySelector("#cvc");

const cardMonth = document.querySelector(".card-month");
const inputMonth = document.querySelector("#month");

const cardYear = document.querySelector(".card-year");
const inputYear = document.querySelector("#year");

const form = document.querySelector("#form");
const confirmButton = document.querySelector("#confirm-button ");
const thank = document.querySelector(".thank");
const continueButton = document.querySelector(".continue-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formValidate();
});

function formValidate() {
  checkInputName();
  checkInputNumber();
  checkInputMonth();
  checkInputYear();
  checkInputCvc();

  const inputItem = form.querySelectorAll(".input-item");
  const valid = [...inputItem].every((item) => {
    return item.className === "input-item";
  });
  if (valid) {
    form.style.display = "none";
    thank.style.display = "block";
  }
}
continueButton.addEventListener("click", () => {
  thank.style.display = "none";
  form.style.display = "block";
});

function error(input, message) {
  const inputItem = input.parentElement;
  const textMessage = inputItem.querySelector("a");

  textMessage.innerText = message;
  inputItem.className = "input-item error";
}

function checkInputName() {
  const inputNameValue = inputName.value;
  if (inputNameValue === "") {
    error(inputName, "can't be blank");
  } else {
    const inputItem = inputName.parentElement;
    inputItem.className = "input-item";
  }
}

function checkInputNumber() {
  const inputNumberValue = inputNumber.value;

  if (inputNumberValue === "") {
    error(inputNumber, "can't be blank");
  } else if (inputNumberValue.length < 16) {
    error(inputNumber, "Card number must be 16 numbers");
  } else if (!/^\d+(\s\d+)*$/.test(inputNumberValue)) {
    error(inputNumber, "Wrong format, numbers only");
  } else {
    const inputItem = inputNumber.parentElement;
    inputItem.className = "input-item";
  }
}

function checkInputMonth() {
  const inputMonthValue = inputMonth.value;
  const inputItem = inputMonth.parentElement;
  if (inputMonthValue === "") {
    error(inputMonth, "can't be blank");
  } else if (inputMonthValue.length < 2) {
    error(inputMonth, "fill with 2 characters");
  } else if (parseInt(inputMonthValue) > 12) {
    error(inputMonth, "must not be greater than 12!");
  } else {
    const inputItem = inputMonth.parentElement;
    inputItem.className = "input-item";
  }
}
function checkInputYear() {
  const inputYearValue = inputYear.value;
  const inputItem = inputYear.parentElement;
  if (inputYearValue === "" || inputYearValue.length < 2) {
    inputItem.className = "input-item error";
  } else {
    const inputItem = inputYear.parentElement;
    inputItem.className = "input-item";
  }
}
function checkInputCvc() {
  const inputCvcValue = inputCvc.value;
  const inputItem = inputCvc.parentElement;
  if (inputCvcValue === "") {
    error(inputCvc, "can't be blank");
  } else if (inputCvcValue.length < 3) {
    error(inputCvc, "fill with 3 characters");
  } else {
    const inputItem = inputCvc.parentElement;
    inputItem.className = "input-item";
  }
}

inputName.addEventListener("input", () => {
  cardName.innerText = inputName.value;
});

inputNumber.addEventListener("input", () => {
  cardNumber.innerText = inputNumber.value.match(/.{1,4}/g).join(" ");
});

inputCvc.addEventListener("input", () => {
  cardCvc.innerText = inputCvc.value;
});
inputMonth.addEventListener("input", () => {
  cardMonth.innerText = inputMonth.value;
});
inputYear.addEventListener("input", () => {
  cardYear.innerText = inputYear.value;
});
