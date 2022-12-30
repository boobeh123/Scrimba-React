/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
        My answer: It messes up styling due to CSS selectors
*/
/* 
2nd Challenge: Add all the rest of the 
data to the Contact card instances
*/
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const root = document.querySelector('#root');

ReactDOM.render(<App />, root)