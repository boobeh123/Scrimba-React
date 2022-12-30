import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Card from './components/Card'

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Card />
        </div>
    )
}

export default App