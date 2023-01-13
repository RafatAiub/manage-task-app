import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const CreateMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <Navbar>
      <div className="flex hero h-screen bg-accent justify-center items-center ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-center text-2xl">Create New Members</h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="task description"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

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
                onClick={() => navigate("/dashboard/members")}
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

export default CreateMember;
