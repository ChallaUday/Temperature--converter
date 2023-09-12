

let userInputCelsuisElement = document.getElementById("userInputCelsuis");
let userInputFahrenheitElement = document.getElementById("userInputFahrenheit");
let temperatureResultElement = document.getElementById("TemperatureResult");

function checkTemperature() {
    let inputValue = parseFloat(userInputCelsuisElement.value);
    if (!isNaN(inputValue)) {
        let Fahrenheit = parseFloat(inputValue * (9 / 5) + 32) + "";
        userInputFahrenheitElement.value = Fahrenheit;
        temperatureResultElement.style.backgroundColor = "green";
        temperatureResultElement.textContent = "Congratulations! You got it right ";
    } else {
        temperatureResultElement.style.backgroundColor = "#1e217c";
        temperatureResultElement.textContent = "Invalid Input! Try Again";
    }
}

function resetTemperature() {
    userInputCelsuisElement.value = "";
    userInputFahrenheitElement.value = "";
    temperatureResultElement.style.backgroundColor = "";
    temperatureResultElement.textContent = "";
}