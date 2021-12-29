import { Routes, Route } from "react-router-dom";
import Home from "./View/Home"
import Tictactoe from "./View/Tictactoe"
import Header from "./View/Header"
import Sidebar from "./View/Sidebar"
import './App.css';
import './sass/app.sass';
import React from "react";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="wrapper">
          <Sidebar></Sidebar>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="tictactoe" element={<Tictactoe />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
