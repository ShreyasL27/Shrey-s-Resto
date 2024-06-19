// Passing variables into components, calling components, functions, and elements

import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => (
//     <h1 id="heading">Hello</h1>
// )
function Title() {
    return (
        <h1 id="heading">Hello</h1>
    );
};

// passing variable (element) into component
const element = (
    <h1>Mastery</h1>
)

// const heading = () => <h1 className="head">Namaste React using JSX 🚀</h1>;
const HeadingComponent = () => (
    <div id="container">
        {/* Ways of calling components/functions*/}
        <Title />
        <Title></Title>
        {Title()}

        {/* Calling variables/elements/functions*/}
        {element}
        <h1>Namaste</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
