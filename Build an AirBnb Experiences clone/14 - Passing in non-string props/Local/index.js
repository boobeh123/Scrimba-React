/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

// Note from me: Since this was more of a "how do you do this" challenge, I only included the code for my local environment. Code will work if cloned & launched.

const div = document.querySelector('#root')
const root = ReactDOM.createRoot(div);

function Joke(props) {
    return (
        <div>
            { props.setup 
                ? <div className="joke">
                    <p>Question: {props.setup}</p>
                    <p>Answer: {props.punchline}</p>
                    <p>Rating: {props.upvotes} Upvotes / {props.downvotes} Downvotes</p>
                    <p>Comments: {props.comments.map((comment) => `\n user says: ${comment}`)}</p>
                    <p>isPun: {props.isPun}</p>
                </div> 
                : <div className="joke">
                    <p>Joke: {props.punchline}</p>
                    <p>Rating: {props.upvotes} Upvotes / {props.downvotes} Downvotes</p>
                    <p>Comments: {props.comments.map((comment) => `${comment} \n`)}</p>
                    <p>isPun: {props.isPun ? 'no setup' : '' }</p>
                </div>
            }
        </div>
    )
}

function App() {
    return (
        <div>
            <Joke 
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                upvotes={0}
                downvotes={0}
                comments={['lol', 'nice',]}
                isPun={false}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm"
                upvotes={0}
                downvotes={0}
                comments={['haha', 'u right ']}
                isPun={false}
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy"
                upvotes={0}
                downvotes={0}
                comments={['arrr', 'ahoy matey']}
                isPun={false}
            />
            <Joke 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                upvotes={0}
                downvotes={0}
                comments={[`we're in the main frame`, 'enhance']}
                isPun={false}
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                upvotes={0}
                downvotes={0}
                comments={['her fridge is empty', 'is that skincare products???']}
                isPun={false}
            />
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={0}
                downvotes={0}
                comments={['tru']}
                isPun={true}
            />
        </div>
    )
}

root.render(<App />)