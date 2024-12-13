import "./App.css";

import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      Edit
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)} data-testid="btn">
        Increment
      </button>
    </div>
  );
}

export default App;
