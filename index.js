/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let unitsLength = document.getElementById("units-length")
let unitsVolume = document.getElementById("units-volume")
let unitsMass = document.getElementById("units-mass")

function calcFeet() {
    let metersToFeet = inputEl.value * 3.281
    return metersToFeet.toFixed(3)
}

function calcMeters() {
    let feetToMeters = inputEl.value / 3.281
    return feetToMeters.toFixed(3)
}

function calcGallons() {
    let litersToGallons = inputEl.value * 0.264
    return litersToGallons.toFixed(3)
}

function calcLiters() {
    let gallonsToLiters = inputEl.value / 0.264
    return gallonsToLiters.toFixed(3)
}

function calcPounds() {
    let kilosToPounds = inputEl.value * 2.204
    return kilosToPounds.toFixed(3)
}

function calcKilos() {
    let poundsToKilos = inputEl.value / 2.204
    return poundsToKilos.toFixed(3)
}

convertBtn.addEventListener("click", function () {
    unitsLength.textContent = `${inputEl.value} meters = ${calcFeet()} feet | ${inputEl.value} feet = ${calcMeters()} meters`

    unitsVolume.textContent = `${inputEl.value} liters = ${calcGallons()} gallons | ${inputEl.value} gallons = ${calcLiters()} liters`

    unitsMass.textContent = `${inputEl.value} kilos = ${calcPounds()} pounds | ${inputEl.value} pounds = ${calcKilos()} kilos`

})

// TEXT FROM FIGMA DESIGN
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
