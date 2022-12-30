import React from 'react'

function Card(props) {
    const intToFloat = (number, decPlace) => number.toFixed(decPlace);
    return (
        <div className="card-container">
            <div className="img-container">
                <img 
                    src={props.img}
                    alt="Katie-Zaferes-Swim-suit-USA" />
                <span>SOLD OUT</span>
            </div>
            <div className="text-container">
                <div>
                    <img 
                        src="./assets/images/star.png"
                        alt="red-star-for-ratings" />
                    <span>{intToFloat(props.rating, 1)}</span>
                    <span>({props.reviewCount}) &deg; {props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong>/ person</p>
            </div>
        </div>
    )
}

export default Card