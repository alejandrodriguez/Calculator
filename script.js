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
const equalsbtn = document.querySelector('.equalsbtn');
const signbtn = document.querySelector('.signbtn');
const clearbtn = document.querySelector('.clearbtn');

let displayNum = '0';
display.textContent = displayNum;

function addNumToDisplay(number) {
    if (display.textContent = '0') {
        displayNum = [number]
        display.textContent = displayNum;
    } else if (displayNum.length < 10){ //subject to change
        displayNum.push(number)
        display.textContent = displayNum.join();
    }
}

zerobtn.addEventListener('click', addNumToDisplay)