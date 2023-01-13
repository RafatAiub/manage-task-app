import React from "react";
import { useNavigate } from "react-router-dom";
import TaskTable from "./TaskTable";

const Tasks = () => {
  const navigator = useNavigate();
  const goTo = () => {
    navigator("/add-task");
  };
  const table = [
    { title: "module Design", creationDate: "1 jan,2023", assignTo: "rafat" },
    { title: "Design pages", creationDate: "2 jan,2023", assignTo: "rohan" },
    {
      title: "check responsiveness",
      creationDate: "3 jan,2023",
      assignTo: "azrin",
    },
    { title: "Draw Diagram", creationDate: "4 jan,2023", assignTo: "ahnaf" },
    { title: "Testing", creationDate: "5 jan,2023", assignTo: "arosh" },
    { title: "Set Character", creationDate: "6 jan,2023", assignTo: "shehtaj" },
    {
      title: "re-check-functionality",
      creationDate: "7 jan,2023",
      assignTo: "fabihan",
    },
  ];

  return (
    <div className="mockup-window border border-base-300 mt-5">
      <div className="justify-center px-4 py-4 border-t border-base-300">
        <div className="hero max-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="overflow-x-auto border-red-200">
              <table className="table w-full border rounded-lg">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Assign to</th>
                    <th>Date</th>
                  </tr>
                </thead>
                {table.map((data) => {
                  return <TaskTable data={data} />;
                })}
              </table>
            </div>
            <div>
              <button className="btn btn-outline btn-success" onClick={goTo}>
                Assign New task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
