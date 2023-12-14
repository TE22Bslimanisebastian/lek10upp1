let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay() {
    display.value = expression;
}
