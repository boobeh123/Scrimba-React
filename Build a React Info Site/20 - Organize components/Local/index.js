/**
Mini-Challenge: 
import the Header component to be used and rendered within index.js

Main Challenge: move the Footer and MainContent components
into their own files.
*/

// Note from me: The code within the LOCAL directory is compatible with LiveServer && will work if cloned & launched.

const root = document.querySelector('#root')

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