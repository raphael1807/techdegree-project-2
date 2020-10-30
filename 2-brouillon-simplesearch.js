/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


// Global Variables
let ulStudent = document.querySelector('.student-list');
let ulLink = document.querySelector('.link-list');
let header = document.querySelector('.header');

/* Numbers of items displayed per page */
const itemsPerPage = 9;

// This function will create and insert/append the elements needed to display a "page" of nine students
function showPage(list, page) {

    // Variables to store the start index and the end index of the list items to be displayed on the given page.
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = page * itemsPerPage;

    ulStudent.innerHTML = "";

    // Loop over the list parameter
    for (let i = 0; i < list.length; i += 1) {
        // Conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
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

// This function will create and insert/append the elements needed for the pagination buttons
function paginationButtons(list) {

    // Create a variable to store the value of the number of pagination buttons needed.
    const numberOfPagination = Math.round(list.length / itemsPerPage);

    ulLink.innerHTML = "";

    // Loop over the variable for the number of pages needed that you created earlier
    for (let i = 0; i < numberOfPagination; i += 1) {

        // First pagination button with a class name of active.
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

// Event listener to listen for clicks on the link-list variable 
ulLink.addEventListener('click', (e) => {
    let eventTarget = e.target;
    // Click event only fire when the buttons are clicked. 
    if (eventTarget.tagName === 'BUTTON') {
        // Active class from any other pagination button.
        document.querySelector('.active').className = '';
        // Active class added to the pagination button that was just clicked.
        e.target.className = 'active';
    }

    // Call the showPage function passing the list parameter and the page number to display as arguments.
    showPage(data, eventTarget.textContent);
});

// Call functions
// Call the first function you created to display a “page”, passing in the data variable and 1 as arguments.
showPage(data, 1);

// Call the second function you created to add pagination buttons, passing the data variable as an argument.
paginationButtons(data);

// 
// 
// 
// Extra
// 1. Add a Search Component
// Dynamically create and add a search bar. Avoid making any changes in the index.html file and instead use your JavaScript skills for this. 
// Below is an example of the format of the search bar elements. Search bar can't be unstyled. If you follow the example below, 
// the provided CSS will style the search bar for you.

header.insertAdjacentHTML("beforeend",
    `<label for="search" class="student-search">
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>`);

// 2. Add Functionality to the Search Component
// When the "Search" icon is clicked, the student data is filtered so that
// only students whose name matches the search query are shown.
// For example, if the name Bill is typed into the search field, only students with “Bill”
// in the name should be shown. If the letter S is typed in, only students with an “S” in
// the name should be shown.

const search = document.querySelector('#search');
const searchLabel = document.querySelector('.student-search');
const searchButton = searchLabel.querySelector('[type="button"]');


function searchStudents(searchInput, students) {
    ulStudent.innerHTML = "";
    data2 = [];

    students.forEach(function (person) {
        if (searchInput.value.length == 0) {
            showPage(data, 1);
            paginationButtons(data);
        }

        else if (searchInput.value.length != 0 && person.name.first.toLowerCase().includes(searchInput.value.toLowerCase())) {
            ulStudent.insertAdjacentHTML("beforeend",
                `<li class="student-item cf">
                    <div class="student-details">
                        <img class="avatar" src="${person.picture.large}" alt="Profile Picture">
                        <h3> ${person.name.first} ${person.name.last} </h3>
                        <span class="email"> ${person.email}</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">${person.registered.date}</span>
                    </div>
                 </li> `);
            data2.push(person);

            searchPagination();
            showPage(list, page)
        }
        console.log(data2);

        // else {
        //     ulStudent.insertAdjacentHTML("beforeend", '<p>No results found</p>');
        // }
    });
}



function searchPagination() {
    const newNumberOfPagination = Math.round(data2.length / itemsPerPage);

    ulLink.innerHTML = "";

    for (let i = 0; i < newNumberOfPagination; i += 1) {
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


/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below
 */

/* submit listener */
searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Invoke your search function here - Arguments: search, tableCells
    searchStudents(searchButton, data);
    // searchPagination();

    // Helpful log statement to test function
    console.log('Submit button is functional!');
});


/* submit listener */
search.addEventListener('keyup', () => {

    // Invoke your search function here - Arguments: search, tableCells
    searchStudents(search, data);
    // searchPagination();


    // Helpful log statement to test function
    console.log('Keyup event on the Search input is functional!');
});











// /* submit listener */
// search.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Invoke your search function here - Arguments: search, tableCells
//     searchItems(search, tableCells);

//     // Helpful log statement to test function
//     console.log('Submit button is functional!');
// });

// /* submit listener */
// search.addEventListener('keyup', () => {

//     // Invoke your search function here - Arguments: search, tableCells
//     searchItems(search, tableCells);


//     // Helpful log statement to test function
//     console.log('Keyup event on the Search input is functional!');

// searchBar.addEventListener('keyup', (e) => {
//     const searchInput = e.target.value.toLowerCase();

//     searchBar.addEventListener('keyup', (e) => {
//         const searchInput = e.target.value.toLowerCase();

//         Array.from(students).forEach(function (students) {
//             const name = students.textContent;
//             if (name.toLowerCase().indexOf(inputName) !== -1) {
//                 students.style.display = 'flex';
//                 p.style.display = 'none';
//             } else if (name.toLowerCase().indexOf(inputName) == -1) {
//                 students.style.display = 'none';
//                 p.style.display = 'flex';
//             }
//         })

//     });



//     const searchBar = document.getElementById("search");

//     searchBar.addEventListener('keyup', (e) => {
//         const inputName = e.target.value.toLowerCase();
//         const cards = document.querySelectorAll('.student-item');

//         Array.from(cards).forEach(function (cards) {
//             const name = cards.textContent;
//             if (name.toLowerCase().indexOf(inputName) !== -1) {
//                 cards.style.display = 'flex';
//                 p.style.display = 'none';
//             } else if (name.toLowerCase().indexOf(inputName) == -1) {
//                 cards.style.display = 'none';
//                 p.style.display = 'flex';
//             }
//         })

//     });