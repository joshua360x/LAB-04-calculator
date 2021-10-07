// import functions
import { add, subtract, multiply, divide } from './calculations.js';
// console.log(add(50, 50));
// reference needed DOM elements


// Add DOM
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


// Subtract DOM
const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');


// Multiply DOM
const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');


// Divide DOM
const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

    
    // Add event Listener 
addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;


    const sum = add(num1, num2);

    addAnswer.textContent = sum;

});

    // Subtract event Listener 
subtractButton.addEventListener('click', () => {
    const num1 = +subtractNumber1.value;
    const num2 = +subtractNumber2.value;


    const sum = subtract(num1, num2);

    subtractAnswer.textContent = sum;

});

    // Multiply event Listener 
multiplyButton.addEventListener('click', () => {
    const num1 = +multiplyNumber1.value;
    const num2 = +multiplyNumber2.value;


    const sum = multiply(num1, num2);

    multiplyAnswer.textContent = sum;

});

    // Divide event Listener 
divideButton.addEventListener('click', () => {
    const num1 = +divideNumber1.value;
    const num2 = +divideNumber2.value;


    const sum = divide(num1, num2);

    divideAnswer.textContent = sum;

});

