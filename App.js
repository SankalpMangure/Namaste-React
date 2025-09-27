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
import React from "react";
import ReactDOM from "react-dom/client";

// react Element
const heading = (
  <h1>
    this is JSX
  </h1>
)

// react Component
const HeadingTitle = () => (
  <h1>
    this is another component calling in below componenet ===== componenet composition
  </h1>
)

// react Component
const HeadingComponent = () => (
  <div>
    <h1>this is function componenet</h1>
    <h2>{heading}</h2>
    <HeadingTitle />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(<HeadingComponent />)