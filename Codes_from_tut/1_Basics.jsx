// Craeting elements using React.createElement

import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child">
        <h1>Hello World!</h1>
        <p>This is a paragraph</p>
    </div>
</div>
*/

const elements = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World!"),
    React.createElement("h2", { id: "para" }, "Shreyas loves React!"),
  ])
);

console.log(elements)
// const heading = React.createElement("h1", {id : "heading"}, "Hello World! by React using CDN");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elements);
