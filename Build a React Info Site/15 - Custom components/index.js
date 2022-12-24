/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// Note from me: The import statements were used in the Scrim environment. My local environment is using the CDN from unpkg. Code will still work if cloned.

// import React from 'react'
// import ReactDOM from 'react-dom'

const root = document.querySelector('#root')

function Page() {
    return (
        <section>
            <h1>Reasons why I want to learn React</h1>
            <ol>
                <li>To practice & build</li>
                <li>Update my projects into React</li>
                <li>Be able to maintain my codebase(s) easier</li>
                <li>To create beautiful and valuable web (& maybe mobile, one day) applications</li>
            </ol>
        </section>
    )    
}

ReactDOM.render(<Page />, root)