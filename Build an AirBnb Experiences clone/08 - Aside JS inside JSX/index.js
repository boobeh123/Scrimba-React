/*
* How would you render JS variables within JSX?
*/

/**
* Challenge: fix the h1 below to use the timeOfDay
* string we determined in the code above
*/

// Note from me: Since concepts are being covered/taught, I will only provide files for my local environment. Code will work if cloned & launched.

const root = document.querySelector('#root');

function App() {
    const firstName = "Jane";
    const lastName = "Doe";
    const date = new Date();
    let hours = date.getHours();
    let clock = Number(date.getHours() % 12);
    let greeting;
    let ampm;

    if (hours < 12) {
        greeting = 'Morning';
        ampm = 'AM';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Afternoon';
        ampm = 'PM';
    } else {
        greeting = 'Evening';
        ampm = 'PM';
    }

    return (
        <div>
            <h5>Good {greeting} {firstName} {lastName}</h5>
            <p>It is {hours == 12 ? hours : clock} {ampm}</p>
        </div>
    )
}

ReactDOM.render(<App />, root)