/*

1. What do props help us accomplish?
My answer: Props allow dynamic data to be rendered. This solves the problem of hard coding data.

Bob's answer: Make a component more reusable.

2. How do you pass a prop into a component?
My answer: 
The component function can accept parameters. 
As a comparison, HTML elements can contain attributes and Components can contain custom attributes, which are called properties (props). 
When the component is invoked, I can declare a property (key) and assign a property-value. 
This property-value is passed into function component as an argument and can be referenced by the key.

For example:
// Component accepting parameters
function Header(props) {
    return (
        <p>Hello {props.name}</p>
    )
}
// Passing a prop into a component
function App() {
    return (
        <div>
            <Header name="world" />
        </div>
    )
}

Bob's answer: <MyAwesomeHeader title="???" />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

My answer: 
No. The HTML specification has predefined attributes for HTML elements.
Only React-elements may have custom attributes.

Bob's answer:
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

My answer: First, the Navbar component needs to accept a parameter. Next, you must pass a value into the component by declaring an attribute.

For example:
// Accepting a parameter
function NavBar(props) {
    return (
        <header>
            <h1>Hello {props.name}</h1>
        </header>
    )
}
// Passing a prop into the component
function App() {
    return (
        <div>
            <Navbar name="world" />
        </div>
    )
}

Bob's answer:
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}

5. What data type is `props` when the component receives it?
My answer: It is a JavaScript object.

Bob's answer: An object!

*/