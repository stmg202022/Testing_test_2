// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

//THIS FOLDER IS ADDED BY REACT APP BY DEFAULT FOR ASSERTIONS

// Assertions:

// When writing  tests, we often need to check that values meet certain conditions. Assertions decide if a test passes or fails.

// expect(value).toBeInTheDocument()
// The argument should be the value that your code produces.

// Typically, you will use expect along with a “matcher” function to assert something about a value

// A matcher can optionally accept an argument which is the correct expected value

// toBeInTheDocument()  => matcher functions

// #What kind of matcher can we use in the assertions?
// =>https://jestjs.io/docs/using-matchers
// =>https://github.com/testing-library/jest-dom

// We can see the inclusion of testing-library in setupTests.Ts folder too In react app vs code. It is a global setup file in a create react app project and this will be automatically executed before jest runs a test.
