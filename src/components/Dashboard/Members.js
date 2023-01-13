import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import MemberTable from "./MemberTable";

const Members = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/create-new-member");
  };
  const table = [
    { numberOfTask: "1 ", assignTo: "rafat" },
    { numberOfTask: "2 ", assignTo: "rohan" },
    {
      numberOfTask: "3 ",
      assignTo: "azrin",
    },
    { numberOfTask: "4 ", assignTo: "ahnaf" },
    { numberOfTask: "5 ", assignTo: "arosh" },
    { numberOfTask: "6 ", assignTo: "shehtaj" },
    {
      numberOfTask: "7 ",
      assignTo: "fabihan",
    },
  ];
  return (
    <Navbar>
      <div className="mockup-window border border-base-300 mt-5">
        <div className="justify-center px-4 py-4 border-t border-base-300">
          <div className="hero max-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="overflow-x-auto border-red-200">
                <table className="table w-full border rounded-lg">
                  <thead>
                    <tr>
                      <th>Member Name</th>
                      <th>Number Of Tasks</th>
                    </tr>
                  </thead>
                  {table.map((data) => {
                    return <MemberTable data={data} />;
                  })}
                </table>
              </div>
              <div>
                <button className="btn btn-outline btn-success" onClick={goTo}>
                  Create New Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default Members;
