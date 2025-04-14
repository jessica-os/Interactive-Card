const form = document.querySelector("#form");
const thank = document.querySelector(".thank");

const cardElements = {
  name: document.querySelector(".card-name"),
  number: document.querySelector(".card-number"),
  month: document.querySelector(".card-month"),
  year: document.querySelector(".card-year"),
  cvc: document.querySelector(".card-cvc")
};

const inputFields = {
  name: document.querySelector("#name"),
  number: document.querySelector("#number"),
  month: document.querySelector("#month"),
  year: document.querySelector("#year"),
  cvc: document.querySelector("#cvc")
};

const errorMessages = {
  name: document.querySelector(".name-error"),
  number: document.querySelector(".number-error"),
  month: document.querySelector(".month-error"),
  cvc: document.querySelector(".cvc-error")
};

const confirmButton = document.querySelector("#confirm-button");
const continueButton = document.querySelector(".continue-button");

const defaultCardValues = {
  name: "JANE APPLESEED",
  number: "0000 0000 0000 0000",
  month: "00",
  year: "00",
  cvc: "000"
};

// Atualiza conteúdo do card ao digitar
inputFields.name.addEventListener("input", () => updateCard("name", inputFields.name.value));
inputFields.number.addEventListener("input", () =>
  updateCard("number", formatCardNumber(inputFields.number.value))
);
inputFields.month.addEventListener("input", () => updateCard("month", inputFields.month.value));
inputFields.year.addEventListener("input", () => updateCard("year", inputFields.year.value));
inputFields.cvc.addEventListener("input", () => updateCard("cvc", inputFields.cvc.value));

// Impede reload
form.addEventListener("submit", (e) => e.preventDefault());

// Clique em Confirmar
confirmButton.addEventListener("click", () => {
  const validations = [
    validateName(),
    validateNumber(),
    validateMonth(),
    validateYear(),
    validateCvc()
  ];

  if (validations.every(Boolean)) {
    form.style.display = "none";
    thank.style.display = "block";
  }
});

// Clique em Continue
continueButton.addEventListener("click", () => {
  form.style.display = "block";
  thank.style.display = "none";
  resetForm();
});

// ========= Funções Utilitárias ========= //

function updateCard(field, value) {
  cardElements[field].textContent = value || defaultCardValues[field];
}

function formatCardNumber(number) {
  return number.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || "";
}

function showError(input, errorElement, show = true) {
  input.classList.toggle("error", show);
  errorElement.style.visibility = show ? "visible" : "hidden";
}

function resetForm() {
  Object.keys(inputFields).forEach((field) => {
    inputFields[field].value = "";
    updateCard(field, "");
    showError(inputFields[field], errorMessages[field] || {}, false);
  });
}

// ========= Validações ========= //

function validateName() {
  const isValid = /^[a-zA-Z\s]+$/.test(inputFields.name.value.trim());
  showError(inputFields.name, errorMessages.name, !isValid);
  return isValid;
}

function validateNumber() {
  const value = inputFields.number.value.replace(/\s/g, "");
  const isValid = /^\d{16}$/.test(value);
  showError(inputFields.number, errorMessages.number, !isValid);
  return isValid;
}

function validateMonth() {
  const value = parseInt(inputFields.month.value, 10);
  const isValid = /^\d{2}$/.test(inputFields.month.value) && value >= 1 && value <= 12;
  showError(inputFields.month, errorMessages.month, !isValid);
  return isValid;
}

function validateYear() {
  const isValid = /^\d{2}$/.test(inputFields.year.value);
  // Usamos o erro de mês por simplicidade visual, ou pode criar um erro específico
  showError(inputFields.year, errorMessages.month, !isValid);
  return isValid;
}

function validateCvc() {
  const isValid = /^\d{3}$/.test(inputFields.cvc.value);
  showError(inputFields.cvc, errorMessages.cvc, !isValid);
  return isValid;
}
