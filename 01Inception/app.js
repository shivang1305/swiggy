/**
 * Hello world code in javascript
 */

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript!!!";

// const rootContainer = document.getElementById("root-container");
// rootContainer.appendChild(heading);

//-------------------------------------------------------------------------------------------------------------------//

/**
 * Hello world code in react
 */

// const heading = React.createElement(
//   "h1", // html tag name
//   { id: "heading" }, // attributes we need inside the tag
//   "Hello world from React!!!" // innerHTML (both the attributes and values are treated as props)
// );

// console.log(heading); // createElement returns a simple js object

// const root = ReactDOM.createRoot(document.getElementById("root-container"));

// root.render(heading); // render() converts the heading object to h1 tag and puts inside the root container in the DOM

//-------------------------------------------------------------------------------------------------------------------//

/**
 * Nested HTML Tags in React
 *
 * <div>
 *    <div>
 *       <h1>I am a h1 tag</h1>
 *    </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h11 tag"),
    React.createElement("h2", {}, "I am h22 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root-container"));

root.render(parent);
