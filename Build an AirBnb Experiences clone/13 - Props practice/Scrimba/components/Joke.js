import React from 'react'

function Joke(props) {
    return (
        <div>
            { props.setup 
                ? <div className="joke">
                    <p>Question: {props.setup}</p>
                    <p>Answer: {props.punchline}</p>
                </div> 
                : <p className="joke">Joke: {props.punchline}</p> 
            }
        </div>
    )
}

export default Joke