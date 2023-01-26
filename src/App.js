import { useState } from "react";
import Rating from "./Rating";
import "./styles.css";

export default function App() {
  function showLog() {
    console.log(rating);
  }
  const [rating, setRating] = useState({ star: "0", comment: "" });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={showLog}>click</button>
      <Rating setRating={setRating} />
    </div>
  );
}
