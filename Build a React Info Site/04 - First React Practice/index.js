const root = document.querySelector('#root');

// Challenge/Practice: Render an unordered list with two listed items

// My answer
function List() {
    return (
        <ul>
            <li>Hello</li>
            <li>World</li>
        </ul>
    )
}
ReactDOM.render(<List />, root);

// Bobs answer
// ReactDOM.render(
//     <ul>
//         <li>Hello</li>
//         <li>World</li>
//     </ul>,
//     root
// )