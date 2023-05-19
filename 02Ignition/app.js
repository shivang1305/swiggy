import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like syntax
// JSX ==> React.createElement() ==> JS Object ==> HTML Element (render)
// React Element

const element = <span>This is a span</span>;

const Title = () => {
  return (
    <h1 className="head" tabIndex={1}>
      This h1 tag is created using JSX
      <br />
      {element}
    </h1>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <>
        <div id="container">
          <h1 className="heading">Namaste React Functional Component</h1>
        </div>
        <div id="conatiner2"></div>
      </>
    </>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(<HeadingComponent />);
root2.render(<HeadingComponent />);
