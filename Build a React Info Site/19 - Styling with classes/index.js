/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
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
        <header className="header">
            <nav className="header-nav">
                <img src="./react-logo.png" alt="react-logo" className="header-logo" />
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
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