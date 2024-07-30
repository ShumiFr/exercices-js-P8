const input = document.getElementById('decimalInput');
const p = document.getElementById('binaryResult');

function convertToBinary() {
    const number = input.value;
    if (isNaN(number) || number.trim() === '') {
        p.textContent = '';
        return;
    }
    const result = Number(number).toString(2);
    p.textContent = result;
}