import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHook from "../Hooks/UserHook";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setAuthenticate] = useState(
    localStorage.getItem(localStorage.getItem("authenticate") || false)
  );

  const users = UserHook();
  console.log(users);

  // const users = [
  //   { username: "admin", password: "1" },
  //   { username: "rafat", password: "2" },
  //   { username: "rohan", password: "3" },
  //   { username: "azrin", password: "4" },
  // ];
  //console.log(authenticate, username, password);
  const handleSubmit = () => {
    const account = users.find((user) => user.username === username);
    const currentUser = account.username;
    console.log(account);
    if (account && account.password === password) {
      setAuthenticate(true);
      localStorage.setItem("authenticated", true);
      navigate(`/dashboard`);
    }
  };
  return (
    <div className="flex hero h-screen bg-accent justify-center items-center ">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <h1 className="text-center text-2xl">Login</h1>
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="user-name"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
            {/* <div className="divider">OR</div>
            <button className="btn btn-glass hover:btn-accent">
              Continue With Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
