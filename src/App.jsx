import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
   return (
      <BrowserRouter basename="/form-traverse">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
