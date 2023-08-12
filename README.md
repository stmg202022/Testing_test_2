Testing:

As a developer, Our primary goal is to build software that works.To ensure our software works, we test the application.We check if our software works as expected.

Manual Testing:

An individual will open the website, interact with the website and ensure everything works as intended. If a new feature is released, you repeat the same steps.You may have to test not only the new feature but also the existing features

Drawbacks:

Time consuming
Complex repetitive tasks have a risk of human error.
You may not get a chance to test all the features you should.

Automated Testing:

Automated tests are programs that automate the task of testing your software. Writing code to test the software code.
Additional effort required when you develop a feature.

Advantages of AT:
Not time consuming.
Reliable(भरपर्दो), consistent (मिल्दो ) and not error prone.
Easy to identify and fix features that break tests when changes are made to the software.
Gives confidence when shipping software

Course Structure

Jest and React Testing library
Fundamentals of writing a test
Testing components with user interactions
Test component wrapped in provider
Test components with mocking
Static analysis testing

Prerequisites:

React fundamentals
Typescript fundamentals

Jest vs RTL

Jest:

Jest is the javascript testing framework. Jest is a test runner that finds tests, runs the tests, determines whether the tests passed of fail and reports it back in a human readable manner

RTL:

React Testing Library is the javascript testing utility that provides a virtual DOM for testing React components.

React Testing Library provides a virtual DOM which we can use to interact with and verify the behavior of a component.It provides utility, such as “render”, “screen.getByText” etc.

Testing Library is a family to packages which helps tests UI component

The core library is called DOM testing library and RTL is simply wrapped around this core library to test React applications in an easier way.

Different Types of Automated Testing:

1.Unit tests
2.Integration tests 3. End-to-End tests

Unit tests:

It is a testing of individual building blocks of an application such as a class or a function or a component.

Each unit or building block of tested is isolation, independent of other units

Dependencies are mocked

Run in a short amount of time and make it very easy to point out failures

Relatively easier to write and maintain

Integration tests:

It is the testing of combinations of Unit tests and ensuring that they work together

Take longer time than unit tests

End-to-End testing:
It is the testing of the entire application flow and ensuring that it works as designed from start to finish.

It involves a real UI, a real backend database, real services etc.

Take the longest time as they cover the most amount of code.

Have a cost implication as you interact with real APIs that may charge based on the number of requests.

Testing pyramid:

E2Et tests
^^^
Integration tests
^^^^^^^^^^
Unit tests

RTL Philosophy:

“The more your tests resemble ( मिल्दोजुल्दो ) the way your software is used, the more confidence they can give you.”

RTL STRIKES A BALANCE BETWEEN UNIT AND E2E TEST.

Test functions signature:
Syntax:

test(name, Fn, timeout)

Name => name of the test that is used to identify the test

Fn => function that contains the expectations to test

Timeout => set the timeout which is an optional argument for specifying how long to wait before aborting the test.The default timeout is 5 seconds.

Test Driven development(TDD):

Test Driven development is a software development process where you write tests before writing the software code.
Once the tests have been written, you then write the code to ensure the tests pass

Create tests that verify the functionality of a specific feature
Write software code that will run the tests successfully when re-executed.
Refactor the code for optimization while ensuring the tests continue to pass
Also called red-green testing as all tests go from a red failed state to a green passed state.

#What is jest Watch mode ?
When we run the cmd npm test => jest run in watch mode behind the scene.

Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make your tests run fast regardless of how many tests

Filtering tests picked up by jest : test.only(), test.skip()

#How to do group tests in jest ?

We use: syntax

describe(name, fn)

The first argument is the group name and the second argument is a function that contains the expectations to test.f

#Filename conventions in jest test ?

Files with .test.js or .test.tsx suffix.
Files with .spec.js or .spec.tsx suffix.
Files with .js or .tsx suffix in **tests**folders.

Recommendation is to always put your tests next to the code they are testing so that relative imports are shorter.

Test => it
Fit => test.only()
Xit => test.skip()

#What is Code Coverage in jest tests ?

A metric that can help you understand how much of your software code is tested.

Statement coverage: how many of the statements in the software code have been executed.
Branches coverage: how many of the branches of the control structures(if statements for instance) have been executed.
Function coverage: How many of the functions defined have been called finally.
Line coverage: how many of the lines of source code have been tested.

package.json
"coverage": "npm test -- --coverage --watchAll"

—coverage => to generate the report
–watchAll => to generate the all reports

"coverage": "npm test -- --coverage --watchAll —collectCoverageFrom=’src/components/\*_/_.{ts,tsx}’"

–collectCoverageFrom => which folder should or not collect code coverage from

#How does the threshold in jest work or how to set coverage threshold?

"jest": {
"coverageThreshold": {
"global": {
"branches": 80,
"functions": 80,
"lines": 80,
"statements": -10
}
}
}

Test will be fail if the coverage does not meet the threshold requirements
Assertions:

When writing tests, we often need to check that values meet certain conditions. Assertions decide if a test passes or fails.

expect(value).toBeInTheDocument()
The argument should be the value that your code produces.

Typically, you will use expect along with a “matcher” function to assert something about a value

A matcher can optionally accept an argument which is the correct expected value

toBeInTheDocument() => matcher functions

#What kind of matcher can we use in the assertions?
=>https://jestjs.io/docs/using-matchers
=>https://github.com/testing-library/jest-dom

We can see the inclusion of testing-library in setupTests.Ts folder too In react app vs code. It is a global setup file in a create react app project and this will be automatically executed before jest runs a test.

#What to test ?

There is no set rule but here is a set of guidelines for what’s worth testing when writing a react component.

1.Test component renders:
component should render without any error

2.Test component renders with props:
given a set of props does the component render the right html.

3. Test component renders in different states:
   for eg: if you have a nav bar the login button should render if the user is logout and not to render if the user is login

4. Test component reacts to events:  
   This is applicable to the component like buttons and form controls which allow user interaction.

There is also a mere advanced level to test….

#What not to test ?
1.Implementation details:
This is based on the react testing libraries philosophy. The more resemble the way your software is used the more confidence they can give you.You want tests testing the behavior and not how that behavior is implemented.This also makes refactoring easier.

    2.Third party code:

You should be testing code that you are writing in your project and not the code you are consuming from the external library. Eg: if you are using the material ui you don’t have to test the button component or the tabs component from mui. There is no point in doing that as mui is already well tested. Instead test the component that consume the mui components

    3. Code that is not important from a user point of view:

Eg: if you have written a utility function that displays date in a user-friendly format.You do not have to test if the functions was called by the component. Instead you can directly test if the date was rendered in the expected format.

#RTL Queries:

Every test we write generally involves the following basic steps:

Render the component
Find the element rendered by the component.
Assert against the element found in step 2 which will pass or fail the test

We render the component, we use the render method from RTL

For assertions, we use expect passing in a value and combine it with a matcher function from jest or jest-dom.

#Queries: Queries are the methods that the Testing library provides to find the elements on the page.

To find a single element on the page, we have:
getby..
findBy..
queryBy..

To find multiple elements on the page, We have:
getAllBy..
queryAllBy..
findAllBy..

With the two dots at the end of each method name needs to be combined with a suffix to form the actual query.

The suffix can be:
LabelText,
PlaceholderText
Text
DisplayValue
AltText
Title
TextId
Role

RTL getBy

###

getByRole
getByLabelText
getByplaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestId

#getByRole:

By default, many semantic elements in HTML have a role.

Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkbox have a checkbox role, radio buttons have a radio role and so on

If you’re working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role

Eg: To use an anchor element as a button in the navbar, you can add role=”button”

These are default role for getByRole(\_) functions provided by RTL
ARIA
https://www.w3.org/TR/wai-aria-1.2/#role_definitions  
https://www.w3.org/TR/html-aria/#docconformance
https://testing-library.com/docs/queries/byrole

Here is a list of common HTML elements and their corresponding ARIA roles:
Button Element:
HTML Element: <button>
ARIA Role: "button"
Link Element:
HTML Element: <a>
ARIA Role: "link"
Heading Elements:
HTML Elements: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
ARIA Role: "heading"
Text Input Element:
HTML Element: <input type="text">
ARIA Role: "textbox"
Checkbox Input Element:
HTML Element: <input type="checkbox">
ARIA Role: "checkbox"
Radio Button Input Element:
HTML Element: <input type="radio">
ARIA Role: "radio"
Combobox (Select) Element:
HTML Element: <select>
ARIA Role: "listbox"
List Element:
HTML Element: <ul> (unordered list) or <ol> (ordered list)
ARIA Role: "list"
List Item Element:
HTML Element: <li>
ARIA Role: "listitem"
Navigation Menu Element:
HTML Element: <nav>
ARIA Role: "navigation"
Table Element:
HTML Element: <table>
ARIA Role: "table"
Table Row Element:
HTML Element: <tr>
ARIA Role: "row"
Table Cell Element:
HTML Element: <td> (for data cells) or <th> (for header cells)
ARIA Role: "cell"
Banner or Header Element:
HTML Element: <header>
ARIA Role: "banner"
Main Content Element:
HTML Element: <main>
ARIA Role: "main"
Footer Element:
HTML Element: <footer>
ARIA Role: "contentinfo"
Form Element:
HTML Element: <form>
ARIA Role: "form"
Search Element:
HTML Element: <input type="search">
ARIA Role: "search"
#getByRole Options

Syntax: getByRole(“roleName”, { optionName: value})

    const bioElement = screen.getByRole("textbox", {
      name: "Bio:",
    });
    expect(bioElement).toBeInTheDocument();

name
level
hidden
selected
checked
pressed etc. //Read the docs

There is a default role name for all html elements. If we find the multiple element with the same role name, we use options name:
The accessible name is for simple cases equal to
The label of a form element
The text content of a button or
The value of the aria-label attribute

#getByLabelText:

getByLabelText will search for the label that matches the given text, then find the element associated with that label.

//If diff.. label element contain same text

    const nameElement3 = screen.getByLabelText("Name:", {
      selector: "select",
    });
    expect(nameElement3).toBeInTheDocument();

#getByPlaceholderText:

getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text.
eg:
const nameElement4 = screen.getByPlaceholderText("Enter your name...");
expect(nameElement4).toBeInTheDocument();

#getByText:

getByText will search for all elements that have a text node with textContent matching the given text. Paragraph <P>, <span>
eg:
const paragraphElement = screen.getByText("All Fields aremandatory.");
expect(paragraphElement).toBeInTheDocument();f

#getByDisplayValue:
For value attribute

getByDisplayValue returns the input, textarea, or select element that has the matching display value.
Eg:

    const nameElement5 = screen.getByDisplayValue("Samson");
    expect(nameElement5).toBeInTheDocument();

#getByAltText:

getByAltText will return the element that has the given alt text.

This method only support for HTMLelement which accept an alt attribute like <img>, <input>, <area> or custom HTML elements

Eg:

<img src="https://placehold.co/600x400" alt="A person with a laptop." />

    const imageElement = screen.getByAltText("A person with a laptop.");
    expect(imageElement).toBeInTheDocument();

#getByTitle:

getByTitle returns the element that has the matching title attribute.
Eg:

<span title="Close">X</span>

const spanElement = screen.getByTitle("Close");
expect(spanElement).toBeInTheDocument();

#getByTestId:

getByTestId returns the element that has the matching data-testid attribute,

<div data-testid="costum-element">Custom HTML element.</div>

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

Priority Order for getBy Queries

“Your test should resemble how users interact with your code(Component,page etc.) as much as possible.”

getByRole
getByLabelText
getByplaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestId

getAllBy

Find multiple elements in the DOM

getAllBy returns an array of all matching nodes for a query, and throws an error if no elements match

###

1.getAllByRole
2.getAllByLabelText
3.getAllByplaceholderText
4.getAllByText
5.getAllByDisplayValue
6.getAllByAltText
7.getAllByTitle
8.getAllByTestId

TextMatch

TextMatch represents a type which can be either a

string
regex
Function

#TextMatch - string

<div>Hello World</div>

screen.getByText(“Hello World”) //full string match
screen.getByText(“llo worl”, {exact:false})
screen.getByText(“hello world”, {exact: false})

#TextMatch - regex

<div>Hello World</div>

screen.getByText(/World/) //substring match
screen.getByText( /world/i) //substring match, ignore case
screen.getByText(/^hello world$/i) //full string match, ignore case

#TextMatch - custom function

(content ? : string, element ? : Element | null) => boolean

<div>Hello World</div>

screen.getByText((content) => content.startsWith(“Hello”))

QueryBy

We also can use with the queryBy + Suffix like queryByRole()

What if we want to test a certain element that is not rendering in the DOM ?

Returns the matching node for a query, and return null if no elements match
Useful for asserting an element that is not present
Throws an error if more than one match is found

const startLearningButton = screen.queryByRole("button", {
name: "Start learn",
});
expect(startLearningButton).not.toBeInTheDocument();

QueryAllBy

We also can use with the queryAllBy + Suffix like queryAllByRole()

Returns an array of all matching nodes for a query, and returns an empty array if no elements match.

NOTE:
getBy and getAllBy class of queries to assert if element are present in the DOM
queryBy and queryAllBy class of queries to assert if the element are not present in the DOM

Appearance /Disappearance
What if elements are not present in the DOM to begin but make way into the DOM after some time

For Example, data that is fetched from a server will be rendered only after a few milliseconds.For this getBy, getAllBy, queryBy and queryAllBy are not sufficient for this DOM. So,We use findBy and findAllBy.

findBy

Returns a promise which resolves when an element is found which matches the given query.
The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.(default timeOut)

findAllBy
Returns a promise which resolves to an array of elements when any elements are found which match the given query.
Manual queries

Example of Manual queries:

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('clicking the button updates the input value', () => {
render(<MyComponent />);

// Manual query: Select the input element by its role
const inputElement = screen.getByRole('textbox');

// Manual interaction: Simulate typing in the input
fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });

// Manual query: Select the button element by its text
const buttonElement = screen.getByText('Click me');

// Manual interaction: Simulate clicking the button
fireEvent.click(buttonElement);

// Manual query: Check if the input value is updated
expect(inputElement.value).toBe('Button clicked');
});

RTL Queries

getBy & getAllBy
queryBy & queryAllBy
findBy & findAllBy

Manual queris - you can use the regular querySelector DOM API to find elements

const {container} = render(</MyComponent />)
const foo = container.querySelector(‘[data-foo=”bar”]’

screen.debug()

logRoles(): it shows the whole ARIA Role OF THE COMPONENT
import { logRoles, render, screen } from "@testing-library/react";

test("start learn button should display after 500 millisecond", async () => {
const view = render(<Skills skills={skills} />);

    logRoles(view.container);


    // screen.debug();
    const startLearnButton = await screen.findByRole(
      "button",
      {
        name: "Start learn",
      },
      {
        timeout: 2000, //timeOut set // default is 1000ms
      }
    );


    // screen.debug();
    expect(startLearnButton).toBeInTheDocument();

});

NOTE: install testing playground extension
User interactions

A click using a mouse or a keypress using a keyboard
Software has to respond to such interactions
Tests should ensure the interactions are handled as expected

To test user interactions we should have to use a library called User-event.

User-event:
A companion library for testing library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser

It is the recommended way to test user interactions with RTL

fireEvent vs user-event:

fireEvent is a method from RTL which is used to dispatch DOM events

user-event simulates full interactions, which may fire multiple events and do additional checks along the way

For example, we can dispatch the change event on an input field using fireEvent

When a user types into a text box, the element has to be focused, and then keyboard and input events are fired and the selection and value on the element are manipulated as they type

user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and intractability checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn’t let a user click a hidden element or type in a disabled text box

Update: npm install @testing-library/user-event@latest

NOTE: All user apis event are async

Pointer Interactions

Convenience APIs: always rely on the convenience apis
user.setup()
user.click()
user……()

//click() is not a pointer interaction.
//it is the convenience api that internally calls the pointer api
//having said that convenience apis are what we typically use when writing tests
//For mouse interactions apart from click there is double click and triple click

//For mouse movement there is hover and unhover
//hover and unhover can be used when testing appearance and

Pointer APis
We can also call a lower level pointer api. Pointer accepts an object as argument and specifies the key property.

pointer({keys: ‘[MouseLeft]’})
pointer({keys: ‘[MouseRight][MouseLeft]’})
pointer({keys: ‘[MouseLeft>]’}) // pressed mouse
pointer({keys: ‘[/MouseLeft]’}) //releasing mouse

Keyword interactions

Utility APIs:
clear()
selectOptions() & deselectOptions()
upload() //file
type()

Convenience APIs:
tab()
copy()
cut()
paste()

Keyword APIs:
keyboard(‘foo’) // translates to: f, o, o
keyboard(‘{Shift>}A{/shift}’) // translate to : Shift(down), A, Shift(up)

Material ui providers

First setup the material ui theme, themeProvider, CssBaseLine etc.
npm install @mui/material @mui/styled-engine-sc styled-components

useTheme()

How to test with the wrapper Component ? Learn… why to use wrapper and how to used it ?

Eg: AppProvider > mui_mode

For that we have wrapper:
import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui_mode";
import { AppProviders } from "../../providers/app_providers";

describe("MuiMode", () => {
test("render the dark mode content correctly", () => {
render(<MuiMode />, {
wrapper: AppProviders,
});

    const headingElement = screen.getByRole("heading");


    expect(headingElement).toBeInTheDocument();


    expect(headingElement).toHaveTextContent("dark mode");

});
});
