// eslint-disable-next-line
import React from "react";
import "./App.css";
import { Todo } from "./Components/Todo";
import { Signup } from "./Components/Signup.js";
import { Signin } from "./Components/Signin.js";
import { Main } from "./Components/Main.js";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      renderer: (params = {}) => <Main {...params} />,
    },
    {
      path: "/todo",
      renderer: (params = {}) => <Todo {...params} />,
    },
    {
      path: "/signin",
      renderer: (params = {}) => <Signin {...params} />,
    },
    {
      path: "/signup",
      renderer: (params = {}) => <Signup {...params} />,
    },
  ];
  return (
    <Provider store={store}>
      <div className="main">
        <h2>Welcome to the World</h2>

        <ReactRoutes>
          {routes.map((item, i) => (
            <Route key={i} path={item.path} element={item.renderer()} />
          ))}

          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </ReactRoutes>
      </div>
    </Provider>
  );
}

export default App;
