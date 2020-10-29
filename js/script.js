/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students

// Global Variables
// Select the UL element with a class of student-list and assign its value to a variable.
let ulStudent = document.querySelector('.student-list');
// 3.2-Ok Select the UL element with a class of link - list and assign its value to a variable.
let ulLink = document.querySelector('.link-list');


/* Variable to store the number of items to select at any given time */
const itemsPerPage = 9;

function showPage(list, page) {
    // Create two variables to store the start index and the end index of the list items to be displayed on the given page.
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = page * itemsPerPage;

    // innerHTML property set the HTML content of the student - list variable you just created to an empty string.
    ulStudent.innerHTML = "";

    // Loop over the list parameter.
    for (let i = 0; i < list.length; i += 1) {
        // conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
        if (i >= startIndex && i < endIndex) {
            ulStudent.insertAdjacentHTML("beforeend",
                `<li class="student-item cf">
                <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                    <h3> ${list[i].name.first} ${list[i].name.last} </h3>
                    <span class="email"> ${list[i].email}</span>
                 </div>
                <div class="joined-details">
                    <span class="date">${list[i].registered.date}</span>
                 </div>
            </li> `);
        }
    }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// 1. Create a function that creates and appends functioning pagination buttons.
// 2.-Ok This function should accept a single list parameter to represent student data that will be passed as an argument when the function is called.
function paginationButtons(list) {

    // 3.1-Ok Inside the function: Create a variable to store the value of the number of pagination buttons needed. You can calculate this using the length of the list parameter. Remember, you will want to display nine students per page.
    const numberOfPagination = Math.round(list.length / itemsPerPage);


    // 3.3-Ok Use the innerHTML property set the HTML content of the link - list variable you just created to an empty string.This will remove any pagination buttons that might have previously been displayed.
    ulLink.innerHTML = "";

    // 3.4 Loop over the variable for the number of pages needed that you created earlier.
    for (let i = 0; i < numberOfPagination; i += 1) {
        // 3.5.1 Inside the loop: Create the DOM elements needed to display the pagination button as you iterate over the number of pages. Here is an example of what the the final version of these elements should look like: <li><button type="button">1</button></li>
        // 3.5.2 Insert the elements you have created to the link-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
        // 3.6 Select the first pagination button and give it a class name of active.
        if (i == 0) {
            ulLink.insertAdjacentHTML("beforeend",
                `<li>
          <button class='active' type="button">${i + 1}</button>
        </li >`);
        }
        else {
            ulLink.insertAdjacentHTML("beforeend",
                `<li>
              <button type="button">${i + 1}</button>
            </li >`);
        }
    }

}

// 3.7 Create an event listener to listen for clicks on the link-list variable that you created earlier.
ulLink.addEventListener('click', (e) => {
    let eventTarget = e.target;
    // 3.8.1 The click event should only fire when the buttons are clicked. Click event should not fire if user clicks between or around buttons. So if the click target is a pagination button:
    if (eventTarget.tagName === 'BUTTON') {
        // 3.8.2 Remove the active class from any other pagination button.
        document.querySelector('.active').className = '';
        // 3.8.3 Add the active class to the pagination button that was just clicked.
        e.target.className = 'active';
    }

    // 3.8.4 Call the showPage function passing the list parameter and the page number to display as arguments.
    showPage(data, eventTarget.textContent);
});

// Call functions

// 1. Call the first function you created to display a “page”, passing in the data variable and 1 as arguments.
showPage(data, 1);

// 2. Call the second function you created to add pagination buttons, passing the data variable as an argument.
paginationButtons(data);

// 
// 
// 
// Extra
// 1. Add a Search Component
// Dynamically create and add a search bar. Avoid making any changes in the index.html file and instead use your JavaScript skills for this. 
// Below is an example of the format of the search bar elements. Search bar can't be unstyled. If you follow the example below, 
// the provided CSS will style the search bar for you.
/*
let searchBar = document.getElementsByClassName('header');
const labelSearchBar = document.createElement('label');
labelSearchBar.for = "search";
labelSearchBar.class = "student-search";
const inputSearchBar = document.createElement('input');
inputSearchBar.input = "search";
inputSearchBar.placeholder = "Search by name...";
labelSearchBar.appendChild(inputSearchBar);
const buttonSearchBar = document.createElement('input');
buttonSearchBar.type = "button";
const imgSearchBar = document.createElement('input');
imgSearchBar.src = "img/icn-search.svg";
imgSearchBar.alt = "Search icon";
buttonSearchBar.appendChild(imgSearchBar);
labelSearchBar.appendChild(buttonSearchBar);

searchBar.insertAdjacentHTML('beforeend', labelSearchBar);

// 2. Add Functionality to the Search Component
// When the "Search" icon is clicked, the student data is filtered so that
// only students whose name matches the search query are shown.
// For example, if the name Bill is typed into the search field, only students with “Bill”
// in the name should be shown. If the letter S is typed in, only students with an “S” in
// the name should be shown.

function searchItems(searchInput, names) {
    console.log(searchInput);
    console.log(names);
    for (let i = 0; i < names.length; i++) {
        let names2 = names[i];
        names2.classList.remove("match");
        if (searchInput.value.length != 0 && names2.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            names2.classList.add("match");
        }
    }
}
 */
// 3. Add Pagination for Search Results
// The pagination buttons should change based on the number of matches to the search. For example: if nine or fewer matches are found, there should be 0 or 1 pagination buttons. If 22 matches are found, there should be 3 pagination buttons.
// Clicking on a pagination button should display the corresponding matching students for that page.
/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below


/* submit listener */
/*
submit.addEventListener('click', (event) => {
    event.preventDefault();

    // Invoke your search function here - Arguments: search, tableCells
    searchItems(search, tableCells);

    // Helpful log statement to test function
    console.log('Submit button is functional!');
});
*/
/* submit listener */
/*
search.addEventListener('keyup', () => {

    // Invoke your search function here - Arguments: search, tableCells
    searchItems(search, tableCells);


    // Helpful log statement to test function
    console.log('Keyup event on the Search input is functional!');
});
*/

// 4. Handle No Search Matches
// If no matches are found for a search, display a “No results found” type message on the page.


