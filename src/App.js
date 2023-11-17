import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Home from "./pages/MainPage";
import TodoInput from "./pages/TodoInputPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Name from "./pages/Name";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Name/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/todoinput" element={<TodoInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
