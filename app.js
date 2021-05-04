const numberInput = document.querySelector("#number-input");
const convertBtn = document.querySelector("button");
const resultText = document.querySelector("#result");

let inDecimal, arrayInput;

convertBtn.addEventListener("click", function (e) {
  e.preventDefault();

  inDecimal = 0; // to reset
  arrayInput = numberInput.value.split("");
  arrayInput.reverse();

  for (i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i] != "0" && arrayInput[i] != "1") {
      resultText.innerHTML = `<span style='color: red'>Input is not binary</span>`;
      break;
    } else {
      inDecimal += Math.pow(2 * arrayInput[i], i);
      resultText.innerHTML = `${numberInput.value} in binary is <strong>${inDecimal}</strong>`;
    }
  }
});
