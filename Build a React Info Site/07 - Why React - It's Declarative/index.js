const root = document.querySelector('#root');

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

/* My answer */

// Create a new element
let heading = document.createElement('h5');
// Give the created element some text
heading.textContent = 'Hello world'
// Give the created element a class
heading.classList.add('header')

// Append created element to the #root as a child
document.querySelector('#root').appendChild(heading)

/* Bob's answer */

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)