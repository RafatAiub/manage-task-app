import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssignTask = () => {
  const navigate = useNavigate();
  const options = [
    {
      label: "Apple",

      value: "apple",
    },

    {
      label: "Mango",

      value: "mango",
    },

    {
      label: "Banana",

      value: "banana",
    },

    {
      label: "Pineapple",

      value: "pineapple",
    },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTO] = useState();
  console.log(title, description, assignTo);

  return (
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
              //   onClick={() => handleSubmit()}
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
  );
};

export default AssignTask;
