import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
