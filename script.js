let displayNum = [0];
let previousSol = null;
let previousOperator = null;
let operatorPressed = false;

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

function toggleActive(operator) {
    switch (operator) {
    case '+':
        addbtn.classList.toggle('active');
        break;
    case '-':
        subtractbtn.classList.toggle('active');
        break;
    case '*':
        multiplybtn.classList.toggle('active');
        break;
    case '/':
        dividebtn.classList.toggle('active');
        break;
    }
}

function removeActive() {
	addbtn.classList.remove('active');
	subtractbtn.classList.remove('active');
	multiplybtn.classList.remove('active');
	dividebtn.classList.remove('active');
}

function changeDisplay(num) {
	displayNum = num
	display.textContent = displayNum //does an if statement for .join('') need to be added?
}

function operate(a, operator, b) {
	let solution = 0;
	if (typeof b === 'object') {
		b = b.join('');
	}
	b = parseInt(b * 1000000000, 10) / 1000000000;
	switch (operator) {
		case '+':
		solution = add(a,b);
		break;
		case '-':
		solution = subtract(a,b);
		break;
		case '*':
		solution = multiply(a,b)
		break;
		case '/':
        if(b === 0) {
            solution = 'chill';
        } else {
		    solution = divide(a,b);
        }
		break;
	}
    let isThereDecimal = Array.from(solution).filter(digit => digit === '.');
    let solutionLength = solution.toString().length;
    if (solution > 999999999) {
        solution = 'Number too large'
    } else if (!isThereDecimal[0]) {
        if (solutionLength > 10) {
            console.log(solution);
            solution = Math.round(solution * 10000) / 10000;
        }
    }
	previousSol = solution;
    console.log(previousSol);
    console.log(typeof previousSol);
	changeDisplay(solution);
    return solution;
}

function addNumToDisplay(num) { //unsure about this one chief
    if (operatorPressed) {
        operatorPressed = false;
        removeActive();
        if (typeof displayNum === 'object') {
            displayNum = displayNum.join('');
        }
        previousSol = parseInt(displayNum * 1000000000, 10) / 1000000000;
        displayNum = [0];
    }
    if (typeof displayNum === 'number') {
        if(num === '.') {
            displayNum = [0, '.']
            display.textContent = displayNum.join('');
        } else {
            changeDisplay(num);
        }
    } else if (typeof displayNum === 'object') {
        if (num === '.') {
                let isThereDecimal = displayNum.filter(digit => digit === '.')
                if (!isThereDecimal[0]) {
                        displayNum.push(num);
                        display.textContent = displayNum.join('');
            }
        } else if (displayNum[0] === 0 && displayNum [1] !== '.') {
            changeDisplay([num]);
        } else if ((num != 0 || displayNum[0] != 0) && displayNum.length < 10) { //subject to change
                displayNum.push(num);
                display.textContent = displayNum.join('');
        }
    }
}

function selectOperator(operator) { //was this the name?
	if (operatorPressed) {
		removeActive();
		//change previousOperator?
	}
	operatorPressed = true;
	toggleActive(operator);
	if (previousSol !== null && previousOperator !== null) { // can the !== just be changed to previousSol, previousOperator
		operate(previousSol, previousOperator, displayNum)
	}
	if (operator === '=') {
	previousOperator = null;
	} else {
	previousOperator = operator;
	}
}

function clearDisplay() {
    displayNum = [0];
    previousSol = null;
    previousOperator = null;
    operatorPressed = false;
    addbtn.classList.remove('active');
    subtractbtn.classList.remove('active');
    multiplybtn.classList.remove('active');
    dividebtn.classList.remove('active');
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
addbtn.addEventListener('click', () => selectOperator('+'));
subtractbtn.addEventListener('click', () => selectOperator('-'));
multiplybtn.addEventListener('click', () => selectOperator('*'));
dividebtn.addEventListener('click', () => selectOperator('/'));
equalsbtn.addEventListener('click', () => selectOperator('='));