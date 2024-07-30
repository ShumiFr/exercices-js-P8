const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    const result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = 'Division by zero is not allowed';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}