import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  const { user } = useParams();
  const navigate = useNavigate();
  if (!localStorage.authenticated) {
    navigate("/");
  } else
    return (
      <>
        <Navbar user={user}>
          <Dashboard />
        </Navbar>

        <Footer />
      </>
    );
};

export default Main;
