const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("signupButton");
const successMessage = document.getElementById("successBanner");

const numCharactersLabel = document.getElementById("charactersLabel");
const numbersLabel = document.getElementById("numbersLabel");
const numLowercaseLabel = document.getElementById("lowercaseLabel");
const numUppercaseLabel = document.getElementById("uppercaseLabel");
const numSpecialCharLabel = document.getElementById("symbolsLabel");

const emailError = document.getElementById("emailerror-warning");

button.addEventListener("click", function (event) {
  event.preventDefault();
  successMessage.classList.remove("d-none");
});

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;
  const isValidEmail = validateEmail(emailValue);

  if (emailValue && !isValidEmail) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
  }

  updateButtonState();
});

passwordInput.addEventListener("input", function () {
  const passwordValue = passwordInput.value;
  const passwordValidation = validatePassword(passwordValue);

  updatePasswordLabels(passwordValidation);
  updateButtonState();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const requirements = {
    length: /^.{8,15}$/,
    number: /\d/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    special: /[#\[\]()@$&*!?|,.^/\\+_\-]/,
  };

  const validation = {};

  for (const requirement in requirements) {
    validation[requirement] = requirements[requirement].test(password);
  }

  return validation;
}

function updatePasswordLabels(passwordValidation) {
  updateLabelState(numCharactersLabel, passwordValidation.length);
  updateLabelState(numbersLabel, passwordValidation.number);
  updateLabelState(numLowercaseLabel, passwordValidation.lowercase);
  updateLabelState(numUppercaseLabel, passwordValidation.uppercase);
  updateLabelState(numSpecialCharLabel, passwordValidation.special);
}

function updateLabelState(label, isValid) {
  if (!isValid) {
    label.classList.add("invalid");
    label.classList.remove("valid");
  } else {
    label.classList.remove("invalid");
    label.classList.add("valid");
  }
}

function updateButtonState() {
  const isValidEmail = validateEmail(emailInput.value);
  const passwordValidation = validatePassword(passwordInput.value);
  const isValidPassword =
    passwordValidation.length &&
    passwordValidation.number &&
    passwordValidation.lowercase &&
    passwordValidation.uppercase &&
    passwordValidation.special;

  if (isValidEmail && isValidPassword) {
    button.classList.add("success__button");
    button.removeAttribute("disabled");
    console.log("SUCCESS");
  } else {
    button.classList.remove("success__button");
    button.setAttribute("disabled", true);
  }
}
