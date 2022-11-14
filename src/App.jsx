import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Pages/home";

function App() {

  return (
    <div className="App">
      <Home/>
      <Outlet/>
    </div>
  )
}

export default App
