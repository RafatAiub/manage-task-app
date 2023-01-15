import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const TaskTable = ({ data }) => {
  const navigate = useNavigate();
  const removeThisTask = async (id) => {
    await api.delete(`/tasks/${id}`);
  };

  const updateTask = (id) => navigate(`/update-task/${id}`);

  return (
    <tbody>
      <tr>
        <td>{data.title}</td>
        <td>{data.assignTo}</td>
        <td>{new Date().toLocaleString()}</td>
        <td>
          <button
            className="btn btn-outline btn-info"
            onClick={() => updateTask(data.id)}
          >
            update
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline btn-warning"
            onClick={() => {
              removeThisTask(data.id);
              window.location.reload(false);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TaskTable;
