import React from "react";
import ReactDOM from "react-dom";
import Cards from "./components/Cards";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Cards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
