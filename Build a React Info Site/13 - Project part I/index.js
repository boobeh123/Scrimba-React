/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// Note from me: The import statements were used in the Scrim environment. My local environment is using the CDN from unpkg. Code will still work if cloned.

// import React from 'react'
// import ReactDOM from 'react-dom'

const root = document.querySelector('#root')

function Page() {
    return (
        <div>
            <header>
                <img src="./react-logo.png" width="40px" alt="React-logo"/>
            </header>
            <section>
            <h1>Fun facts about Dogs</h1>
            <ul>
                <li>A dog's nose has a unique print, much like a human fingerprint.</li>
                <li>All dogs have dreams.</li>
                <li>A dog curls up into a ball to protect their organs.</li>
                <li>Petting a dog reduces blood pressure in humans & dogs.</li>
            </ul>
            </section>
        </div>
    )    
}

ReactDOM.render(<Page />, root)