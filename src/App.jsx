import { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
