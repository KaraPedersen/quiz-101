// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from "../utils.js";
const test = QUnit.test;

test('false one no', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userInput = "no";
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes(userInput);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('true one yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userInput = "yes";
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes(userInput);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});