document.getElementById('convertButton').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputTemp;

    if (isNaN(inputTemp)) {
        document.getElementById('result').value = "Invalid input";
        return;
    }

    switch (inputUnit) {
        case 'celsius':
            const toFahrenheit = (inputTemp * 9/5) + 32;
            const toKelvin = inputTemp + 273.15;
            outputTemp = `${toFahrenheit.toFixed(2)} °F | ${toKelvin.toFixed(2)} K`;
            break;
        case 'fahrenheit':
            const toCelsius = (inputTemp - 32) * 5/9;
            const toKelvinFromF = ((inputTemp - 32) * 5/9) + 273.15;
            outputTemp = `${toCelsius.toFixed(2)} °C | ${toKelvinFromF.toFixed(2)} K`;
            break;
        case 'kelvin':
            const toCelsiusFromK = inputTemp - 273.15;
            const toFahrenheitFromK = (inputTemp - 273.15) * 9/5 + 32;
            outputTemp = `${toCelsiusFromK.toFixed(2)} °C | ${toFahrenheitFromK.toFixed(2)} °F`;
            break;
        default:
            outputTemp = "Invalid unit";
            break;
    }

    document.getElementById('result').value = outputTemp;
});
