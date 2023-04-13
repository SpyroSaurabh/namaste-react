import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hii from Namaste React🚀"
);
console.log(heading);

// JSX is HTML like syntax not HTML
// JSX by using Babel transpiles to React.createElement =>React.createElement is JS obj =>
// When it renders this JS obj get rendered as HTML element
const JsxHeading = () => <h1>Hii from Namaste JSX🚀</h1>;
// console.log(jsxHeading);

const HeadingComponent = () => (
  <div id="container">
    <JsxHeading />
    <h2>Hello from React Component2</h2>
    <marquee>Hiii</marquee>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
