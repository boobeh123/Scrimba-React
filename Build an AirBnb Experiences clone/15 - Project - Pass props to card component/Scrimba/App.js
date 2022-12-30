import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Card from './components/Card'

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Card 
                img="./assets/images/katie-zaferes.png"
                rating={5.0}
                reviewCount={6}
                location="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

export default App