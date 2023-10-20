// declare variables

const lowercaseLetters = "abcdefghilklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRS";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-[]{}/'.,<>?;|`~-";

// Declare element by id

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generationBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generationBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let characters = "";
  let password = "";

  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
  }

  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }

  if (numberEl.checked) {
    characters += numbers;
  }
  if (symbolsEl.checked) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(password);
  passwordEl.value = password;
});
