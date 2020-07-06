// Get elements
const $buttonNumbers = document.querySelectorAll(".js-number-button");
const $number1 = document.querySelector("#mainNumber-1");
const $number2 = document.querySelector("#mainNumber-2");
const $number3 = document.querySelector("#mainNumber-3");
const $number4 = document.querySelector("#mainNumber-4");
const $reset = document.querySelector("#js-reset");
const $mainNumbers = document.querySelectorAll(".js-main-number")
const $submit = document.querySelector("#js-submit")
const $record = document.querySelector("#js-record")

// Functions
const isAvailable = (valueNumber) => {
  for(let index = 0 ; index < $mainNumbers.length ; index++ ){
    if($mainNumbers[index].innerText == "?"){
      $mainNumbers[index].innerText = valueNumber;
      console.log(index)
      if(index!=3){
        return
      }
    };
  };
  for (index = 0; index < $buttonNumbers.length ; index++){
    $buttonNumbers[index].classList.add("selected");

  }
};

const updateMainNumber = (event) => {
  const valueNumber = event.target.innerText;
  isAvailable(valueNumber);
};

const notAvailable = (event) => {
  const button = event.target;
  button.classList.add("selected");
};

const resetNumbers = () => {
  for (let index = 0 ; index < $mainNumbers.length ; index++){
    const $numberToChange = document.querySelectorAll(`.js-main-number`);
    $numberToChange[index].innerText = "?";
  }
  for (let index = 0; index < $buttonNumbers.length; index++){
    $buttonNumbers[index].classList.remove("selected");
  }
}

const submitResult = () => {
  let $testNumber = "";
  for (let index = 0 ; index < $mainNumbers.length ; index++){
    if ($mainNumbers[index].innerText == "?"){
      return alert("error");
    }
    $testNumber = $testNumber+$mainNumbers[index].innerText;
  }
  resetNumbers();
  $record.innerHTML += `<li>${$testNumber}</li><li>T</li><li>V</li>`;

}

// Handle Events
for (let index = 0; index < $buttonNumbers.length; index++) {
  $buttonNumbers[index].addEventListener("click", updateMainNumber);
  $buttonNumbers[index].addEventListener("click", notAvailable);
}

$reset.addEventListener("click", resetNumbers);

$submit.addEventListener("click", submitResult);