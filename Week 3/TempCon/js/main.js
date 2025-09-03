// Function to convert temperature
function convertTemperature() {
  // Get user input
  const temperatureInput = document.getElementById("temperatureInput").value;
  const conversionType = document.querySelector(
    'input[name="conversion"]:checked'
  );

  // Initialize result variable
  let result = "";

  // Check if input and conversion type are valid
  if (temperatureInput !== "" && conversionType) {
    const temperature = parseFloat(temperatureInput);
    const conversion = conversionType.value;

    // Perform conversion using ternary operators
    // condition ? expressionIfTrue : expressionIfFalse;
    result =
      conversion === "CtoF"
        ? `${temperature}°C is ${((temperature * 9) / 5 + 32).toFixed(2)}°F`
        : `${temperature}°F is ${(((temperature - 32) * 5) / 9).toFixed(2)}°C`;

    // if (conversion === 'CtoF') {
    //     // If conversion type is Celsius to Fahrenheit
    //     result = `${temperature}°C is ${(temperature * 9/5 + 32).toFixed(2)}°F`;
    // } else {
    //     // If conversion type is Fahrenheit to Celsius
    //     result = `${temperature}°F is ${((temperature - 32) * 5/9).toFixed(2)}°C`;
    // }
  } else {
    // Error message if input is invalid
    result = "Please enter a temperature and select a conversion type.";
  }

  // Display result
  document.getElementById("result").innerText = result;
}
