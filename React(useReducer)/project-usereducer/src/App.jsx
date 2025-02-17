import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    index:1,
    element: <div>tee
      <Outlet/>
    </div>,

    children: [
      {
        path: "team",
        element: <div>salam</div>,
      },
      {
        path: "test",
        element: <div>test</div>,
      },
    ],
  },
]);

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const handleName = (e) => {
  //   dispatch({ type: "name", payload: e.target.value });
  // };

  // const handleSurname = (e) => {
  //   dispatch({ type: "surname", payload: e.target.value });
  // };

  // const handleEmail = (e) => {
  //   dispatch({ type: "email", payload: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "isVisible", payload: true });
  // };

  // return (
  //   <Router>
  //     <Routes>

  //       <Route path='/' element={<Navbar/>}/>
  //       <Route path='/about' element={<div>about</div>}/>
  //     {/* <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="name"
  //         onChange={(e) => handleName(e)}
  //         value={state.name}
  //       />
  //       <input
  //         type="text"
  //         placeholder="surname"
  //         onChange={(e) => handleSurname(e)}
  //         value={state.surname}
  //       />
  //       <input
  //         type="text"
  //         placeholder="email"
  //         onChange={(e) => handleEmail(e)}
  //         value={state.email}
  //       />
  //       <button type="submit">Click me and show form values</button>
  //     </form>
  //     {state.isVisible && (
  //       <div>
  //         {state.name}
  //         {state.surname}
  //         {state.email}
  //       </div>
  //     )} */}
  //     </Routes>
  //     </Router>
  // );

  return <RouterProvider router={router} />;
}

export default App;
