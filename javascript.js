// Get elements
const $buttonNumbers = document.querySelectorAll(".js-number-button");
const $reset = document.querySelector("#js-reset");
const $mainNumbers = document.querySelectorAll(".js-main-number");
const $submit = document.querySelector("#js-submit");
const $record = document.querySelector("#js-record");
const $answer = document.querySelector("#js-answer").innerText;

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

const comparationCoincidences = (first, second) => {
  let coincidences = 0;
  let toros = 0;
  for (indexFirst = 0; indexFirst < first.length; indexFirst++) {
    for (indexSecond = 0; indexSecond < second.length; indexSecond++) {
      if (first[indexFirst] == second[indexSecond]) {
        coincidences++;
        if (indexFirst == indexSecond) {
          toros++;
        }
      }
    }
  }
  vacas = coincidences - toros;
  return [toros, vacas];
};

const endGame = (toros) => {
  if (toros == 4) {
    alert("YOU WONNNNNN");
  }
};

const getTorosYVacas = (number) => {
  const torosVacas = comparationCoincidences(number, $answer);
  endGame(torosVacas[0]);
  return `<li>${torosVacas[0]}T</li><li>${torosVacas[1]}V</li>`;
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
