// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../calculations.js';

const test = QUnit.test;

// Add

// name your test by what it is testing
test('Adds two numbers 4 and 3', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 7;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// name your test by what it is testing
test('Adds two numbers 5 and 3', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});





// Subtract 

// name your test by what it is testing
test('Subtracts two numbers 5 and 3', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 2;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// name your test by what it is testing
test('Subtracts two numbers 10 and 3', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 3;
    const expected = 7;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




// Multiply

// name your test by what it is testing
test('Multiplies two numbers 5 and 5', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 5;
    const expected = 25;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// name your test by what it is testing
test('Multiplies two numbers 5 and 3', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 15;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});





// Divide

// name your test by what it is testing
test('Divides two numbers 5 and 5', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 5;
    const expected = 1;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// name your test by what it is testing
test('Divides two numbers 5 and 1', (expect) => {
    // 1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 1;
    const expected = 5;
    
    // 2. Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    // 3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

