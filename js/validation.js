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

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("signupButton");

const numCharactersLabel = document.getElementById("charactersLabel");
const numbersLabel = document.getElementById("numbersLabel");
const numLowercaseLabel = document.getElementById("lowercaseLabel");
const numUppercaseLabel = document.getElementById("uppercaseLabel");
const numSpecialCharLabel = document.getElementById("symbolsLabel");

const emailerror = document.getElementById("emailerror-warning");

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;

  const isValidEmail = validateEmail(emailValue);

  if (emailValue && !isValidEmail) {
    emailerror.classList.remove("d-none");
  } else {
    emailerror.classList.add("d-none");
  }

  const passwordValidation = validatePassword(passwordInput.value);

  const isValidPassword =
    passwordValidation.length &&
    passwordValidation.number &&
    passwordValidation.lowercase &&
    passwordValidation.uppercase &&
    passwordValidation.special;

  if (isValidEmail && isValidPassword) {
    button.classList.add("success__button");
    console.log("SUCCESS");
  } else {
    button.classList.remove("success__button");
  }
});

passwordInput.addEventListener("input", function () {
  const passwordValue = passwordInput.value;

  const passwordValidation = validatePassword(passwordValue);

  if (!passwordValidation.length) {
    numCharactersLabel.classList.remove("valid");
    numCharactersLabel.classList.add("invalid");
  } else {
    numCharactersLabel.classList.remove("invalid");
    numCharactersLabel.classList.add("valid");
  }

  if (!passwordValidation.number) {
    numbersLabel.classList.add("invalid");
    numbersLabel.classList.remove("valid");
  } else {
    numbersLabel.classList.add("valid");
    numbersLabel.classList.remove("invalid");
  }

  if (!passwordValidation.lowercase) {
    numLowercaseLabel.classList.add("invalid");
    numLowercaseLabel.classList.remove("valid");
  } else {
    numLowercaseLabel.classList.remove("invalid");
    numLowercaseLabel.classList.add("valid");
  }

  if (!passwordValidation.uppercase) {
    numUppercaseLabel.classList.add("invalid");
    numUppercaseLabel.classList.remove("valid");
  } else {
    numUppercaseLabel.classList.remove("invalid");
    numUppercaseLabel.classList.add("valid");
  }

  if (!passwordValidation.special) {
    numSpecialCharLabel.classList.add("invalid");
    numSpecialCharLabel.classList.remove("valid");
  } else {
    numSpecialCharLabel.classList.remove("invalid");
    numSpecialCharLabel.classList.add("valid");
  }

  const isValidEmail = validateEmail(emailInput.value);
  const isValidPassword =
    passwordValidation.length &&
    passwordValidation.number &&
    passwordValidation.lowercase &&
    passwordValidation.uppercase &&
    passwordValidation.special;

  if (isValidEmail && isValidPassword) {
    button.classList.add("success__button");
    console.log("SUCCESS");
  } else {
    button.classList.remove("success__button");
  }
});
