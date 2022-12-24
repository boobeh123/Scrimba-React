/* 

Quiz!

1. What is a React component?
My answer: A React component is a javascript object which can be reused and contain logic within it.

Definition from react documentation: React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element.

Bob's answer: A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
My answer: This function uses camelCase, issues a warning, and will not render. We must uppercase the first letter to render the React component.

Bob's answer: The function uses camelCase and capitalize the first letter.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
My answer: This component is being rendered by calling the Header() function. While it will work, the convention is to use angle brackets < /> to render the component.

Bob's answer: Use angle brackets to render a React component.

*/