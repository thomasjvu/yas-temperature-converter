//Write your pseduo code first! 
// 01. Get the input in Celsius
// 02. Convert the Celsius to Farenheit
// 03. Display converted temperature to users

document.querySelector('#getFarenheit').addEventListener('click', getFarenheit)
document.querySelector('#getKelvin').addEventListener('click', getKelvin)

// Convert to Farenheit
function getFarenheit() {
    celsius = Number(document.querySelector('#cel').value)
    let farenheit = celsius * 1.8 + 32
    console.log(farenheit, 'Farenheit')
    document.querySelector('#showFarenheit').innerText = farenheit + "\n Farenheit (°F)"

    // Change Background Colors
    if (celsius > 15) { // if hot, turn red
        document.querySelector("body").style.background = "#ff2147"
    } else if (celsius < 0) { // if cold, turn blue
        document.querySelector("body").style.background = "#ffbb33"
    }
}

// Convert to Kelvin
function getKelvin() {
    celsius = Number(document.querySelector('#cel').value)
    let kelvin = celsius + 273
    console.log(kelvin, 'Kelvin')
    document.querySelector('#showKelvin').innerText = kelvin + "\n Kelvin (K)"
    
    // Change Background Colors
    if (celsius > 15) { // if hot, turn red
        document.querySelector("body").style.background = "#ff2147"
    } else if (celsius < 0) { // if cold, turn blue
        document.querySelector("body").style.background = "#ffbb33"
    }
}