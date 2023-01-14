import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import TaskTable from "./TaskTable";
import api from "../../api/api";

const Tasks = () => {
  const [task, setTask] = useState([]);
  console.log(task);
  const navigator = useNavigate();
  const goTo = () => {
    navigator("/add-task");
  };

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
  const task_table = [
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
    <Navbar>
      <div className="hero min-h-screen bg-base-200 ">
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
              {task.map((data) => {
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
      <Footer />
    </Navbar>
  );
};

export default Tasks;
