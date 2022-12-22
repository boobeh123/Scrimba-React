const root = document.querySelector('#root');

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// Create a sample page in JSX & save to a variable
let element = (
    <div>
        <h5>Local Fish Market</h5>
        <ul>
            <li>Support local fisherman</li>
            <li>Caught fresh daily</li>
        </ul>
    </div>
)
console.log(element)

// Select the div#root and use the append() method
document.querySelector('#root').append(element);    // Output -> [object Object]

// Guess what will show up in the browser
// It will not be the HTML elements.

// Explain what actually shows up in the browser.
// The browser displays an object. We can see why this happens if we print the variable containing the JSX. Logging this variable returns a React element which is similar to Vanilla JS objects.