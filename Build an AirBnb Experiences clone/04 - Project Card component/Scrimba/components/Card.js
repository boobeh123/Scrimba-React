import React from 'react'

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

export default Card