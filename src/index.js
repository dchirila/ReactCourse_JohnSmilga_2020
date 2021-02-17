import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  // NOTE: function name has to start with UPPERcase (for React)
  return <h4>this is Dragos and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
