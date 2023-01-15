import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Home/Login";
import Main from "./components/main/Main";
import Tasks from "./components/Dashboard/Tasks";
import Members from "./components/Dashboard/Members";
import AssignTask from "./components/Dashboard/AssignTask";
import CreateMember from "./components/Dashboard/CreateMember";
import UpdateTask from "./components/Dashboard/Update/UpdateTask";
import NotFound from "./NotFound";
import Protected from "./components/Protected";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Main />} />
        <Route path="/dashboard/tasks" element={<Tasks />} />
        <Route path="/add-task" element={<AssignTask />} />
        <Route path="/update-task/:id" element={<UpdateTask />} />
        <Route path="/create-new-member" element={<CreateMember />} />
        <Route path="/dashboard/members" element={<Members />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
