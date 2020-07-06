// Get elements
const $buttonNumbers = document.querySelectorAll(".js-number-button");
const $reset = document.querySelector("#js-reset");
const $mainNumbers = document.querySelectorAll(".js-main-number");
const $submit = document.querySelector("#js-submit");
const $record = document.querySelector("#js-record");

// Functions
const isAvailable = (valueNumber) => {
  for (let index = 0; index < $mainNumbers.length; index++) {
    if ($mainNumbers[index].innerText == "?") {
      $mainNumbers[index].innerText = valueNumber;
      return;
    }
  }
};

const updateMainNumber = (event) => {
  const valueNumber = event.target.innerText;
  isAvailable(valueNumber);
};

const notAvailable = (event) => {
  const button = event.target;
  button.classList.add("selected");
  button.setAttribute("disabled", true);
};

const resetNumbers = () => {
  for (let index = 0; index < $mainNumbers.length; index++) {
    $mainNumbers[index].innerText = "?";
  }
};

const resetButtons = () => {
  for (let index = 0; index < $buttonNumbers.length; index++) {
    $buttonNumbers[index].classList.remove("selected");
    $buttonNumbers[index].removeAttribute("disabled");
  }
};

const getTorosYVacas = (number) => {
  console.log(number);
  return `<li>T</li><li>V</li>`;
};

const submitResult = () => {
  let testNumber = "";
  for (let index = 0; index < $mainNumbers.length; index++) {
    testNumber = testNumber + $mainNumbers[index].innerText;
  }
  resetNumbers();
  resetButtons();
  $submit.setAttribute("disabled", true);
  const torosYVacas = getTorosYVacas(testNumber);
  $record.innerHTML += `<li>${testNumber}</li>${torosYVacas}`;
};

const handleNumberClick = (event) => {
  if (!isFilled()) {
    updateMainNumber(event);
    notAvailable(event);
    if (isFilled()) {
      $submit.removeAttribute("disabled");
    }
  }
};

const isFilled = () => {
  for (index = 0; index < $mainNumbers.length; index++) {
    if ($mainNumbers[index].innerText == "?") {
      return false;
    }
  }
  return true;
};

// Handle Events
for (let index = 0; index < $buttonNumbers.length; index++) {
  $buttonNumbers[index].addEventListener("click", handleNumberClick);
}

$reset.addEventListener("click", resetNumbers);

$submit.addEventListener("click", submitResult);
