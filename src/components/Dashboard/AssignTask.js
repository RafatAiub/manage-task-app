import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const AssignTask = () => {
  const [task, setTask] = useState([]);
  console.log(task);

  //fetch tasks
  const fetchTask = async () => {
    const res = await api.get("/tasks");
    return res.data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await fetchTask();
      if (allTasks) setTask(allTasks);
    };
    getTasks();
  }, []);
  const navigate = useNavigate();
  const options = [
    {
      label: "rafat",

      value: "rafat",
    },

    {
      label: "rohan",

      value: "rohan",
    },

    {
      label: "azrin",

      value: "azrin",
    },

    {
      label: "ahnaf",

      value: "ahnaf",
    },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTO] = useState();

  const addTask = async () => {
    const req = {
      id: (task.length + 1).toString(),
      title: title,
      description: description,
      assignTo: assignTo,
    };

    const res = await api.post("/tasks", req);

    console.log(res);
  };

  return (
    <Navbar>
      <div className="flex hero h-screen bg-accent justify-center items-center ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-center text-2xl">Assign New Task</h1>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="task description"
                className="input input-bordered"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="description"
                className="textarea textarea-bordered"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <select
              className="select select-bordered w-full max-w-xs"
              value={assignTo}
              onChange={(e) => setAssignTO(e.target.value)}
            >
              <option disabled selected>
                Assign To
              </option>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  addTask();
                }}
              >
                Assign
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate("/dashboard/tasks")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default AssignTask;
