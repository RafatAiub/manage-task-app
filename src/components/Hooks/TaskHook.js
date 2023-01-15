import { useEffect, useState } from "react";
import api from "../../api/api";

const TaskHook = () => {
  const [tasks, settasks] = useState({});
  const fetchMember = async () => {
    const res = await api.get("/tasks");
    return res.data;
  };

  useEffect(() => {
    const gettasks = async () => {
      const alltasks = await fetchMember();
      if (alltasks) settasks(alltasks);
    };
    gettasks();
  }, []);
  return tasks;
};

export default TaskHook;
