import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
   return (
      <BrowserRouter basename="/form-traverse">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
