/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * List Section Selection - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to store buttons - you can ignore these*/
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM elements
   This variable contains the list we will be choosing our selections from
   but this technique works just as well with an array of objects as it does
   with a list of DOM elements  */
const listItems = document.querySelectorAll('.item');

// Helpful log statement
console.log(listItems);


/* Variable to store the number of items to select at any given time */
const perPage = 2;


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function called `sectionSelection` - it should accept two parameters: list, section
// Inside the function body, do the following tasks

function sectionSelection(list, section) {
    const startIndex = (section * perPage) - perPage;
    const endIndex = (section * perPage);

    for (let i = 0; i < list.length; i++) {
        let li = list[i];
        if (i >= startIndex && i < endIndex) {
            li.style.color = 'green';
        } else {
            li.style.color = 'whitesmoke';
        }
    }
}

// 1a. Uncomment the following two variables and place them inside the function body.
// const startIndex = (section * perPage) - perPage;
// const endIndex = (section * perPage);

// 1b. Loop over the list parameter and set the style.color of each list[i] item to 'whitesmoke'

// 1c. Loop over the list parameter again
// Add a conditional inside the loop
// If the `i` is >= the `startIndex` variable && the `i` < the `endIndex` variable
// Set the style.color of the the list[i] item to 'green', or your favorite color


// 2. Invoke the `sectionSelection` function in the event listeners below
// Be sure to pass in arguments: the `listItems` variable and the targeted section - 1, 2, or 3



/**
 * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listeners below
 */

/* btn1 listener */
btn1.addEventListener('click', () => {

    // Invoke your sectionSelection function here - Arguments: listItems, 1

    sectionSelection(listItems, 1);

    // Helpful log statement to test function
    console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

    sectionSelection(listItems, 2);
    // Invoke your sectionSelection function here - Arguments: listItems, 2

    // Helpful log statement to test function
    console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

    // Invoke your sectionSelection function here - Arguments: listItems, 3
    sectionSelection(listItems, 3);

    // Helpful log statement to test function
    console.log('Third button is functional!');
});