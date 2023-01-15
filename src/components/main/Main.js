import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  // const navigate = useNavigate();
  // if (!localStorage.authenticated) {
  //   console.log(localStorage);
  //   navigate("/");
  // } else
  return (
    <>
      <Navbar>
        <Dashboard />
      </Navbar>

      <Footer />
    </>
  );
};

export default Main;
