import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Thanks } from "./pages/Thanks/Thanks";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
