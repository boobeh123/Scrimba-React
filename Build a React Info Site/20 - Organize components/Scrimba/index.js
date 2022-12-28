/**
Mini-Challenge: 
import the Header component to be used and rendered within index.js

Main Challenge: move the Footer and MainContent components
into their own files.
*/

// Note from me: The import statements were used in the Scrim environment. 
// Code from Scrimba directory WILL NOT work if cloned & launched. Use local directory code.

import React from "react"
import ReactDOM from "react-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

const root = document.querySelector('#root')

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