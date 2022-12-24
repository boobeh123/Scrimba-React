/**
 Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

// Note from me: The import statements were used in the Scrim environment. My local environment is using the CDN from unpkg. Code will still work if cloned.

// import React from "react"
// import ReactDOM from "react-dom"

const root = document.querySelector('#root')

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" alt="react-logo" />
                </nav>
            </header>
            <section>
                <h1>Reasons why I want to learn React</h1>
                <ol>
                    <li>To practice & build</li>
                    <li>Update my projects into React</li>
                    <li>Be able to maintain my codebase(s) easier</li>
                    <li>To create beautiful and valuable web (& maybe mobile, one day) applications</li>
                </ol>
            </section>   
            <footer>
                <p>© 2022 100Devs. All rights reserved.</p>
            </footer>
        </div>
    )    
}

ReactDOM.render(<Page />, root)