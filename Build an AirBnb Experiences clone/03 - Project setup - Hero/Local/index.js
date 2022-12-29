/*
Challenge: Build the Hero component.
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

function MainContent() {
    return (
        <section className="hero">
            <img 
                src="./assets/images/photo-grid.png"
                alt="Several-images-in-one-image" 
                className="hero-img" />
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </section>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<App />, root)