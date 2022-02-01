let displayNum = [0];
let previousSolution = 0;

const display = document.querySelector('.display');
const zerobtn = document.querySelector('.zerobtn');
const onebtn = document.querySelector('.onebtn');
const twobtn = document.querySelector('.twobtn');
const threebtn = document.querySelector('.threebtn');
const fourbtn = document.querySelector('.fourbtn');
const fivebtn = document.querySelector('.fivebtn');
const sixbtn = document.querySelector('.sixbtn');
const sevenbtn = document.querySelector('.sevenbtn');
const eightbtn = document.querySelector('.eightbtn');
const ninebtn = document.querySelector('.ninebtn');
const addbtn = document.querySelector('.addbtn');
const subtractbtn = document.querySelector('.subtractbtn');
const multiplybtn = document.querySelector('.multiplybtn');
const dividebtn = document.querySelector('.dividebtn');
const decimalbtn = document.querySelector('.decimalbtn');
const equalsbtn = document.querySelector('.equalsbtn');
const signbtn = document.querySelector('.signbtn');
const clearbtn = document.querySelector('.clearbtn');

display.textContent = displayNum;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    let answer = 0;
    switch(operator) {
        case '+':
            answer = add(a, b);
            break;
        case '-':
            answer = subtract(a, b);
            break;
        case '*':
            answer = multiply(a, b);
            break;
        case '/':
            answer = divide(a, b);
            break;
        default:
            answer = 'Error';
    }
    return answer;
}

function addNumToDisplay(number) { //or decimal!
    if (displayNum[0] === 0 && displayNum[1] != '.') {
        if (number === '.') {
            displayNum = [ 0 , '.' ]
        } else {
            displayNum[0] = number;
        }
        display.textContent = displayNum.join('');
    } else if (number === '.') {
        let isThereDecimal = displayNum.filter(digit => digit === '.')
        if (!isThereDecimal[0]) {
            displayNum.push(number);
            display.textContent = displayNum.join('');
        }
    } else if ((number != 0 || displayNum[0] != 0) && displayNum.length < 10) { //subject to change
        displayNum.push(number);
        display.textContent = displayNum.join('');
    }
}

function clearDisplay() {
    displayNum = [0];
    display.textContent = displayNum;
}

function flipSign () {
    if (displayNum[0] != '-') {
    displayNum.unshift('-')
    } else {
        displayNum.shift();
    }
    display.textContent = displayNum.join('');
}

zerobtn.addEventListener('click', () => addNumToDisplay(0));
onebtn.addEventListener('click', () => addNumToDisplay(1));
twobtn.addEventListener('click', () => addNumToDisplay(2));
threebtn.addEventListener('click', () => addNumToDisplay(3));
fourbtn.addEventListener('click', () => addNumToDisplay(4));
fivebtn.addEventListener('click', () => addNumToDisplay(5));
sixbtn.addEventListener('click', () => addNumToDisplay(6));
sevenbtn.addEventListener('click', () => addNumToDisplay(7));
eightbtn.addEventListener('click', () => addNumToDisplay(8));
ninebtn.addEventListener('click', () => addNumToDisplay(9));
decimalbtn.addEventListener('click', () => addNumToDisplay('.'))
clearbtn.addEventListener('click', clearDisplay);
signbtn.addEventListener('click', flipSign);