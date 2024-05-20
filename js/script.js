const textBox = document.getElementById("textBox");
const celciusToFahrenheit = document.getElementById("celciusToFahrenheit");
const fahrenheitToCelcius = document.getElementById("fahrenheitToCelcius");
const reamurToCelcius = document.getElementById("reamurToCelcius");
const celciusToReamur = document.getElementById("celciusToReamur");
const reamurToFahrenheit = document.getElementById("reamurToFahrenheit");
const fahrenheitToReamur = document.getElementById("fahrenheitToReamur");
const result = document.getElementById("result");

let temp;

function convert() {
  if (celciusToFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (9 / 5) * temp + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (fahrenheitToCelcius.checked) {
    temp = Number(textBox.value);
    temp = (5 / 9) * (temp - 32);
    result.textContent = temp.toFixed(1) + "°C";
  } else if (reamurToCelcius.checked) {
    temp = Number(textBox.value);
    temp = (5 / 4) * temp;
    result.textContent = temp.toFixed(1) + "°C";
  } else if (celciusToReamur.checked) {
    temp = Number(textBox.value);
    temp = (4 / 5) * temp;
    result.textContent = temp.toFixed(1) + "°R";
  } else if (reamurToFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (9 / 4) * temp + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (fahrenheitToReamur.checked) {
    temp = Number(textBox.value);
    temp = (4 / 9) * (temp - 32);
    result.textContent = temp.toFixed(1) + "°R";
  } else {
    result.textContent = "Please Select A Unit";
  }
}
