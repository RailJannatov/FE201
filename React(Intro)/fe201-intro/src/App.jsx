import React, { useState } from "react";

import "./App.css";

import { HandleButton } from "../src/components/Action/index";
import { CounterContent } from "./Counter";

// reactda propslar

function App() {
  const [state, setState] = useState(1);
  const [counter, setCounter] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleNumber = (event) => {
    setNumberValue(event.target.value);
  };

  return (
    <div className="App">
      <CounterContent counterValue={state} counterText="Counter" />
      <CounterContent counterValue={counter} counterText="setTimeountCounter" />
      <HandleButton
        buttonText="click me and increase"
        handleCounter={handleCounter}
      />
      {/* <CustomInput
        inputType={"text"}
        placeholder={"write something"}
        handleInput={handleInput}
      />
      <CustomInput
        inputType={"number"}
        placeholder={"write something"}
        handleInput={handleNumber}
      />
      <Text text={inputValue} />
      <Text text={numberValue} /> */}
    </div>
  );
}

export default App;
