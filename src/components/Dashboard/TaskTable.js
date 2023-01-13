import React from "react";

const TaskTable = ({ data }) => {
  return (
    <tbody>
      <tr>
        <td>{data.title}</td>
        <td>{data.assignTo}</td>
        <td>{data.creationDate}</td>
        <td>
          <button className="btn btn-outline btn-info">update</button>
        </td>
        <td>
          <button className="btn btn-outline btn-warning">delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default TaskTable;
