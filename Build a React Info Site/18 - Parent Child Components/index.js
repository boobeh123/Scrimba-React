/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"

Extra credit: Render both components
*/

/**
Main Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component. (Note from me: I rendered the components within my App component.)
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

// Note from me: The import statements were used in the Scrim environment. My local environment is using the CDN from unpkg. Code will still work if cloned.

// import React from "react"
// import ReactDOM from "react-dom"

const root = document.querySelector('#root')

function MainContent() {
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

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" alt="react-logo" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <p>© 2022 100Devs. All rights reserved.</p>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, root)