/* 

1. Why do we need to `import React from "react"` in our files?
My answer:
The Scrim environment is not using the CDN from unpkg. Instead, the scrim environment uses React & React-dom packages as a dependency. We must import the package(s) before being able to use the package's methods.

Bob's answer:
The JSX syntax is defined in React.

2. If I were to console.log(page) in index.js, what would show up?
My answer: You would see an object. Printing the page variable will display a React element which looks similar to a vanilla JavaScript object.

Bob's answer: A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
My answer:
This code has two sibling elements and will not render. 
To be able to render these two sibling elements, we must nest it into a single parent element:
```JS
const page = (
    <section>
        <h1>Hello</h1>
        <p>This is my website!</p>
    </section>
)
```

Bob's answer: We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
My answer: React is declarative and is defined by "telling React what to do instead of how to do it".
Imperative in the programming sense is defined by "telling a program how to do it, step by step".

Bob's answer: Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
My answer: React is capable of creating code that is reusable.

Bob's answer: We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/