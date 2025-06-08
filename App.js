/**
 * <div id="parent">
 *  <div id="children">
 *    <h1>I am H1 Bhaiya</h1>
 *    <h1>I am H2 Bhaiya</h1>
 *  </div>
 * <div id="children2">
 *    <h1>I am H1 Bhaiya from child 2</h1>
 *    <h1>I am H2 Bhaiya from child 2</h1>
 *  </div>
 * </div>
 */

const heading = React.createElement(
  "h1",
  {},
  [React.createElement(
    "div",
    { id: "children" },
    [
      React.createElement("h1", { id: "h1_tag" }, "I am H1 Bhaiya"),
      React.createElement("h1", { id: "h2_tag" }, "I am H2 Bhaiya")
    ]
  ),
  React.createElement(
    "div",
    { id: "children2" },
    [
      React.createElement("h1", { id: "h1_tag" }, "I am H1 Bhaiya from child 2"),
      React.createElement("h1", { id: "h2_tag" }, "I am H2 Bhaiya from child 2")
    ]
  )]
);
const parent = React.createElement("div", { id: "parent" }, heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);