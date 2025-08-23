import React, { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const clearInst = useRef(null);
  useEffect(() => {
    console.log("mounting phase");
    const instance = setInterval(() => {
      console.log(count);
      setCount((count) => count + 1);
    }, 1000);
    clearInst.current = instance;
    return () => {
      console.log("desttoy the compoej");
      if (clearInst) {
        clearInterval(clearInst.current);
      }
    };
  }, []);
  useEffect(() => {
    console.log("Re-renders happened");
  });
  console.log(count);
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <div className="col-6 card mt-4">
          <h1 className="p-5 fs-2 text-primary border-1 text-center">
            {count}
          </h1>
        </div>
      </div>
    </div>
  );
}
