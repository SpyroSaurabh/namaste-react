const heading = React.createElement("h1", {}, "Hello from Saurabh");
const heading2 = React.createElement("h2", { id: "heading2" }, "I am h2 tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

const div1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [heading, heading2]),
  React.createElement("div", { id: "child2" }, [heading, heading2]),
]);
console.log(div1);

root.render(div1);
