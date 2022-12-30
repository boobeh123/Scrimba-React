/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
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

function Card() {
    return (
        <div className="card-container">
            <div className="img-container">
                <img 
                    src="./assets/images/katie-zaferes.png"
                    alt="Katie-Zaferes-Swim-suit-USA" />
                <span>SOLD OUT</span>
            </div>
            <div className="text-container">
                <div>
                    <img 
                        src="./assets/images/star.png"
                        alt="red-star-for-ratings" />
                    <span>5.0</span>
                    <span>(6) &deg; USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong>/ person</p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Card />
        </div>
    )
}

ReactDOM.render(<App />, root)