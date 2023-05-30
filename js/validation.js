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

const numCharacters = document.getElementById("characters");
const numbers = document.getElementById("numbers");
const numLowercase = document.getElementById("lowercase");
const numUppercase = document.getElementById("uppercase");
const numSpecialChar = document.getElementById("symbols");

const numCharactersLabel = document.getElementById("charactersLabel");
const numbersLabel = document.getElementById("numbersLabel");
const numLowercaseLabel = document.getElementById("lowercaseLabel");
const numUppercaseLabel = document.getElementById("uppercaseLabel");
const numSpecialCharLabel = document.getElementById("symbolsLabel");

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;

  const isValidEmail = validateEmail(emailValue);

  if (isValidEmail) {
    console.log("Email is valid");
  } else {
    console.log("Email is invalid");
  }
});

passwordInput.addEventListener("input", function () {
  const passwordValue = passwordInput.value;

  const passwordValidation = validatePassword(passwordValue);

  if (!passwordValidation.length) {
    numCharacters.classList.remove("valid");
    numCharactersLabel.classList.remove("valid");
    numCharacters.classList.add("invalid");
    numCharactersLabel.classList.add("invalid");
  } else {
    numCharacters.classList.remove("invalid");
    numCharactersLabel.classList.remove("invalid");
    numCharacters.classList.add("valid");
    numCharactersLabel.classList.add("valid");
  }

  if (!passwordValidation.number) {
    numbers.classList.add("invalid");
    numbersLabel.classList.add("invalid");
    numbers.classList.remove("valid");
    numbersLabel.classList.remove("valid");
  } else {
    numbers.classList.add("valid");
    numbersLabel.classList.add("valid");
    numbers.classList.remove("invalid");
    numbersLabel.classList.remove("invalid");
  }

  if (!passwordValidation.lowercase) {
    numLowercase.classList.add("invalid");
    numLowercaseLabel.classList.add("invalid");
    numLowercase.classList.remove("valid");
    numLowercaseLabel.classList.remove("valid");
  } else {
    numLowercase.classList.remove("invalid");
    numLowercaseLabel.classList.remove("invalid");
    numLowercase.classList.add("valid");
    numLowercaseLabel.classList.add("valid");
  }

  if (!passwordValidation.uppercase) {
    numUppercase.classList.add("invalid");
    numUppercaseLabel.classList.add("invalid");
    numUppercase.classList.remove("valid");
    numUppercaseLabel.classList.remove("valid");
  } else {
    numUppercase.classList.remove("invalid");
    numUppercaseLabel.classList.remove("invalid");
    numUppercase.classList.add("valid");
    numUppercaseLabel.classList.add("valid");
  }

  if (!passwordValidation.special) {
    numSpecialChar.classList.add("invalid");
    numSpecialCharLabel.classList.add("invalid");
    numSpecialChar.classList.remove("valid");
    numSpecialCharLabel.classList.remove("valid");
  } else {
    numSpecialChar.classList.remove("invalid");
    numSpecialCharLabel.classList.remove("invalid");
    numSpecialChar.classList.add("valid");
    numSpecialCharLabel.classList.add("valid");
  }
});

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
