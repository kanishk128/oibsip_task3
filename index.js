function validateForm() {
    var temperature = document.forms["data"]["temp"].value;
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature.");
      return false;
    }
  
    var type = document.querySelector('input[name="type"]:checked').value;
    var result = convertTemperature(temperature, type);
    displayResult(result);
  
    return false; // Prevent form submission
  }
  
  function convertTemperature(temperature, type) {
    var convertedTemperature;
    
    if (type === 'Celsius') {
      convertedTemperature = (parseFloat(temperature) * 9/5) + 32;
    } else {
      convertedTemperature = (parseFloat(temperature) - 32) * 5/9;
    }
  
    return convertedTemperature.toFixed(2); // Limit the result to two decimal places
  }
  
  function displayResult(result) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Result: ' + result;
  }
  