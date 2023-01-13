import React from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const Main = () => {
  const { user } = useParams();
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
