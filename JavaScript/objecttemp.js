let temperature = function (fahrenheit) {
    return {
        ferenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit - 32) * (5 / 9) + 273.15
    }
}

let temp = temperature(74)

console.log(temp)