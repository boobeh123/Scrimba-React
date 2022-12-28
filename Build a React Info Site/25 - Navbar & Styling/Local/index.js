/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

// Note from me: The code within the LOCAL directory is compatible with LiveServer && will work if cloned & launched.

const root = document.querySelector('#root')

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <img 
                        src="./public/assets/react-icon-small.png" 
                        alt="React-Logo" 
                        className="logo-img" />
                    <span className="logo-text">ReactFacts</span>
                </div>
                <p className="nav-text">React Course - Project 1</p>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <section>
            <h1>Main content here</h1>
        </section>   
    )    
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<App />, root)