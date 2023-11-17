import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import TodoInputPage from '../pages/TodoInputPage';
import Name from '../pages/Name';

function RouterTodo() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/TodoInput" element={<TodoInputPage />} />
          </Routes>
        </BrowserRouter>
      );
    }

export default RouterTodo;
