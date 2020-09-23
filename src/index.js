import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const message = "Hello World";
  return (
    <div>
        <div>{message}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));