import React from "react";
import Review from "./components/Review.js";

function App() {
  return (
    <main>
    <div className="container">
      <div className="title">
      <h2> Our Reviews </h2>
      <div className="underline"></div>
      </div>
    </div>
    <Review/>
    </main>

  );
}

export default App;
