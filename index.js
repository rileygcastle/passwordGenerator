const slider = document.getElementById("character-range");
const sliderOutput = document.getElementById("value");
const form = document.getElementById("form");
const lowercaseCheckbox = document.getElementById("include-lowercase");
const uppercaseCheckbox = document.getElementById("include-uppercase");
const numbersCheckbox = document.getElementById("include-numbers");
const symbolsCheckbox = document.getElementById("include-symbols");
const passwordDisplay = document.getElementById("password-display");
const errorMessageElement = document.getElementById("error-message");

const upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  ",",
  ".",
  "[",
  "]",
];

sliderOutput.innerHTML = slider.value;

slider.oninput = function () {
  sliderOutput.innerHTML = this.value;
};

function showErrorMessage() {
  errorMessageElement.classList.remove("hide");
  errorMessageElement.classList.add("show");
  setTimeout(() => {
    errorMessageElement.classList.remove("show");
    errorMessageElement.classList.add("hide");
  }, 4000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = slider.value;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  const password = generatePassword(
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;

  if (!password) showErrorMessage();
});

function generatePassword(
  characterAmount,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let characters = [];
  if (includeLowercase) characters = [...characters, ...lowerCaseChars];
  if (includeUppercase) characters = [...characters, ...upperCaseChars];
  if (includeNumbers) characters = [...characters, ...numberChars];
  if (includeSymbols) characters = [...characters, ...symbolChars];
  if (characters.length === 0) return null;

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomNum];
    passwordCharacters.push(randomCharacter);
  }
  return passwordCharacters.join("");
}
