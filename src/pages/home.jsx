import React, { useState } from "react";

export default function HomePage() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="container">
      <h1>HomePage</h1>
    </div>
  );
}
