/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

// Note from me: The code within the LOCAL directory is compatible with LiveServer && will work if cloned & launched.

const root = document.querySelector('#root')

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img 
                    src="./assets/images/airbnb-logo.png" 
                    alt="AirBnb-logo-and-logo-text" 
                    className="logo-img" />
            </nav>
        </header>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
        </div>
    )
}

ReactDOM.render(<App />, root)