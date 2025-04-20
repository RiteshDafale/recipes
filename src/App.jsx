import React from "react";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/recipes" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
