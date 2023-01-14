import React from "react";

const MemberTable = ({ d }) => {
  // //console.log(d.assignTo, d.totalNumberOfTask);
  return (
    <tbody>
      <tr>
        <td>{d.assignTo}</td>
        <td>{d.totalNumberOfTask}</td>
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

export default MemberTable;
