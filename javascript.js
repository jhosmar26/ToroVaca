// Get elements
const $buttonNumbers = document.querySelectorAll(".js-number-button");
const $number1 = document.querySelector("#mainNumber-1");
const $number2 = document.querySelector("#mainNumber-2");
const $number3 = document.querySelector("#mainNumber-3");
const $number4 = document.querySelector("#mainNumber-4");
const $reset = document.querySelector("#js-reset");
const $numbers = document.querySelectorAll(".js-main-number")

// Functions
const isAvailable = (valueNumber) => {
  if ($number1.innerText === "?") {
    $number1.innerText = valueNumber;
    return;
  }
  if ($number2.innerText === "?") {
    $number2.innerText = valueNumber;
    return;
  }
  if ($number3.innerText === "?") {
    $number3.innerText = valueNumber;
    return;
  }
  if ($number4.innerText === "?") {
    $number4.innerText = valueNumber;
    return;
  }
};

const updateMainNumber = (event) => {
  const valueNumber = event.target.innerText;
  isAvailable(valueNumber);
};

const notAvailable = (event) => {
  const button = event.target
  button.classList.add("selected");
};

const resetNumbers = () => {
  for (let index=0; index < 4; index++){
    const numberToChange = document.querySelectorAll(`.js-main-number`);
    numberToChange[index].innerText = "?";
  }
  for (let index = 0; index < $buttonNumbers.length; index++){
    $buttonNumbers[index].classList.remove("selected");
  }
}

// Handle Events
for (let index = 0; index < $buttonNumbers.length; index++) {
  $buttonNumbers[index].addEventListener("click", updateMainNumber);
  $buttonNumbers[index].addEventListener("click", notAvailable);
}

$reset.addEventListener("click", resetNumbers);