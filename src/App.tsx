import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComp } from "./components/Header";

const App = () => {
  return (
    <div>
      <HeaderComp />
      <Outlet />
    </div>
  );
};

export default App;
