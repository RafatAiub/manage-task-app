import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Home/Login";
import Main from "./components/main/Main";
import Tasks from "./components/Dashboard/Tasks";
import Members from "./components/Dashboard/Members";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="dashboard/:user" element={<Main />} />
        <Route path="/dashboard/tasks" element={<Tasks />} />
        <Route path="/dashboard/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
