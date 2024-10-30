import React, { useReducer } from "react";
import { initialState,reducer } from "./store/state";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleName = (e) => {
    dispatch({ type: "name", payload: e.target.value });
  };

  const handleSurname = (e) => {
    dispatch({ type: "surname", payload: e.target.value });
  };

  const handleEmail = (e) => {
    dispatch({ type: "email", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "isVisible", payload: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => handleName(e)}
          value={state.name}
        />
        <input
          type="text"
          placeholder="surname"
          onChange={(e) => handleSurname(e)}
          value={state.surname}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => handleEmail(e)}
          value={state.email}
        />
        <button type="submit">Click me and show form values</button>
      </form>
      {state.isVisible && (
        <div>
          {state.name}
          {state.surname}
          {state.email}
        </div>
      )}
    </>
  );
}

export default App;
