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
    console.log('Calculator loaded');
}

setTimeout(() => {
    resultDisplay.value = '0';
} , 1000);


const clearDisplay = () => { // Clears display
    resultDisplay.value = '';
    console.log('Display cleared');
}

const updateDisplay = () => { // Function takes display value and pushes it to currentInput array
    if (resultDisplay.value === '' || currentInput.length >= 2) {
        return;
    }
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
    console.log('Current input updated:', currentInput);
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
    if (resultDisplay.value === '0' && currentInput.length < 1){
        console.log('No operation to perform');
        resultDisplay.value = 'Need input';
        setTimeout(() => {
            resultDisplay.value = '0';
        }, 3000);
    }
    updateDisplay();
    console.log('Answer:', answers(currentInput[0], currentInput[1]));
    const answer = answers(currentInput[0], currentInput[1]);
    if (answer === undefined || answer === null || isNaN(answer)) {
        resultDisplay.value = 'Error';
    } else {
        resultDisplay.value = answers(currentInput[0], currentInput[1]);
        resetOperations(); // Reset operations after calculation
    }
    console.log(resultDisplay.value);
    currentInput = []; // Clear current input after calculation
    console.log('Current input cleared:', currentInput);
})


let plus = false;
let minus = false;
let multiply = false;
let divide = false;

plusButton.addEventListener('click', () => { // Handles plus button click
    console.log(resultDisplay.value)
    updateDisplay();
    console.log('Plus button clicked');
    console.log('Current input:', currentInput);
    plus = true;
    clearDisplay();
})
minusButton.addEventListener('click', () => { // Handles minus button click
    console.log(resultDisplay.value)
    updateDisplay();
    console.log('Minus button clicked');
    console.log('Current input:', currentInput);
    minus = true;
    clearDisplay();
})
multiplyButton.addEventListener('click', () => { // Handles multiply button click
    console.log(resultDisplay.value)
    updateDisplay();
    console.log('Multiply button clicked');
    console.log('Current input:', currentInput);
    multiply = true;
    clearDisplay();
})
divideButton.addEventListener('click', () => { // Handles divide button click
    console.log(resultDisplay.value)
    updateDisplay();
    console.log('Divide button clicked');
    console.log('Current input:', currentInput);
    divide = true;
    clearDisplay();
})

const answers = (operand1, operand2) => {
    if (plus) {
        console.log('Performing addition:', operand1, '+', operand2);
        return operand1 + operand2;
    } else if (minus) {
        console.log('Performing subtraction:', operand1, '-', operand2);
        return operand1 - operand2;
    } else if (multiply) {;
        console.log('Performing multiplication:', operand1, '*', operand2);
        return operand1 * operand2;
    } else if (divide) {
        if (operand2 === 0) {
            console.log('Division by zero error');
            resultDisplay.value = 'Division Error';
            return 'Division Error';
        }
        console.log('Performing division:', operand1, '/', operand2);
        return operand1 / operand2;
    } else {
        console.log('No operation selected');
        return null;
    }
}
function resetOperations() {
    plus = false;
    minus = false;
    multiply = false;
    divide = false;
    console.log('Operations reset');
}
