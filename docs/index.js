// Setting variables for the calculator buttons and display
console.log('index.js loaded');

const oneButton = document.getElementById('1button');
const twoButton = document.getElementById('2button');
const threeButton = document.getElementById('3button');
const fourButton = document.getElementById('4button');
const fiveButton = document.getElementById('5button');
const sixButton = document.getElementById('6button');
const sevenButton = document.getElementById('7button');
const eightButton = document.getElementById('8button');
const nineButton = document.getElementById('9button');
const zeroButton = document.getElementById('0button');
const decimalButton = document.getElementById('decimalButton');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalButton');
const resultDisplay = document.getElementById('result');

let  currentInput = [];
let floatNumber = 0;

// Setting up
window.onload = function(){
    resultDisplay.value = 'Loaded';
    console.log('Calculator loaded');
}

setTimeout(() => {
    resultDisplay.value = '0';
} , 1000);


const clearDisplay = () => { // Clears display
    resultDisplay.value = '';
    currentInput = [];
    console.log('Display cleared');
}

const updateDisplay = () => { // Function takes display value and pushes it to currentInput array
    floatNumber = Number(resultDisplay.value);
    console.log('Updating display with value:', floatNumber);
    if (typeof floatNumber === 'number' && !isNaN(floatNumber)) {
        currentInput.push(floatNumber);
    } else {
        console.log('Display value is not a valid number');
        resultDisplay.value = 'Invalid input';
        setTimeout(() => {
            resultDisplay.value = '0';
        }, 3000);
    }
}
// Adding event listeners to buttons
oneButton.addEventListener('click', () => { // Adds 1 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '1';
    console.log('Button 1 clicked');
})
twoButton.addEventListener('click', () => { // Adds 2 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '2';
    console.log('Button 2 clicked');
})
threeButton.addEventListener('click', () => { // Adds 3 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '3';
    console.log('Button 3 clicked');
})
fourButton.addEventListener('click', () => { // Adds 4 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '4';
    console.log('Button 4 clicked');
})
fiveButton.addEventListener('click', () => { // Adds 5 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '5';
    console.log('Button 5 clicked');
})
sixButton.addEventListener('click', () => { // Adds 6 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '6';
    console.log('Button 6 clicked');
})  
sevenButton.addEventListener('click', () => { // Adds 7 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '7';
    console.log('Button 7 clicked');
})  
eightButton.addEventListener('click', () => { // Adds 8 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '8';
    console.log('Button 8 clicked');
})
nineButton.addEventListener('click', () => { // Adds 9 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '9';
    console.log('Button 9 clicked');
})
zeroButton.addEventListener('click', () => { // Adds 0 to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    resultDisplay.value += '0';
    console.log('Button 0 clicked');
})
decimalButton.addEventListener('click', () => { // Adds decimal point to display
    if (resultDisplay.value === '0') {
        clearDisplay();
    }
    if (!resultDisplay.value.includes('.')) {
        resultDisplay.value += '.';
        console.log('Decimal button clicked');
    } else {
        console.log('Decimal already present');
    }
})
equalsButton.addEventListener('click', () => { // Handles equals button click
    console.log('Equals button clicked');
    if (resultDisplay.value === '0' && currentInput.length == 0){
        console.log('No operation to perform');
        resultDisplay.value = 'Need input';
        setTimeout(() => {
            resultDisplay.value = '0';
        }, 3000);
    }
    updateDisplay();
    console.log('Current input:', currentInput);
})