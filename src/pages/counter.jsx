import React, { useState } from "react";
import Counter from "../features/counter";

export default function CounterPage() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="container">
      <h1>HomePage</h1>
      {showCounter && <Counter />}
      <button
        className="btn btn-danger"
        onClick={() => setShowCounter((prev) => !prev)}
      >
        Toggle COunter
      </button>
    </div>
  );
}
