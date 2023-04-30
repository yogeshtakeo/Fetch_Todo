import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Page from "./Pagination";
import Card from "./Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-3 gap-12 ">
          <Card />
        </div>
      </div>
      <div className="flex-end"></div>
      <Page />
    </>
  );
}

export default App;
