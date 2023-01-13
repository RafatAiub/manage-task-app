import React from "react";

const TaskTable = ({ data }) => {
  return (
    <tbody>
      <tr>
        <td>{data.title}</td>
        <td>{data.assignTo}</td>
        <td>{data.creationDate}</td>
      </tr>
    </tbody>
  );
};

export default TaskTable;
