function meterToFeet(intToConvert) {
    let result = intToConvert * 3.28084;
    return result;
}
function feetToMeter(intToConvert) {
    let result = intToConvert / 3.28084;
    return result;
}

function litersToGallons(intToConvert) {
    let result = intToConvert / 4.546;
    return result;
}

function gallonsToLiters(intToConvert) {
    let result = intToConvert * 4.546;
    return result;
}

function kilogramsToPounds(intToConvert) {
    let result = intToConvert * 2.20462;
    return result;
}

function poundsToKilograms(intToConvert) {
    let result = intToConvert / 2.20462;
    return result;
}

function render() {
    let intToConvert = document.getElementById("inputNum").textContent;
    let meterFeet = `${intToConvert} Meters = ${meterToFeet(
        intToConvert
    )} Feet | ${intToConvert} Feet = ${feetToMeter(intToConvert)} Meters`;
    document.getElementById("lengthOut").textContent = meterFeet;
    let litersGallons = `${intToConvert} Liters = ${litersToGallons(
        intToConvert
    )} Gallons | ${intToConvert} Gallons = ${gallonsToLiters(
        intToConvert
    )} Liters`;
    document.getElementById("volumeOut").textContent = litersGallons;
    let kilogramsPounds = `${intToConvert} Kilograms = ${kilogramsToPounds(
        intToConvert
    )} Pounds | ${intToConvert} Pounds = ${poundsToKilograms(
        intToConvert
    )} Kilograms`;
    document.getElementById("massOut").textContent = kilogramsPounds;
}
