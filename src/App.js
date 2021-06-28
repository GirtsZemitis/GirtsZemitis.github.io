import React, { useState, useReducer } from "react";

export function App() {
  const [source, setSource] = useState(null);

  return (
    <div>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />{" "}
      <button onClick={setSource(null)}>Reset</button>
      {source && <iframe width="320" height="600" src={source}></iframe>}
    </div>
  );
}
